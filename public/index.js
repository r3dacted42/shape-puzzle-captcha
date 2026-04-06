import { Pane } from 'https://cdn.jsdelivr.net/npm/tweakpane@4.0.5/+esm';

function init() {
  const captchaElem = document.querySelector("shape-puzzle-captcha");
  const pane = new Pane({
    title: "Captcha Config",
    container: document.querySelector('.controls'),
    expanded: true,
  });

  const defaultParams = {
    state: "Unsolved",
    autoDark: true,
    dark: false,
    disableAudio: false,
    shapeColor: 0xa83232,
    selectedShapeColor: 0xc27502,
  };
  const params = { ...defaultParams };

  // Status Monitor
  pane.addBinding(params, "state", { label: "State" })
    .controller.view.element.querySelector("input").style.pointerEvents = "none";

  const onReset = () => { params.state = "Unsolved"; pane.refresh(); };
  const onFailed = () => { params.state = "Failed"; pane.refresh(); };
  const onSolved = () => { params.state = "Solved"; pane.refresh(); };

  document.addEventListener(`captcha:reset`, onReset);
  document.addEventListener(`captcha:failed`, onFailed);
  document.addEventListener(`captcha:solved`, onSolved);

  pane.addBlade({ view: 'separator' });

  // Theme Controls
  pane.addBinding(params, "autoDark", {
    view: 'list',
    label: 'Auto Dark',
    options: [
      { text: 'enabled', value: true },
      { text: 'data', value: 'data' },
      { text: 'disabled', value: false },
    ]
  }).on("change", (ev) => {
    darkBinding.disabled = true;
    if (ev.value === 'data') {
      captchaElem.setAttribute("auto-dark", 'data');
      return;
    }
    if (ev.value) {
      captchaElem.setAttribute("auto-dark", '');
    } else {
      captchaElem.removeAttribute("auto-dark");
      darkBinding.disabled = false;
    }
  });

  const darkBinding = pane.addBinding(params, "dark", {
    view: 'toggle',
    label: 'Dark Mode',
    disabled: true,
  }).on("change", (ev) => {
    if (!params.autoDark) {
      if (ev.value) captchaElem.setAttribute("data-dark", "");
      else captchaElem.removeAttribute("data-dark");
    }
  });

  pane.addBinding(params, "disableAudio", {
    view: 'toggle',
    label: 'Disable Audio',
  }).on("change", (ev) => {
    if (ev.value) captchaElem.setAttribute("disable-audio", "true");
    else captchaElem.removeAttribute("disable-audio");
  });

  // Color Controls
  pane.addBinding(params, "shapeColor", {
    label: "Shape Color",
    view: 'color',
  }).on("change", (ev) => {
    captchaElem.setAttribute("shape-color", ev.value);
  });

  pane.addBinding(params, "selectedShapeColor", {
    label: "Selected Shape Color",
    view: 'color',
    color: { type: 'float' },
  }).on("change", (ev) => {
    captchaElem.setAttribute("selected-shape-color", ev.value);
  });

  // Reset Button
  pane.addButton({ title: "Reset Captcha" }).on("click", () => {
    captchaElem.setAttribute("disable-audio", defaultParams.disableAudio ? "true" : undefined);
    captchaElem.setAttribute("shape-color", defaultParams.shapeColor);
    captchaElem.setAttribute("selected-shape-color", defaultParams.selectedShapeColor);
    captchaElem.reset();
    params.state = defaultParams.state;
    params.shapeColor = defaultParams.shapeColor;
    params.selectedShapeColor = defaultParams.selectedShapeColor;
    pane.refresh();
  });

  // Cleanup
  return () => {
    document.removeEventListener(`captcha:reset`, onReset);
    document.removeEventListener(`captcha:failed`, onFailed);
    document.removeEventListener(`captcha:solved`, onSolved);
  };
}

window.addEventListener("DOMContentLoaded", init);