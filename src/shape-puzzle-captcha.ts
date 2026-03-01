import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import SceneManager from "./engine/SceneManager";
import Interaction from "./engine/Interaction";

import reloadSvg from "./assets/reload.svg?raw";
import infoSvg from "./assets/info.svg?raw";
import audioSvg from "./assets/audio.svg?raw";

@customElement("shape-puzzle-captcha")
export class ShapePuzzleCaptcha extends LitElement {
  @property({ type: Boolean, attribute: "auto-dark", reflect: true })
  public autoDark: boolean = false;

  @property({ type: Number, attribute: "shape-color" })
  public shapeColor: number = 0xa83232;

  @property({ type: Number, attribute: "selected-shape-color" })
  public selectedShapeColor: number = 0xc27502;

  private sceneManager: SceneManager | undefined;
  private interaction: Interaction | undefined;
  private infoOverlay: HTMLDivElement | undefined;

  constructor() {
    super();
    // add theme change listener
  }

  protected firstUpdated(): void {
    const canvas = this.shadowRoot?.getElementById(
      "shape-puzzle-canvas",
    ) as HTMLCanvasElement;
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;
    this.sceneManager = new SceneManager(
      canvas,
      this.shapeColor,
      this.selectedShapeColor,
    );
    this.interaction = new Interaction(canvas, this.sceneManager);
    this.infoOverlay = this.shadowRoot?.getElementById(
      "shape-puzzle-info",
    ) as HTMLDivElement;
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.sceneManager?.dispose();
    this.interaction?.dispose();
  }

  private onReset = () => {
    this.sceneManager?.onReset();
    this.dispatchEvent(
      new CustomEvent("shapepuzzlecaptchareset", {
        bubbles: true,
        composed: true,
      }),
    );
  };

  private toggleInfoOverlay = () => {
    if (!this.infoOverlay) return;
    const show = getComputedStyle(this.infoOverlay).opacity === "0";
    this.infoOverlay.style.opacity = show ? "1" : "0";
    this.infoOverlay.style.pointerEvents = show ? "auto" : "none";
    if (!this.interaction) return;
    this.interaction.enabled = !show;
  };

  private onVerify = () => {
    if (this.sceneManager?.isSolved) {
      this.dispatchEvent(
        new CustomEvent("shapepuzzlecaptchasolved", {
          bubbles: true,
          composed: true,
        }),
      );
    }
  };

  render() {
    return html`
      <header>
        <div>Put all shapes into the</div>
        <div class="subject">correct holes</div>
      </header>

      <div class="canvas-container">
        <canvas id="shape-puzzle-canvas"> canvas not supported :( </canvas>

        <div id="shape-puzzle-info">
          <div>pick up shapes from here...</div>
          <div>...and drag them into the holes here</div>
        </div>
      </div>

      <footer>
        <button
          class="icon-btn"
          id="refresh-btn"
          .innerHTML="${reloadSvg}"
          .onclick="${this.onReset}"
        ></button>
        <button
          class="icon-btn"
          id="audio-btn"
          .innerHTML="${audioSvg}"
        ></button>
        <button
          class="icon-btn"
          id="info-btn"
          .innerHTML="${infoSvg}"
          .onclick="${this.toggleInfoOverlay}"
        ></button>
        <div class="spacer"></div>
        <button class="text-btn" id="submit-btn" .onclick="${this.onVerify}">
          Verify
        </button>
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
      user-select: none;

      --font-family: "Arial";
      --bg-color: #fff;
      --canvas-bg-color: #f5f5f5;
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

    .canvas-container {
      position: relative;
      height: 360px;
      margin: 0px 8px 8px 8px;
    }

    canvas {
      display: block;
      width: 100%;
      height: 100%;
      background-color: var(--canvas-bg-color);
      touch-action: none;
    }

    #shape-puzzle-info {
      display: flex;
      flex-direction: column;
      gap: 8px;
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      opacity: 0;
      background-color: rgb(from var(--bg-color) r g b / 0.5);
      backdrop-filter: blur(4px);
      transition: opacity 300ms;
      pointer-events: none;

      > div {
        display: flex;
        flex-grow: 1;
        align-items: center;
        justify-content: center;
        border: 1px dashed var(--border-color);
      }

      :last-child {
        max-height: 135px;
      }
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
