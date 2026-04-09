# shape-puzzle-captcha

[![npm version](https://img.shields.io/npm/v/@r3dacted42/shape-puzzle-captcha.svg)](https://www.npmjs.com/package/@r3dacted42/shape-puzzle-captcha)
[![npm downloads](https://img.shields.io/npm/dt/@r3dacted42/shape-puzzle-captcha.svg)](https://www.npmjs.com/package/@r3dacted42/shape-puzzle-captcha)
[![bundle size](https://deno.bundlejs.com/badge?q=@r3dacted42/shape-puzzle-captcha)](https://bundlejs.com/?q=@r3dacted42/shape-puzzle-captcha)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

An interactive 3D Web Component captcha UI inspired by the (in)famous "Square Hole" meme. Users must drag and drop 3D shapes into their ~~in~~correct holes to pass the verification. Built with Lit, Three.js, and CSG (Constructive Solid Geometry).

![shape-puzzle-captcha-recording](https://github.com/user-attachments/assets/1b96802b-b16c-4e2f-9516-6256cb3ab740)

[Demo Page](https://r3dacted42.github.io/shape-puzzle-captcha/)

> [!WARNING]  
> This component provides the UI for a puzzle. Because the verification happens in the browser, it can be bypassed via the developer console. Do not use this as your sole line of defense against bot attacks on sensitive endpoints.

## Features

- Built as a standard Web Component using Lit, it *just works* anywhere.
- Uses Three.js for real-time rendering and physics interactions.
- Native dark mode support, customizable colors using CSS variables and attributes.
- Portal based popup for the puzzle, no messing around with the z-index.

## Register the component

### Using a Package Manager (Recommended)

- Install the package and its dependencies via npm, yarn, or pnpm.
  ```bash
  npm install @r3dacted42/shape-puzzle-captcha
  ```
- Import it once in the file containing your application's main entry point (e.g., main.js, app.js, or index.js) to register the Web Component:
  ```js
  import "@r3dacted42/shape-puzzle-captcha";
  ```

### Using a CDN (Vanilla HTML)

If you aren't using a bundler, you can use the component directly in the browser. Because modern ES modules are used, you must include an Import Map to resolve the dependencies.

```html
<script type="importmap">
  {
    "imports": {
      "lit": "https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js",
      "three": "https://unpkg.com/three@0.183.0/build/three.module.js",
      "three-bvh-csg": "https://unpkg.com/three-bvh-csg@0.0.18/build/index.module.js",
      "three-mesh-bvh": "https://unpkg.com/three-mesh-bvh@0.9.9/build/index.module.js"
    }
  }
</script>
<script
  type="module"
  src="https://unpkg.com/@r3dacted42/shape-puzzle-captcha@latest/dist/shape-puzzle-captcha.js"
></script>
```

## Usage

Once registered, use the `<shape-puzzle-captcha>` tag anywhere in your HTML or JSX templates, and listen for events.

```html
<shape-puzzle-captcha auto-dark> </shape-puzzle-captcha>

<button id="submit-btn" disabled>Humans Only Please!</button>

<script>
  const submitBtn = document.getElementById("submit-btn");

  document.addEventListener("shapepuzzlecaptcha:solved", (e) => {
    // A backend is essential for a truly secure captcha!
    // if (someBackendCall(clientInfo).isVerified)
    submitBtn.disabled = false;
  });
</script>
```

## API Reference

### Attributes / Properties

| Attribute | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| `event-key` | String | `"shapepuzzlecaptcha"` | The namespace for the custom events emitted by the component. |
| `shape-color` | Number (Hex) | `0xa83232` | Hex color code for the default, unselected shapes. |
| `selected-shape-color` | Number (Hex) | `0xc27502` | Hex color code for the shape currently being dragged. |
| `disable-audio` | Boolean | `false` | Set `true` to hide the audio <img height="20" style="background-color: whitesmoke" src="https://github.com/r3dacted42/shape-puzzle-captcha/blob/main/src/assets/svg/audio.svg?raw=true" ></img> button |
| `auto-dark` | Boolean \| `"data"` | `false` | Set it `true` to follow the browser's color scheme. |

> [!TIP]
> Use `class="dark"` or `data-dark` on `<shape-puzzle-captcha>` to use the dark color scheme. See [Advanced Theming](#advanced-theming) for details. The `auto-dark` attribute uses `class="dark"` by default. Set it to `"data"` to use the `data-dark` attribute for dark theme.

### Methods

| Method | Returns | Description |
| ------ | ------- | ----------- |
| `reset()` | `undefined` | Reset the 3D scene and returns the component to the "unsolved" state. Also emits the `shapepuzzlecaptcha:reset` event. |

### Events

The component emits global events that bubble up to the document/window.
| Event Name | Description |
| ---------- | ----------- |
| `shapepuzzlecaptcha:solved` | User clicks "Verify" and all shapes are in the correct holes. |
| `shapepuzzlecaptcha:failed` | User clicks "Verify" but the shapes are placed incorrectly. |
| `shapepuzzlecaptcha:reset` | User clicks the reset <img height="20" style="background-color: whitesmoke;" src="https://github.com/r3dacted42/shape-puzzle-captcha/blob/main/src/assets/svg/reload.svg?raw=true" ></img> button or the `reset()` function is called. |
| `shapepuzzlecaptcha:audio` | User clicks the audio <img height="20" style="background-color: whitesmoke;" src="https://github.com/r3dacted42/shape-puzzle-captcha/blob/main/src/assets/svg/audio.svg?raw=true" ></img> button. |
| `shapepuzzlecaptcha:info` | User clicks the info <img height="20" style="background-color: whitesmoke;" src="https://github.com/r3dacted42/shape-puzzle-captcha/blob/main/src/assets/svg/info.svg?raw=true" ></img> button. |

> [!TIP]
> The event names are dynamically prefixed by your `event-key`, so if you have `event-key="meow"` on the component, then you'll get events like `meow:solved`, `meow:failed`, `meow:reset`, etc.

### Advanced Theming

The component uses CSS variables for easy styling. You can override these variables on the `<shape-puzzle-captcha>` element to match your brand. The internal popup component will automatically inherit these styles.

```css
shape-puzzle-captcha {
  --font-family: system-ui, -apple-system, sans-serif;
  --bg-color: #ffffff;
  --canvas-bg-color: #f0f0f0;
  --text-color: #000;
  --primary-color: #1a73e9;
  --on-primary-color: #ffffff;
  --primary-hover-color: #1669c1;
  --border-color: #cccccc;
  --image-btn-color: #737373;
}

shape-puzzle-captcha(.dark),
shape-puzzle-captcha([data-dark]) {
  --bg-color: #1f1f1f;
  --canvas-bg-color: #292929;
  --text-color: #ffffff;
  --primary-color: #611c99;
  --on-primary-color: #ffffff;
  --primary-hover-color: #6e16c1;
  --border-color: #505050;
  --image-btn-color: #8d8d8d;
}
```

---

MIT License © 2026 r3dacted42
