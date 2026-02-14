import { html, css, LitElement } from 'lit';
import { state } from 'lit/decorators.js';

export class ShapePuzzleCaptcha extends LitElement {
  static styles = css`
    :host {
      display: flex;
      flex-direction: column;
      width: var(--shape-puzzle-captcha-width, 400px);
      color: var(--shape-puzzle-captcha-text-color, #000);
      background-color: var(--shape-puzzle-captcha-bg-color, #fff);
      border: var(--shape-puzzle-captcha-border, 1px solid #ccc);
      border-radius: var(--shape-puzzle-captcha-border-radius, 2px);
      font-family: var(--shape-puzzle-captcha-font-family, Arial, sans-serif);

      header {
        color: var(--shape-puzzle-captcha-header-text-color, #fff);
        background-color: var(--shape-puzzle-captcha-header-bg-color, #1a73e9);
        padding: var(--shape-puzzle-captcha-header-padding, 24px);
        margin: var(--shape-puzzle-captcha-header-margin, 8px);

        .subject {
          font-size: var(--shape-puzzle-captcha-subject-font-size, 1.5em);
          font-weight: var(
            --shape-puzzle-captcha-subject-font-weight,
            bold
          );
          margin: var(
            --shape-puzzle-captcha-subject-margin-bottom,
            4px 0px 8px 0px
          );
        }
      }

      canvas {
        background-color: var(--shape-puzzle-captcha-canvas-bg-color, #eee);
        height: 360px;
        margin: var(--shape-puzzle-captcha-canvas-margin, 0px 8px 8px 8px);
      }

      footer {
        display: flex;
        gap: var(--shape-puzzle-captcha-footer-gap, 8px);
        align-items: bottom;
        padding: var(--shape-puzzle-captcha-footer-padding, 8px);
        margin: var(--shape-puzzle-captcha-footer-margin, 0px);
        border-top: var(
          --shape-puzzle-captcha-footer-border-top,
          1px solid #ccc
        );

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
              fill: var(--shape-puzzle-captcha-icon-btn-color, #737373);
              transition: fill 0.3s;
              height: var(--shape-puzzle-captcha-icon-btn-size, 32px);
              width: var(--shape-puzzle-captcha-icon-btn-size, 32px);

              &:hover {
                fill: var(--shape-puzzle-captcha-icon-btn-hover-color, #1a73e9);
              }
            }
          }

          &.text-btn {
            background-color: var(
              --shape-puzzle-captcha-button-bg-color,
              #1a73e9
            );
            color: var(--shape-puzzle-captcha-button-text-color, #fff);
            border: none;
            border-radius: var(
              --shape-puzzle-captcha-button-border-radius,
              2px
            );
            padding: var(--shape-puzzle-captcha-button-padding, 12px 26px);
            font-weight: var(--shape-puzzle-captcha-button-font-weight, bold);
            text-transform: uppercase;

            &:hover {
              background-color: var(
                --shape-puzzle-captcha-button-hover-bg-color,
                #1669c1
              );
            }
          }
        }
      }
    }
  `;

  @state()
  private _canvas?: HTMLCanvasElement;

  firstUpdated() {
    this._canvas = this.shadowRoot?.getElementById(
      'canvas'
    ) as HTMLCanvasElement | undefined;
    if (this._canvas) {
      const ctx = this._canvas.getContext('2d');
      if (ctx) {
        ctx.fillStyle = '#ccc';
        ctx.fillRect(50, 50, 100, 100);
        ctx.fillRect(150, 200, 80, 80);
        ctx.fillRect(70, 300, 120, 60);
      }
    }
  }

  render() {
    return html`
      <header>
        <div>Put all shapes into the</div>
        <div class="subject">correct holes</div>
      </header>

      <canvas id="canvas" width="300" height="450"></canvas>

      <footer>
        <button class="icon-btn" id="refresh-btn">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path
              d="M256 388c-72.597 0-132-59.405-132-132 0-72.601 59.403-132 132-132 36.3 0 69.299 15.4 92.406 39.601L278 234h154V80l-51.698 51.702C348.406 99.798 304.406 80 256 80c-96.797 0-176 79.203-176 176s78.094 176 176 176c81.045 0 148.287-54.134 169.401-128H378.85c-18.745 49.561-67.138 84-122.85 84z"
            />
          </svg>
        </button>
        <button class="icon-btn" id="audio-btn">
          <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M128 448Q102 448 83 429 64 410 64 384L64 256Q64 206 90 160 116 115 161 90 205 64 256 64 308 64 352 90 397 116 423 161 448 205 448 256L448 384Q448 410 429 429 410 448 384 448L320 448 320 288 400 288 400 256Q400 218 381 184 361 151 328 132 295 112 256 112 216 112 184 131 151 151 132 184 112 217 112 256L112 288 192 288 192 448 128 448Z"
            />
          </svg>
        </button>
        <button class="icon-btn" id="info-btn">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
            <path
              d="M22 34h4V22h-4v12zm2-30C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm0 36c-8.82 0-16-7.18-16-16S15.18 8 24 8s16 7.18 16 16-7.18 16-16 16zm-2-22h4v-4h-4v4z"
            />
          </svg>
        </button>
        <div class="spacer"></div>
        <button class="text-btn" id="submit-btn">Verify</button>
      </footer>
    `;
  }
}
