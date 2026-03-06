import * as THREE from "three";
import { shuffleArray } from "../utils";
import {
  positions,
  shapesData,
  zOffset,
  zSpacing,
  type HoleType,
  type ShapeType,
} from "../shapesData";
import { ADDITION, Brush, Evaluator, SUBTRACTION } from "three-bvh-csg";
import Animator from "./Animator";

type ShapeData = {
  mesh: THREE.Mesh;
  solved: boolean;
  initPos: THREE.Vector3;
  initRot: THREE.Euler;
};

export default class SceneManager {
  private canvas: HTMLCanvasElement;
  private shapeColor: THREE.ColorRepresentation = 0xa83232;
  private selectedShapeColor: THREE.ColorRepresentation = 0xfcba03;

  private renderer: THREE.WebGLRenderer;
  private animationFrameId: number = -1;
  private frameRate: number = 60;
  private lastFrameTimestamp: number = 0;
  private shapeYOffset: number = 55;
  private animator = new Animator();

  private camera: THREE.OrthographicCamera;
  private cameraInitPos: THREE.Vector3;
  private scene: THREE.Scene;
  private raycaster: THREE.Raycaster;

  private basePlane: THREE.Mesh;

  private holeBox: THREE.Mesh | undefined;
  private holePosMap = new Map<HoleType, THREE.Vector3>();
  private shapeMap = new Map<ShapeType, ShapeData>();
  private selectedShape: ShapeType | undefined;
  private selectionXZOffset = { x: 0, z: 0 };
  private selectedHole: HoleType | undefined;

  public get isShapeSelected() {
    return !!this.selectedShape;
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

    const width = this.canvas.clientWidth,
      height = this.canvas.clientHeight;
    this.camera = new THREE.OrthographicCamera(
      width / -2,
      width / 2,
      height / 2,
      height / -2,
      0.1,
      1000,
    );
    this.cameraInitPos = new THREE.Vector3(0, 400, 500);
    this.camera.position.copy(this.cameraInitPos);
    this.camera.lookAt(0, 0, 0);
    this.camera.updateProjectionMatrix();

    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      canvas: this.canvas,
    });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    this.renderer.setSize(width, height, false);
    const bgColorRGBString = getComputedStyle(this.canvas).backgroundColor;
    this.renderer.setClearColor(new THREE.Color(bgColorRGBString));

    this.scene = new THREE.Scene();
    this.raycaster = new THREE.Raycaster();

    const ambientLight = new THREE.AmbientLight(0xffffff, 2);
    this.scene.add(ambientLight);
    const directionalLight1 = new THREE.DirectionalLight(0xffffff, 3);
    directionalLight1.position.set(-100, 100, 50);
    this.scene.add(directionalLight1);
    const directionalLight2 = new THREE.DirectionalLight(0xffffff, 2);
    directionalLight2.position.set(0, 100, 0);
    this.scene.add(directionalLight2);

    this.basePlane = new THREE.Mesh(
      new THREE.PlaneGeometry(width, height * 2),
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
      .filter((i) => !this.shapeMap.get(i.object.name as ShapeType)?.solved);
  };

  private animate = (timestamp: number = 0) => {
    const dt = timestamp - this.lastFrameTimestamp; // ms
    if (dt < 1000 / this.frameRate) {
      this.animationFrameId = requestAnimationFrame(this.animate);
      return;
    }
    this.lastFrameTimestamp = timestamp;
    this.animator.update(dt);
    for (const shapeData of this.shapeMap.values()) {
      if (shapeData.solved && !this.animator.isAnimationActive(shapeData.mesh))
        shapeData.mesh.visible = false;
    }
    this.renderer.render(this.scene, this.camera);
    this.animationFrameId = requestAnimationFrame(this.animate);
  };

  public onThemeChange = () => {
    const bgColorRGBString = getComputedStyle(this.canvas).backgroundColor;
    this.renderer.setClearColor(new THREE.Color(bgColorRGBString));
  };

  public onResize = () => {
    const width = this.canvas.clientWidth;
    const height = this.canvas.clientHeight;
    this.camera.left = width / -2;
    this.camera.right = width / 2;
    this.camera.top = height / 2;
    this.camera.bottom = height / -2;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height, false);
  };

  public onReset = () => {
    this.selectedShape = undefined;
    this.selectedHole = undefined;
    this.animator.animate(this.camera, {
      position: this.cameraInitPos,
    });
    this.initShapes();
  };

  public initShapes = () => {
    const randomPositions = shuffleArray(positions);
    for (let i = 0; i < shapesData.length; i++) {
      const shapeInitData = shapesData[i];
      const shape = this.shapeMap.get(shapeInitData.type);
      if (!shape) {
        const material = new THREE.MeshStandardMaterial({
          color: this.shapeColor,
          transparent: true,
        });
        const mesh = new THREE.Mesh(shapeInitData.geometry, material);
        mesh.position.copy(randomPositions[i]);
        mesh.name = shapeInitData.type;
        mesh.rotation.copy(shapeInitData.rotation);
        this.shapeMap.set(shapeInitData.type, {
          mesh,
          solved: false,
          initPos: mesh.position.clone(),
          initRot: mesh.rotation.clone(),
        });
        this.scene.add(mesh);
      } else {
        shape.solved = false;
        shape.mesh.visible = true;
        shape.initPos.copy(randomPositions[i]);
        this.animator.animate(shape.mesh, {
          opacity: 1,
          color: this.shapeColor,
          position: shape.initPos,
          rotation: shape.initRot,
        });
      }
    }

    if (this.holeBox) return;
    const randomShapes = shuffleArray(shapesData.filter((h) => !!h.hole));
    const baseWidth = Math.max(this.canvas.clientWidth, 384) - 25;
    const baseBrush = new Brush(
      new THREE.BoxGeometry(baseWidth, 80, 80).translate(0, -15, 0),
      new THREE.MeshStandardMaterial({ color: 0xeeeeee }),
    );
    const baseZPos = zOffset - 1.25 * zSpacing;
    baseBrush.position.set(0, 0, baseZPos);
    baseBrush.updateMatrixWorld();
    const csgEvaluator = new Evaluator();
    const baseHollowScale = 0.7;
    let holeBrush = new Brush(
      baseBrush.geometry
        .clone()
        .scale(baseHollowScale, baseHollowScale, baseHollowScale),
      new THREE.MeshStandardMaterial({ color: 0x333333 }),
    );
    holeBrush.position.copy(baseBrush.position);
    holeBrush.updateMatrixWorld();

    const holeScale = 1.1;
    const holeOffsetY = 15;
    for (let i = 0; i < randomShapes.length; i++) {
      const shapeData = randomShapes[i];
      if (!shapeData.hole) continue;
      const shapeGeometry = randomShapes[i].geometry;
      const brush = new Brush(
        shapeGeometry.clone().scale(holeScale, holeScale, holeScale),
        new THREE.MeshStandardMaterial({ color: 0x333333 }),
      );
      const posX = (baseWidth - 100) * (i / (randomShapes.length - 1) - 0.5);
      brush.position.set(posX, holeOffsetY, baseZPos);
      this.holePosMap.set(shapeData.hole.type, brush.position);
      if (shapeData.hole.rotation) brush.rotation.copy(shapeData.hole.rotation);
      brush.updateMatrixWorld();
      holeBrush = csgEvaluator.evaluate(holeBrush, brush, ADDITION);
    }

    this.holeBox = csgEvaluator.evaluate(baseBrush, holeBrush!, SUBTRACTION);
    this.holeBox.name = "holeBox";
    this.scene.add(this.holeBox);
  };

  public setSelectedShape = (
    objName: ShapeType,
    offsetX: number,
    offsetZ: number,
  ) => {
    const shape = this.shapeMap.get(objName);
    if (!shape) return;
    this.selectedShape = objName;
    this.animator.animate(shape.mesh, {
      position: shape.initPos.clone().setY(this.shapeYOffset),
      color: this.selectedShapeColor,
    });
    this.selectionXZOffset = { x: offsetX, z: offsetZ };
    this.animator.animate(this.camera, {
      position: this.camera.position
        .clone()
        .setY(this.cameraInitPos.y + this.shapeYOffset),
    });
    this.animator.animate(this.basePlane, {
      position: new THREE.Vector3(0, this.shapeYOffset, 0),
    });
  };

  public setSelectedShapeXZ = (hitPos: THREE.Vector3, isOnBox: boolean) => {
    if (!this.selectedShape) return;
    const shape = this.shapeMap.get(this.selectedShape);
    if (!shape) return;
    if (!isOnBox) {
      this.selectedHole = undefined;
      this.animator.animate(shape.mesh, {
        position: new THREE.Vector3(
          hitPos.x + this.selectionXZOffset.x,
          this.shapeYOffset,
          hitPos.z + this.selectionXZOffset.z,
        ),
        rotation: shape.initRot,
      });
    } else {
      const shapeData = shapesData.find((d) => d.type === this.selectedShape);
      let closestHole: [HoleType, THREE.Vector3] | undefined;
      for (const hole of this.holePosMap) {
        const dist = hole[1].distanceToSquared(hitPos);
        if (!closestHole || dist < closestHole[1].distanceToSquared(hitPos))
          closestHole = hole;
      }
      if (!closestHole || !shapeData) return;
      const [holeType, holePos] = closestHole;
      this.selectedHole = holeType;

      const holeAlignment =
        shapeData.holeAlignment?.find(
          (a) => a.holeType !== "any" && a.holeType.includes(holeType),
        ) ?? shapeData.holeAlignment?.find((a) => a.holeType === "any");
      this.animator.animate(shape.mesh, {
        position: new THREE.Vector3(
          holePos.x + (holeAlignment?.offset?.x ?? 0),
          this.shapeYOffset + (holeAlignment?.offset?.y ?? 0),
          holePos.z + (holeAlignment?.offset?.z ?? 0),
        ),
        rotation: holeAlignment?.rotation ?? new THREE.Euler(),
      });
    }
  };

  public clearSelectedShape = () => {
    this.animator.animate(this.camera, {
      position: this.cameraInitPos,
    });
    this.animator.animate(this.basePlane, {
      position: new THREE.Vector3(),
    });

    if (!this.selectedShape) return;
    const shape = this.shapeMap.get(this.selectedShape);
    if (!shape) {
      this.selectedShape = undefined;
      this.selectedHole = undefined;
      return;
    }
    const shapeData = shapesData.find((d) => d.type === this.selectedShape);
    const solved = this.selectedHole
      ? shapeData?.compatibleHoles.includes(this.selectedHole) || false
      : false;
    // console.log(
    //   `shape ${this.selectedShape} is ${
    //     solved ? "solved" : "not solved"
    //   } (hole: ${this.selectedHole})`,
    // );
    if (solved) {
      // animate fading into hole
      this.animator.animate(shape.mesh, {
        opacity: 0,
        color: this.shapeColor,
        position: this.holePosMap.get(this.selectedHole!)!.clone().setY(-35),
      });
      shape.solved = true;
    } else {
      // reset shape
      this.animator.animate(shape.mesh, {
        color: this.shapeColor,
        position: shape.initPos,
        rotation: shape.initRot,
      });
    }
    this.selectedHole = undefined;
    this.selectedShape = undefined;
  };

  public dispose = () => {
    if (this.animationFrameId !== -1)
      cancelAnimationFrame(this.animationFrameId);
    this.scene?.traverse((obj) => {
      if (obj instanceof THREE.Mesh) {
        obj.geometry.dispose();
        obj.material.dispose();
      }
    });
    this.renderer?.dispose();
    this.animator.clearAnimations();
  };
}
