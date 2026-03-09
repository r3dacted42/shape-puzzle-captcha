import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";

import loadingSvg from "./assets/svg/loading.svg?raw";
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
      if (this.popupElem) this.popupElem.hide();
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
      const elem = new ShapePuzzlePopup(
        this.eventKey,
        this.disableAudio,
        this.shapeColor,
        this.selectedShapeColor,
      );
      elem.addEventListener(`${this.eventKey}:reset`, this.onReset);
      elem.addEventListener(`${this.eventKey}:solved`, this.onSolved);
      document.body.appendChild(elem);
      this.popupElem = elem;
      this.passThemeToPopup();
    } else {
      this.popupElem.show();
    }
    requestAnimationFrame(() => {
      this.positionPopup();
    });
  };

  private positionPopup() {
    if (!this.popupElem) return;
    const rect = this.getBoundingClientRect();
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;
    const scrollX = window.pageXOffset || document.documentElement.scrollLeft;

    const popupWidth = 400;
    const popupHeight = 560;
    const gap = 4;

    let top = rect.top + scrollY - popupHeight - gap;
    let left = rect.left + scrollX;

    const viewportWidth = window.innerWidth;
    const padding = 8;

    left = Math.max(
      padding + scrollX,
      Math.min(left, viewportWidth + scrollX - popupWidth - padding),
    );
    if (top < scrollY + padding) {
      top = rect.bottom + scrollY + gap;
    }
    if (top + popupHeight > scrollY + window.innerHeight - padding) {
      top = scrollY + window.innerHeight - popupHeight - padding;
    }

    this.popupElem.style.top = `${top}px`;
    this.popupElem.style.left = `${left}px`;
  }

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
        <div class="captcha-icon"></div>
        <div class="captcha-loading" .innerHTML="${loadingSvg}"></div>
        <div class="captcha-solved" .innerHTML="${checkmarkSvg}"></div>
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

        .captcha-icon {
          display: none;
        }
        .captcha-loading {
          display: block;
        }
      }
    }

    :host(.solved) {
      .captcha-btn {
        cursor: default;
        pointer-events: none;

        .captcha-icon {
          display: none;
        }
        .captcha-solved {
          display: block;
        }
      }
    }

    .captcha-btn {
      cursor: pointer;
      display: flex;
      align-items: stretch;
      padding: 0px;
      background: none;
      border: none;
      height: 32px;
      width: 32px;

      > div {
        flex: 1;
        display: none;
      }
      .captcha-icon {
        display: block;
        border: 3px solid var(--border-color);
        border-radius: 4px;
      }
      .captcha-loading {
        stroke: var(--primary-color);
      }
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    "shape-puzzle-captcha": ShapePuzzleCaptcha;
  }
}
