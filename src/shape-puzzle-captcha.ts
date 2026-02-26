import { LitElement, css, html } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import * as THREE from "three";
import { BufferGeometryUtils } from "three/examples/jsm/Addons.js";
import reloadSvg from "./assets/reload.svg?raw";
import infoSvg from "./assets/info.svg?raw";
import audioSvg from "./assets/audio.svg?raw";

@customElement("shape-puzzle-captcha")
export class ShapePuzzleCaptcha extends LitElement {
  @property({ type: Number, attribute: "shape-color" })
  public shapeColor: number = 0xa83232;

  private animationFrameId: number | null = null;

  @state()
  private shapes = [
    {
      type: "cube",
      geometry: new THREE.BoxGeometry(50, 50, 50),
      position: { x: -120, y: 0, z: -150 },
      rotation: { x: 0, y: Math.PI / 6, z: 0 },
    },
    {
      type: "cylinder",
      geometry: new THREE.CylinderGeometry(25, 25, 50, 32),
      position: { x: -120, y: 0, z: 0 },
      rotation: { x: 0, y: Math.PI / -3, z: Math.PI / 2 },
    },
    {
      type: "half-cylinder",
      geometry: BufferGeometryUtils.mergeGeometries([
        new THREE.CylinderGeometry(25, 25, 60, 32, 1, false, 0, Math.PI),
        new THREE.PlaneGeometry(60, 60).rotateY(Math.PI / -2),
      ]),
      position: { x: 0, y: 0, z: -140 },
      rotation: { x: 0, y: Math.PI / 6, z: Math.PI / 2 },
    },
    {
      type: "triangular prism",
      geometry: new THREE.ExtrudeGeometry(
        new THREE.Shape([
          new THREE.Vector2(0, 0),
          new THREE.Vector2(50, 0),
          new THREE.Vector2(25, 50),
        ]),
        { depth: 50, bevelEnabled: false },
      ).translate(-25, -25, -25),
      position: { x: 0, y: 0, z: -5 },
      rotation: { x: 0, y: Math.PI / 6, z: 0 },
    },
    {
      type: "small cuboid",
      geometry: new THREE.BoxGeometry(30, 30, 60),
      position: { x: 120, y: 0, z: -150 },
      rotation: { x: 0, y: Math.PI / 6, z: 0 },
    },
    {
      type: "big cuboid",
      geometry: new THREE.BoxGeometry(50, 50, 80),
      position: { x: 120, y: 0, z: 0 },
      rotation: { x: 0, y: Math.PI / -3, z: 0 },
    },
  ];

  protected firstUpdated(): void {
    const scene = new THREE.Scene();
    const canvas = this.shadowRoot?.getElementById(
      "canvas",
    ) as HTMLCanvasElement;
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;
    const camera = new THREE.OrthographicCamera(
      canvas.width / -2,
      canvas.width / 2,
      canvas.height / 2,
      canvas.height / -2,
      0.1,
      2000,
    );
    camera.position.set(0, 500, 500);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ canvas: canvas });
    const bgColorRGBString = getComputedStyle(canvas).backgroundColor;
    renderer.setClearColor(new THREE.Color(bgColorRGBString));
    renderer.setSize(canvas.width, canvas.height);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight1 = new THREE.DirectionalLight(0xffffff, 5);
    directionalLight1.position.set(-50, 100, 50);
    scene.add(directionalLight1);
    const directionalLight2 = new THREE.DirectionalLight(0xffffff, 3);
    directionalLight2.position.set(50, 100, -50);
    scene.add(directionalLight2);
    // scene.add(new THREE.DirectionalLightHelper(directionalLight, 5));

    // const basePlane = new THREE.Mesh(
    //   new THREE.PlaneGeometry(500, 500),
    //   new THREE.MeshStandardMaterial({ color: 0xeeeeee }),
    // );
    // basePlane.rotation.x = -Math.PI / 2;
    // basePlane.position.y = -25;
    // scene.add(basePlane);

    this.shapes.forEach((shape) => {
      const material = new THREE.MeshStandardMaterial({
        color: this.shapeColor,
      });
      const mesh = new THREE.Mesh(shape.geometry, material);
      mesh.position.set(shape.position.x, shape.position.y, shape.position.z);
      mesh.rotation.set(shape.rotation.x, shape.rotation.y, shape.rotation.z);
      scene.add(mesh);
    });

    const animate = () => {
      renderer.render(scene, camera);
      this.animationFrameId = requestAnimationFrame(animate);
    };

    animate();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    if (this.animationFrameId !== null) {
      cancelAnimationFrame(this.animationFrameId);
    }
  }

  render() {
    return html`
      <header>
        <div>Put all shapes into the</div>
        <div class="subject">correct holes</div>
      </header>

      <canvas id="canvas"> canvas not supported :( </canvas>

      <footer>
        <button
          class="icon-btn"
          id="refresh-btn"
          .innerHTML="${reloadSvg}"
        ></button>
        <button
          class="icon-btn"
          id="audio-btn"
          .innerHTML="${audioSvg}"
        ></button>
        <button class="icon-btn" id="info-btn" .innerHTML="${infoSvg}"></button>
        <div class="spacer"></div>
        <button class="text-btn" id="submit-btn">Verify</button>
      </footer>
    `;
  }

  static styles = css`
    :host {
      display: flex;
      flex-direction: column;
      width: 400px;
      color: var(--text-color);
      background-color: var(--bg-color);
      border: 1px solid var(--border-color);
      border-radius: 3px;
      font-family: var(--font-family), sans-serif;

      --font-family: "Arial";
      --bg-color: #fff;
      --canvas-bg-color: #f0f0f0;
      --text-color: #000;
      --primary-color: #1a73e9;
      --on-primary-color: #fff;
      --primary-hover-color: #1669c1;
      --border-color: #ccc;
      --image-btn-color: #737373;
    }

    :host(.dark),
    :host([data-dark]) {
      --bg-color: #1f1f1f;
      --canvas-bg-color: #292929;
      --text-color: #fff;
      --primary-color: #611c99;
      --on-primary-color: #fff;
      --primary-hover-color: #6e16c1;
      --border-color: #505050;
      --image-btn-color: #8d8d8d;
    }

    header {
      color: var(--on-primary-color);
      background-color: var(--primary-color);
      padding: 24px;
      margin: 8px;

      .subject {
        font-size: 1.5em;
        font-weight: bold;
        margin: 4px 0px 8px 0px;
      }
    }

    canvas {
      height: 360px;
      margin: 0px 8px 8px 8px;
      background-color: var(--canvas-bg-color);
    }

    footer {
      display: flex;
      gap: 8px;
      align-items: bottom;
      padding: 8px;
      margin: 0px;
      border-top: 1px solid var(--border-color);

      .spacer {
        flex: 1;
      }

      button {
        cursor: pointer;

        &.icon-btn {
          background: none;
          border: none;
          padding: 4px;
          margin: 0px;

          svg {
            fill: var(--image-btn-color);
            transition: fill 0.3s;
            height: 32px;
            aspect-ratio: 1;

            &:hover {
              fill: var(--primary-hover-color);
            }
          }
        }

        &.text-btn {
          background-color: var(--primary-color);
          color: var(--on-primary-color);
          border: none;
          border-radius: 2px;
          padding: 12px 26px;
          font-weight: bold;
          text-transform: uppercase;

          &:hover {
            background-color: var(--primary-hover-color);
          }
        }
      }
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    "shape-puzzle-captcha": ShapePuzzleCaptcha;
  }
}
