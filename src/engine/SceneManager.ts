import * as THREE from "three";
import { shuffleArray } from "../utils";
import { positions, shapesData, zOffset, zSpacing } from "../shapesData";
import { ADDITION, Brush, Evaluator, SUBTRACTION } from "three-bvh-csg";

type ShapeData = {
  mesh: THREE.Mesh;
  solved: boolean;
  initPos: THREE.Vector3;
  targetPos: THREE.Vector3;
  initRot: THREE.Quaternion;
  targetRot: THREE.Quaternion;
};

export default class SceneManager {
  private canvas: HTMLCanvasElement;
  private shapeColor: THREE.ColorRepresentation = 0xa83232;
  private selectedShapeColor: THREE.ColorRepresentation = 0xfcba03;

  private renderer: THREE.WebGLRenderer;
  private animationFrameId: number = -1;
  private frameRate: number = 60;
  private lastFrameTimestamp: number = 0;
  private shapeSpeed: number = 0.75;
  private shapeYOffset: number = 55;

  private camera: THREE.OrthographicCamera;
  private cameraInitPos: THREE.Vector3;
  private cameraTargetPos: THREE.Vector3;
  private scene: THREE.Scene;
  private raycaster: THREE.Raycaster;

  private basePlane: THREE.Mesh;

  private holeBox: THREE.Mesh | undefined;
  private holePosMap = new Map<string, THREE.Vector3>();

  private shapeMap = new Map<string, ShapeData>();
  private selectedShape: string = "";
  private selectionXZOffset = { x: 0, z: 0 };
  private selectedHole: string = "";

  public get isShapeSelected() {
    return this.selectedShape != "";
  }
  public get isSolved() {
    return [...this.shapeMap.values()].reduce(
      (acc, s) => acc && s.solved,
      true,
    );
  }

  constructor(
    _canvas: HTMLCanvasElement,
    _shapeColor: THREE.ColorRepresentation,
    _selectedShapeColor: THREE.ColorRepresentation,
  ) {
    this.canvas = _canvas;
    this.shapeColor = _shapeColor;
    this.selectedShapeColor = _selectedShapeColor;

    this.camera = new THREE.OrthographicCamera(
      this.canvas.width / -2,
      this.canvas.width / 2,
      this.canvas.height / 2,
      this.canvas.height / -2,
      0.1,
      1000,
    );
    this.cameraInitPos = new THREE.Vector3(0, 400, 500);
    this.cameraTargetPos = new THREE.Vector3().copy(this.cameraInitPos);
    this.camera.position.copy(this.cameraInitPos);
    this.camera.lookAt(0, 0, 0);
    this.camera.updateProjectionMatrix();

    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      canvas: this.canvas,
    });
    // this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(this.canvas.width, this.canvas.height);
    const bgColorRGBString = getComputedStyle(this.canvas).backgroundColor;
    this.renderer.setClearColor(new THREE.Color(bgColorRGBString));

    this.scene = new THREE.Scene();
    this.raycaster = new THREE.Raycaster();

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    this.scene.add(ambientLight);
    const directionalLight1 = new THREE.DirectionalLight(0xffffff, 5);
    directionalLight1.position.set(-50, 100, 50);
    this.scene.add(directionalLight1);
    const directionalLight2 = new THREE.DirectionalLight(0xffffff, 3);
    directionalLight2.position.set(50, 100, -50);
    this.scene.add(directionalLight2);

    this.basePlane = new THREE.Mesh(
      new THREE.PlaneGeometry(this.canvas.width, 1500),
      new THREE.MeshStandardMaterial(),
    );
    this.basePlane.visible = false;
    this.basePlane.name = "basePlane";
    this.basePlane.rotation.x = -Math.PI / 2;
    this.scene.add(this.basePlane);

    this.initShapes();
    this.animate();
  }

  public getRaycastIntersections = (screenX: number, screenY: number) => {
    this.raycaster.setFromCamera(
      new THREE.Vector2(screenX, screenY),
      this.camera,
    );
    return this.raycaster
      .intersectObjects(this.scene.children, true)
      .filter((i) => !this.shapeMap.get(i.object.name)?.solved);
  };

  private animate = (timestamp: number = 0): void => {
    const dt = timestamp - this.lastFrameTimestamp; // ms
    if (dt < 1000 / this.frameRate) {
      this.animationFrameId = requestAnimationFrame(this.animate);
      return;
    }
    this.lastFrameTimestamp = timestamp;

    const t = Math.min((this.shapeSpeed * dt) / 100, 1.0);
    const animatePos = (object: THREE.Object3D, targetPos: THREE.Vector3) => {
      if (object.position.distanceTo(targetPos) < 0.1) {
        object.position.copy(targetPos);
        return true;
      }
      object.position.lerp(targetPos, t);
      return false;
    };

    for (const [_, { mesh, solved, targetPos, targetRot }] of this.shapeMap) {
      const done = animatePos(mesh, targetPos);
      if (done && solved) {
        mesh.visible = false;
        continue;
      }
      const targetQuat = new THREE.Quaternion();
      targetQuat.setFromEuler(mesh.rotation);
      mesh.rotation.setFromQuaternion(targetQuat.slerp(targetRot, t));
      const targetOpactiy = solved ? 0 : 1;
      const material = mesh.material as THREE.Material;
      material.opacity = THREE.MathUtils.lerp(
        material.opacity,
        targetOpactiy,
        t,
      );
    }
    animatePos(this.camera, this.cameraTargetPos);
    if (this.isShapeSelected)
      animatePos(this.basePlane, new THREE.Vector3(0, this.shapeYOffset, 0));
    else animatePos(this.basePlane, new THREE.Vector3());

    this.renderer.render(this.scene, this.camera);
    this.animationFrameId = requestAnimationFrame(this.animate);
  };

  public onThemeChange = (): void => {
    const bgColorRGBString = getComputedStyle(this.canvas).backgroundColor;
    this.renderer.setClearColor(new THREE.Color(bgColorRGBString));
  };

  public onResize = (width: number, height: number): void => {
    this.camera.left = width / -2;
    this.camera.right = width / 2;
    this.camera.top = height / 2;
    this.camera.bottom = height / -2;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height, false);
  };

  public onReset = (): void => {
    this.selectedShape = "";
    this.cameraTargetPos.copy(this.cameraInitPos);
    this.initShapes();
  };

  public initShapes = (): void => {
    const randomPositions = shuffleArray(positions);
    for (let i = 0; i < shapesData.length; i++) {
      const shapeInitData = shapesData[i];
      const x = randomPositions[i].x + shapeInitData.offset.x,
        y = randomPositions[i].y + shapeInitData.offset.y,
        z = randomPositions[i].z + shapeInitData.offset.z;
      let shape = this.shapeMap.get(shapeInitData.type);
      if (!shape) {
        const material = new THREE.MeshStandardMaterial({
          color: this.shapeColor,
          transparent: true,
        });
        const mesh = new THREE.Mesh(shapeInitData.geometry, material);
        mesh.position.set(x, y, z);
        mesh.name = shapeInitData.type;
        shape = {
          mesh,
          solved: false,
          initPos: new THREE.Vector3(x, y, z),
          targetPos: new THREE.Vector3(x, y, z),
          initRot: new THREE.Quaternion(),
          targetRot: new THREE.Quaternion(),
        };
        this.shapeMap.set(mesh.name, shape);
        this.scene.add(mesh);
      } else {
        shape.solved = false;
        shape.mesh.visible = true;
        (shape.mesh.material as THREE.Material).opacity = 1;
        shape.initPos.set(x, y, z);
        shape.targetPos.set(x, y, z);
      }
      shape.mesh.rotation.set(
        shapeInitData.rotation.x,
        shapeInitData.rotation.y,
        shapeInitData.rotation.z,
      );
      shape.initRot.setFromEuler(shape.mesh.rotation);
      shape.targetRot.setFromEuler(shape.mesh.rotation);
    }

    if (this.holeBox) return;
    const randomShapes = shuffleArray(shapesData.filter((h) => h.hole.render));
    const baseBrush = new Brush(
      new THREE.BoxGeometry(this.canvas.width - 25, 80, 80).translate(
        0,
        -15,
        0,
      ),
      new THREE.MeshStandardMaterial({ color: 0xeeeeee }),
    );
    const baseZPos = zOffset - 1.25 * zSpacing;
    baseBrush.position.set(0, 0, baseZPos);
    baseBrush.updateMatrixWorld();
    const csgEvaluator = new Evaluator();
    let holeBrush: Brush | undefined;
    const holeScale = 1.1;
    for (let i = 0; i < randomShapes.length; i++) {
      const hole = randomShapes[i].hole;
      if (!hole.render) continue;
      const brush = new Brush(
        randomShapes[i].geometry.clone().scale(holeScale, holeScale, holeScale),
        new THREE.MeshStandardMaterial({ color: 0x333333 }),
      );
      const posX =
        (this.canvas.width - 100) * (i / (randomShapes.length - 1) - 0.5);
      const holePos = new THREE.Vector3(posX, 15, baseZPos);
      brush.position.copy(holePos);
      this.holePosMap.set(randomShapes[i].type, holePos);
      brush.rotation.set(hole.rotation.x, hole.rotation.y, hole.rotation.z);
      brush.updateMatrixWorld();
      if (holeBrush)
        holeBrush = csgEvaluator.evaluate(holeBrush, brush, ADDITION);
      else holeBrush = brush;
    }
    this.holeBox = csgEvaluator.evaluate(baseBrush, holeBrush!, SUBTRACTION);
    this.holeBox.name = "holeBox";
    this.scene.add(this.holeBox);
  };

  public setSelectedShape = (
    objName: string,
    offsetX: number,
    offsetZ: number,
  ) => {
    const shape = this.shapeMap.get(objName);
    if (!shape) return;
    this.selectedShape = objName;
    shape.targetPos.setY(this.shapeYOffset);
    this.selectionXZOffset = { x: offsetX, z: offsetZ };
    (shape.mesh.material as THREE.MeshStandardMaterial).color = new THREE.Color(
      this.selectedShapeColor,
    );
    this.cameraTargetPos.setY(this.cameraInitPos.y + this.shapeYOffset);
  };

  public setSelectedShapeXZ = (hitPos: THREE.Vector3, isOnBox: boolean) => {
    const shape = this.shapeMap.get(this.selectedShape);
    if (!shape) return;
    if (!isOnBox) {
      shape.targetPos.setX(hitPos.x + this.selectionXZOffset.x);
      shape.targetPos.setZ(hitPos.z + this.selectionXZOffset.z);
      shape.targetRot.copy(shape.initRot);
      this.selectedHole = "";
    } else {
      let closestHole: [string, THREE.Vector3] | undefined;
      for (const hole of this.holePosMap) {
        if (
          !closestHole ||
          closestHole[1].distanceToSquared(hitPos) >
            hole[1].distanceToSquared(hitPos)
        )
          closestHole = hole;
      }
      const shapeData = shapesData.find((h) => h.type === this.selectedShape);
      if (!closestHole || !shapeData) return;
      const [holeType, holePos] = closestHole;
      this.selectedHole = holeType;
      shape.targetPos.setX(holePos.x + shapeData.hole.shapeOffset?.x);
      shape.targetPos.setY(this.shapeYOffset + shapeData.hole.shapeOffset?.y);
      shape.targetPos.setZ(holePos.z + shapeData.hole.shapeOffset?.z);
      shape.targetRot.setFromEuler(
        new THREE.Euler(
          shapeData.hole.rotation.x,
          shapeData.hole.rotation.y,
          shapeData.hole.rotation.z,
        ),
      );
    }
  };

  public clearSelectedShape = () => {
    const shape = this.shapeMap.get(this.selectedShape);
    if (!shape) return;
    (shape.mesh.material as THREE.MeshStandardMaterial).color = new THREE.Color(
      this.shapeColor,
    );
    this.cameraTargetPos.copy(this.cameraInitPos);
    const compatibleHoles = shapesData.find(
      (d) => d.type === this.selectedShape,
    )?.compatibleHoles;
    if (compatibleHoles && compatibleHoles.includes(this.selectedHole)) {
      shape.targetPos.copy(
        this.holePosMap.get(this.selectedHole)!.clone().setY(-35),
      );
      shape.solved = true;
    } else {
      shape.targetPos.copy(shape.initPos);
      shape.targetRot.copy(shape.initRot);
    }
    this.selectedHole = "";
    this.selectedShape = "";
  };

  public dispose = (): void => {
    if (this.animationFrameId !== -1)
      cancelAnimationFrame(this.animationFrameId);
    this.scene?.traverse((obj) => {
      if (obj instanceof THREE.Mesh) {
        obj.geometry.dispose();
        obj.material.dispose();
      }
    });
    this.renderer?.dispose();
  };
}
