import { LitElement, css, html, type PropertyValues } from "lit";
import { customElement, property } from "lit/decorators.js";

import spinnerSvg from "./assets/svg/spinner.svg?raw";
import checkmarkSvg from "./assets/svg/checkmark.svg?raw";
import { ShapePuzzlePopup } from "./shape-puzzle-popup";

@customElement("shape-puzzle-captcha")
export class ShapePuzzleCaptcha extends LitElement {
  @property({ type: String, attribute: "event-key", reflect: true })
  public eventKey = "shapepuzzlecaptcha";

  @property({ type: Boolean, attribute: "disable-audio", reflect: true })
  public disableAudioBtn = false;

  @property({
    attribute: "auto-dark",
    reflect: true,
    converter: (value: string | null) => {
      if (value === "data") return "data";
      return value !== null && value !== "false";
    },
  })
  public autoDark: boolean | "data" = false;

  @property({ type: Number, attribute: "shape-color", reflect: true })
  public shapeColor: number = 0xa83232;

  @property({ type: Number, attribute: "selected-shape-color", reflect: true })
  public selectedShapeColor: number = 0xc27502;

  public reset = () => {
    this.classList.remove("solved", "active");
    if (this.popupElem) this.popupElem.resetTrigger++;
  };

  private themeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
  private popupElem: ShapePuzzlePopup | undefined;
  private mutationObserver = new MutationObserver(() =>
    this.passThemeToPopup(),
  );

  connectedCallback(): void {
    super.connectedCallback();
    this.onThemeChange(this.themeMediaQuery);
    this.themeMediaQuery.addEventListener("change", this.onThemeChange);
    window.addEventListener("pointerdown", this.handleOutsideClick);
    this.mutationObserver.observe(this, { attributes: true });
  }

  protected updated(_changedProperties: PropertyValues): void {
    super.updated(_changedProperties);
    console.log("disableAudioBtn:", this.disableAudioBtn);
    if (this.popupElem) {
      this.popupElem.eventKey = this.eventKey;
      this.popupElem.disableAudioBtn = this.disableAudioBtn;
      this.popupElem.shapeColor = this.shapeColor;
      this.popupElem.selectedShapeColor = this.selectedShapeColor;
    }
    this.onThemeChange(this.themeMediaQuery);
  }

  private onThemeChange = (e: MediaQueryListEvent | MediaQueryList) => {
    this.classList.remove("dark");
    if (this.classList.length === 0) this.removeAttribute("class");
    this.removeAttribute("data-dark");
    if (!!this.autoDark && e.matches) {
      if (this.autoDark === "data") this.setAttribute("data-dark", "");
      else this.classList.add("dark");
    }
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
        disableAudioBtn: this.disableAudioBtn,
        shapeColor: this.shapeColor,
        selectedShapeColor: this.selectedShapeColor,
        captchaBtn: this.shadowRoot?.querySelector(
          ".captcha-btn",
        ) as HTMLButtonElement,
      });
      elem.addEventListener(`${this.eventKey}:solved`, this.onSolved);
      document.body.appendChild(elem);
      this.popupElem = elem;
      this.passThemeToPopup();
    } else {
      this.popupElem.show();
    }
  };

  private onSolved = () => {
    this.classList.remove("active");
    this.classList.add("solved");
    if (this.popupElem) this.popupElem.style.display = "none";
  };

  disconnectedCallback() {
    super.disconnectedCallback();
    this.themeMediaQuery?.removeEventListener("change", this.onThemeChange);
    window.removeEventListener("pointerdown", this.handleOutsideClick);
    this.mutationObserver.disconnect();
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

      --font-family: system-ui, -apple-system, sans-serif;
      --bg-color: #ffffff;
      --canvas-bg-color: #f0f0f0;
      --text-color: #000;
      --primary-color: #1a73e9;
      --on-primary-color: #ffffff;
      --primary-hover-color: #1669c1;
      --border-color: #cccccc;
      --image-btn-color: #737373;
      --bezier-curve: cubic-bezier(0.37, -0.32, 0.55, 1.46);
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
            opacity 0.6s var(--bezier-curve) 0s,
            transform 0.6s var(--bezier-curve) 0s,
            border-radius 0.6s var(--bezier-curve) 0s;
        }
        .captcha-spinner {
          opacity: 1;
          transform: scale(1);
          animation: spinner-rotate 1.5s linear 0.8s infinite;
          transition:
            opacity 0.3s var(--bezier-curve) 0.3s,
            transform 0.3s var(--bezier-curve) 0.3s;

          circle {
            stroke-dasharray: 0, 150;
            stroke-dashoffset: -59px;
            animation: spinner-worm 1.2s ease-in-out 1s infinite;
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
          opacity 0.3s var(--bezier-curve) 0s,
          transform 0.3s var(--bezier-curve) 0s,
          border-radius 0.3s var(--bezier-curve) 0s;
      }
      .captcha-spinner {
        stroke: var(--primary-color);
        opacity: 0;
        transform: scale(0);
        animation: none;

        circle {
          stroke-dasharray: 59, 150;
          stroke-dashoffset: 0px;
          animation: none;
        }
      }
      .captcha-check {
        stroke-dasharray: 30;
        stroke-dashoffset: 30;
        transition:
          stroke-dasharray 0.3s ease-out 0.3s,
          stroke-dashoffset 0.3s ease-out 0.3s;
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
