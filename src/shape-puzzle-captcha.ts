import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";

import spinnerSvg from "./assets/svg/spinner.svg?raw";
import checkmarkSvg from "./assets/svg/checkmark.svg?raw";
import { ShapePuzzlePopup } from "./shape-puzzle-popup";

@customElement("shape-puzzle-captcha")
export class ShapePuzzleCaptcha extends LitElement {
  @property({ type: String, attribute: "event-key" })
  public eventKey = "shapepuzzlecaptcha";

  @property({
    attribute: "auto-dark",
    reflect: true,
    converter: (value: string | null) => {
      if (value === "data") return "data";
      return value === "" || !!value;
    },
  })
  public autoDark: boolean | "data" = false;

  @property({ type: Boolean, attribute: "disable-audio" })
  public disableAudio = false;

  @property({ type: Number, attribute: "shape-color" })
  public shapeColor: number = 0xa83232;

  @property({ type: Number, attribute: "selected-shape-color" })
  public selectedShapeColor: number = 0xc27502;

  private themeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
  private popupElem: ShapePuzzlePopup | undefined;

  connectedCallback(): void {
    super.connectedCallback();
    this.onThemeChange(this.themeMediaQuery);
    this.themeMediaQuery.addEventListener("change", this.onThemeChange);
    window.addEventListener("pointerdown", this.handleOutsideClick);
  }

  private onThemeChange = (e: MediaQueryListEvent | MediaQueryList) => {
    if (!this.autoDark) return;
    if (e.matches) {
      if (this.autoDark === "data") {
        this.setAttribute("data-dark", "");
      } else {
        this.classList.add("dark");
      }
    } else {
      if (this.autoDark === "data") {
        this.removeAttribute("data-dark");
      } else {
        this.classList.remove("dark");
      }
    }
    this.passThemeToPopup();
  };

  private handleOutsideClick = (e: MouseEvent) => {
    if (!this.classList.contains("active") || !this.popupElem) return;
    const path = e.composedPath();
    if (!path.includes(this.popupElem as EventTarget)) {
      this.classList.remove("active");
      requestAnimationFrame(() => {
        if (this.popupElem) this.popupElem.hide();
      });
    }
  };

  private passThemeToPopup() {
    if (!this.popupElem) return;
    const computedStyles = getComputedStyle(this);
    const varsToPass = [
      "--font-family",
      "--bg-color",
      "--canvas-bg-color",
      "--text-color",
      "--primary-color",
      "--on-primary-color",
      "--primary-hover-color",
      "--border-color",
      "--image-btn-color",
    ];
    for (let i = 0; i < computedStyles.length; i++) {
      const prop = computedStyles[i];
      if (varsToPass.includes(prop))
        this.popupElem.style.setProperty(
          prop,
          computedStyles.getPropertyValue(prop),
        );
    }
  }

  private onOpen = () => {
    this.classList.add("active");
    if (!this.popupElem) {
      const elem = new ShapePuzzlePopup({
        eventKey: this.eventKey,
        disableAudio: this.disableAudio,
        shapeColor: this.shapeColor,
        selectedShapeColor: this.selectedShapeColor,
        captchaBtn: this.shadowRoot?.querySelector(
          ".captcha-btn",
        ) as HTMLButtonElement,
      });
      elem.addEventListener(`${this.eventKey}:reset`, this.onReset);
      elem.addEventListener(`${this.eventKey}:solved`, this.onSolved);
      document.body.appendChild(elem);
      this.popupElem = elem;
      this.passThemeToPopup();
    } else {
      this.popupElem.show();
    }
  };

  private onReset = () => {
    this.dispatchEvent(
      new CustomEvent(`${this.eventKey}:reset`, {
        bubbles: true,
        composed: true,
      }),
    );
  };

  private onSolved = () => {
    this.classList.remove("active");
    this.classList.add("solved");
    if (this.popupElem) this.popupElem.style.display = "none";
    this.dispatchEvent(
      new CustomEvent(`${this.eventKey}:solved`, {
        bubbles: true,
        composed: true,
      }),
    );
  };

  disconnectedCallback() {
    super.disconnectedCallback();
    this.themeMediaQuery?.removeEventListener("change", this.onThemeChange);
    window.removeEventListener("pointerdown", this.handleOutsideClick);
    this.popupElem?.removeEventListener(`${this.eventKey}:reset`, this.onReset);
    this.popupElem?.removeEventListener(
      `${this.eventKey}:solved`,
      this.onSolved,
    );
    this.popupElem?.remove();
  }

  render() {
    return html`
      <button class="captcha-btn" .onclick="${this.onOpen}">
        <div class="captcha-box"></div>
        <div class="captcha-spinner" .innerHTML="${spinnerSvg}"></div>
        <div class="captcha-check" .innerHTML="${checkmarkSvg}"></div>
      </button>
      I'm not a robot
    `;
  }

  static styles = css`
    :host {
      display: inline-flex;
      flex-direction: row;
      align-items: center;
      color: var(--text-color);
      background-color: var(--bg-color);
      border: 1px solid var(--border-color);
      border-radius: 3px;
      font-family: var(--font-family), sans-serif;
      padding: 24px 16px;
      width: 300px;
      gap: 16px;
      user-select: none;
      transition:
        background-color 300ms,
        color 300ms;

      --font-family: "Arial";
      --bg-color: #ffffff;
      --canvas-bg-color: #f0f0f0;
      --text-color: #000;
      --primary-color: #1a73e9;
      --on-primary-color: #ffffff;
      --primary-hover-color: #1669c1;
      --border-color: #cccccc;
      --image-btn-color: #737373;
    }

    :host(.dark),
    :host([data-dark]) {
      --bg-color: #1f1f1f;
      --canvas-bg-color: #292929;
      --text-color: #ffffff;
      --primary-color: #611c99;
      --on-primary-color: #ffffff;
      --primary-hover-color: #6e16c1;
      --border-color: #505050;
      --image-btn-color: #8d8d8d;
    }

    :host(.active) {
      .captcha-btn {
        cursor: default;
        pointer-events: none;

        .captcha-box {
          border-radius: 50%;
          opacity: 0;
          transform: scale(0);
          transition:
            opacity 0.6s ease 0s,
            transform 0.6s ease 0s,
            border-radius 0.6s ease 0s;
        }
        .captcha-spinner {
          opacity: 1;
          transform: scale(1);
          animation-play-state: running;
          transition:
            opacity 0.3s ease 0.3s,
            transform 0.3s ease 0.3s;

          circle {
            stroke-dasharray: 0, 150;
            stroke-dashoffset: -59px;
            animation-play-state: running;
            transition:
              stroke-dasharray 0.5s ease 0.5s,
              stroke-dashoffset 0.5s ease 0.5s;
          }
        }
      }
    }

    :host(.solved) {
      .captcha-btn {
        cursor: default;
        pointer-events: none;

        .captcha-box {
          opacity: 0;
          transform: scale(0);
        }
        .captcha-spinner {
          opacity: 0;
          transform: scale(0);
        }
        .captcha-check {
          stroke-dasharray: 30;
          stroke-dashoffset: 0;
        }
      }
    }

    .captcha-btn {
      cursor: pointer;
      padding: 0px;
      background: none;
      border: none;
      height: 32px;
      width: 32px;
      position: relative;

      > div,
      > svg {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        margin: auto;
      }
      .captcha-box {
        box-sizing: border-box;
        border: 3px solid var(--border-color);
        opacity: 1;
        border-radius: 4px;
        transform: scale(1);
        transition:
          opacity 0.3s ease 0.3s,
          transform 0.3s ease 0.3s,
          border-radius 0.3s ease 0.3s;
      }
      .captcha-spinner {
        stroke: var(--primary-color);
        opacity: 0;
        transform: scale(0);
        animation: spinner-rotate 1.5s linear 0.8s infinite paused;
        transition:
          opacity 0.3s ease 0s,
          transform 0.3s ease 0s;

        circle {
          stroke-dasharray: 59, 150;
          stroke-dashoffset: 0px;
          animation: spinner-worm 1.2s ease-in-out 1s infinite paused;
          transition:
            stroke-dasharray 0.3s ease 0s,
            stroke-dashoffset 0.3s ease 0s;
        }
      }
      .captcha-check {
        stroke-dasharray: 30;
        stroke-dashoffset: 30;
        transition:
          stroke-dasharray 0.3s ease 0s,
          stroke-dashoffset 0.3s ease 0s;
      }
    }

    @keyframes spinner-rotate {
      100% {
        transform: scale(1) rotate(360deg);
      }
    }
    @keyframes spinner-worm {
      0% {
        stroke-dasharray: 0, 150;
        stroke-dashoffset: 0;
      }
      47.5% {
        stroke-dasharray: 42, 150;
        stroke-dashoffset: -16px;
      }
      95%,
      100% {
        stroke-dasharray: 42, 150;
        stroke-dashoffset: -59px;
      }
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    "shape-puzzle-captcha": ShapePuzzleCaptcha;
  }
}
