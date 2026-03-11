import { LitElement, css, html, type PropertyValues } from "lit";
import { customElement, property } from "lit/decorators.js";
import SceneManager from "./engine/SceneManager";
import Interaction from "./engine/Interaction";

import reloadSvg from "./assets/svg/reload.svg?raw";
import infoSvg from "./assets/svg/info.svg?raw";
import audioSvg from "./assets/svg/audio.svg?raw";

import esHoraDeMimir from "./assets/audio/es-hora-de-mimir.mp3";
import animeWow from "./assets/audio/anime-wow.mp3";
import fahhhh from "./assets/audio/actually-good-fahhhh-sfx.mp3";

@customElement("shape-puzzle-popup")
export class ShapePuzzlePopup extends LitElement {
  @property({ type: String, attribute: "event-key" })
  public eventKey = "shapepuzzlecaptcha";

  @property({ type: Boolean, attribute: "disable-audio" })
  public disableAudio = false;

  @property({ type: Number, attribute: "shape-color" })
  public shapeColor: number = 0xa83232;

  @property({ type: Number, attribute: "selected-shape-color" })
  public selectedShapeColor: number = 0xc27502;

  private sceneManager: SceneManager | undefined;
  private interaction: Interaction | undefined;
  private infoOverlay: HTMLDivElement | undefined;
  private audioBank: Record<string, HTMLAudioElement> = {};
  private captchaBtn: HTMLButtonElement | undefined;

  constructor(config?: {
    eventKey?: string;
    disableAudio?: boolean;
    shapeColor?: number;
    selectedShapeColor?: number;
    captchaBtn?: HTMLButtonElement;
  }) {
    super();
    if (config?.eventKey !== undefined) this.eventKey = config.eventKey;
    if (config?.disableAudio !== undefined)
      this.disableAudio = config.disableAudio;
    if (config?.shapeColor !== undefined) this.shapeColor = config.shapeColor;
    if (config?.selectedShapeColor !== undefined)
      this.selectedShapeColor = config.selectedShapeColor;
    if (config?.captchaBtn !== undefined) this.captchaBtn = config.captchaBtn;
  }

  protected firstUpdated(_changedProperties: PropertyValues): void {
    super.firstUpdated(_changedProperties);
    this.setPosition();
    const canvas = this.shadowRoot?.querySelector(
      "canvas",
    ) as HTMLCanvasElement;
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;
    this.sceneManager = new SceneManager(
      canvas,
      this.shapeColor,
      this.selectedShapeColor,
    );
    this.interaction = new Interaction(canvas, this.sceneManager);
    this.infoOverlay = this.shadowRoot?.querySelector(
      ".shape-puzzle-info",
    ) as HTMLDivElement;
    if (!this.disableAudio)
      [esHoraDeMimir, animeWow, fahhhh].forEach((src) => {
        const audio = new Audio(src);
        audio.preload = "auto";
        this.audioBank[src] = audio;
      });
  }

  private onReset = () => {
    this.sceneManager?.onReset();
    this.dispatchEvent(
      new CustomEvent(`${this.eventKey}:reset`, {
        bubbles: true,
        composed: true,
      }),
    );
  };

  private playAudio(src: string) {
    if (this.disableAudio) return;
    const audio = this.audioBank[src];
    if (!audio) return;
    audio.src = src;
    audio.currentTime = 0;
    audio.play();
  }

  private onAudioClicked = () => {
    this.playAudio(esHoraDeMimir);
  };

  private toggleInfoOverlay = () => {
    if (!this.infoOverlay) return;
    const show = getComputedStyle(this.infoOverlay).opacity === "0";
    this.infoOverlay.classList.toggle("active", show);
    if (this.interaction) this.interaction.enabled = !show;
  };

  private onVerify = () => {
    if (this.sceneManager?.isSolved) {
      this.dispatchEvent(
        new CustomEvent(`${this.eventKey}:solved`, {
          bubbles: true,
          composed: true,
        }),
      );
      this.playAudio(animeWow);
    } else {
      this.playAudio(fahhhh);
    }
  };

  private centeredMode() {
    this.style.top = `50%`;
    this.style.left = `50%`;
    this.style.transform = `translate(-50%, -50%)`;
    this.shadowRoot
      ?.querySelector("header .caret")
      ?.setAttribute("style", "display: none");
  }

  private setPosition() {
    if (!this.captchaBtn) return;
    const captchaBtnRect = this.captchaBtn.getBoundingClientRect();
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;
    const scrollX = window.pageXOffset || document.documentElement.scrollLeft;
    const top = captchaBtnRect.top + captchaBtnRect.height / 2 + scrollY - 56;
    const left = captchaBtnRect.right + scrollX;
    if (
      window.innerWidth < left + this.clientWidth ||
      window.innerHeight < top + this.clientHeight
    ) {
      this.centeredMode();
      return;
    } else {
      this.shadowRoot
        ?.querySelector("header .caret")
        ?.setAttribute("style", "display: block");
    }
    this.style.transform = `translateX(14px)`;
    this.style.top = `${top}px`;
    this.style.left = `${left}px`;
  }

  public show() {
    this.style.display = "flex";
    if (this.interaction) this.interaction.enabled = true;
    if (!this.captchaBtn) return;
    requestAnimationFrame(() => {
      this.setPosition();
    });
  }

  public hide() {
    this.style.display = "none";
    if (this.interaction) this.interaction.enabled = false;
    requestAnimationFrame(() => {
      this.centeredMode();
    });
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.sceneManager?.dispose();
    this.interaction?.dispose();
  }

  render() {
    return html`
      <header>
        <div>Put all shapes into the</div>
        <div class="subject">correct holes</div>
        <div class="caret"></div>
      </header>

      <div class="canvas-container">
        <canvas> canvas not supported :( </canvas>

        <div class="shape-puzzle-info">
          <div>pick & drag shapes from here...</div>
          <div>...& drop them into the holes here</div>
        </div>
      </div>

      <footer>
        <button
          class="icon-btn"
          .innerHTML="${reloadSvg}"
          .onclick="${this.onReset}"
        ></button>
        <button
          class="icon-btn"
          style="display: ${this.disableAudio ? "none" : "block"}"
          .innerHTML="${audioSvg}"
          .onclick="${this.onAudioClicked}"
        ></button>
        <button
          class="icon-btn"
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
      position: absolute;
      /* position-anchor: --anchor-captcha-btn;
      position-area: right span-bottom; */
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      flex-direction: column;
      margin: 0;
      width: 400px;
      max-width: 100%;
      color: var(--text-color);
      background-color: var(--bg-color);
      border: 1px solid var(--border-color);
      border-radius: 3px;
      font-family: var(--font-family), sans-serif;
      transition:
        background-color 300ms,
        color 300ms;
      user-select: none;
    }

    header {
      color: var(--on-primary-color);
      background-color: var(--primary-color);
      padding: 16px;
      margin: 8px;
      height: fit-content;
      position: relative;

      .subject {
        font-size: 1.5em;
        font-weight: bold;
        margin: 4px 0px 4px 0px;
      }

      .caret {
        position: absolute;
        height: 16px;
        aspect-ratio: 1;
        background-color: var(--bg-color);
        border: 1px solid var(--border-color);
        top: 50%;
        left: -8px;
        clip-path: polygon(0 0, 0 100%, 100% 0);
        transform: translate(-50%, -50%) rotate(-45deg);
      }
    }

    .canvas-container {
      position: relative;
      aspect-ratio: 384 / 360;
      margin: 0px 8px 8px 8px;
    }

    canvas {
      display: block;
      width: 100%;
      height: 100%;
      background-color: var(--canvas-bg-color);
      transition: background-color 300ms;
      touch-action: none;
    }

    .shape-puzzle-info {
      display: flex;
      flex-direction: column;
      gap: 8px;
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      opacity: 0;
      background-color: rgb(from var(--bg-color) r g b / 0.75);
      backdrop-filter: blur(0px);
      pointer-events: none;
      transition:
        opacity 300ms ease,
        backdrop-filter 300ms ease;

      &.active {
        opacity: 1;
        backdrop-filter: blur(4px);
        pointer-events: auto;
      }
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
      flex-wrap: wrap;
      gap: 8px;
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
          padding: 0px;
          margin: 0px;

          svg {
            fill: var(--image-btn-color);
            transition: fill 300ms;
            height: 28px;
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
          padding: 12px 28px;
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
    "shape-puzzle-popup": ShapePuzzlePopup;
  }
}
