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

  constructor(
    _eventKey?: string,
    _disableAudio?: boolean,
    _shapeColor?: number,
    _selectedShapeColor?: number,
  ) {
    super();
    if (_eventKey !== undefined) this.eventKey = _eventKey;
    if (_disableAudio !== undefined) this.disableAudio = _disableAudio;
    if (_shapeColor !== undefined) this.shapeColor = _shapeColor;
    if (_selectedShapeColor !== undefined)
      this.selectedShapeColor = _selectedShapeColor;
  }

  protected firstUpdated(_changedProperties: PropertyValues): void {
    super.firstUpdated(_changedProperties);
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

  public show() {
    this.style.display = "flex";
    if (this.interaction) this.interaction.enabled = true;
  }

  public hide() {
    this.style.display = "none";
    if (this.interaction) this.interaction.enabled = false;
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
      top: 32px;
      left: 32px;
      flex-direction: column;
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
            transition: fill 300ms;
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
    "shape-puzzle-popup": ShapePuzzlePopup;
  }
}
