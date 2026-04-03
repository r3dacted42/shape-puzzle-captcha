import { Pane } from 'https://cdn.jsdelivr.net/npm/tweakpane@4.0.5/+esm';

function init() {
  const captchaElem = document.querySelector("shape-puzzle-captcha");
  const pane = new Pane({
    title: "Captcha Config",
    container: document.querySelector('.controls'),
    expanded: false,
  });
  const markupElem = document.getElementById("markup");
  const eventJsElem = document.getElementById("eventjs");

  const defaultParams = {
    state: "Unsolved",
    eventKey: "captcha",
    autoDark: true,
    dark: false,
    shapeColor: 0xa83232,
    selectedShapeColor: 0xc27502,
  };
  const params = {
    ...defaultParams,
  };

  pane.addBinding(params, "state", { label: "State" })
    .controller.view.element.querySelector("input").style.pointerEvents = "none";
  const onReset = () => {
    params.state = "Unsolved";
    pane.refresh();
  };
  const onFailed = () => {
    params.state = "Failed";
    pane.refresh();
  };
  const onSolved = () => {
    params.state = "Solved";
    pane.refresh();
  };
  document.addEventListener(`${params.eventKey}:reset`, onReset);
  document.addEventListener(`${params.eventKey}:failed`, onFailed);
  document.addEventListener(`${params.eventKey}:solved`, onSolved);

  pane.addBlade({
    view: 'separator',
  });

  pane.addBinding(params, "eventKey", {
    label: "Event Key",
  }).on("change", (ev) => {
    const newEventKey = ev.value || "shapepuzzlecaptcha";
    document.removeEventListener(`${params.eventKey}:reset`, onReset);
    document.removeEventListener(`${params.eventKey}:failed`, onFailed);
    document.removeEventListener(`${params.eventKey}:solved`, onSolved);
    params.eventKey = newEventKey;
    document.addEventListener(`${params.eventKey}:reset`, onReset);
    document.addEventListener(`${params.eventKey}:failed`, onFailed);
    document.addEventListener(`${params.eventKey}:solved`, onSolved);
    captchaElem.setAttribute("event-key", params.eventKey);
  });

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
    if (ev.value) captchaElem.setAttribute("auto-dark", '');
    else {
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

  pane.addButton({ title: "Reset" }).on("click", () => {
    captchaElem.setAttribute("shape-color", defaultParams.shapeColor);
    captchaElem.setAttribute("selected-shape-color", defaultParams.selectedShapeColor);
    captchaElem.reset();
    params.state = defaultParams.state;
    params.shapeColor = defaultParams.shapeColor;
    params.selectedShapeColor = defaultParams.selectedShapeColor;
    pane.refresh();
  });

  const updateMarkup = () => {
    markupElem.textContent = `<shape-puzzle-captcha
  event-key="${params.eventKey}"\
${params.autoDark === true ? '\n  auto-dark' : params.autoDark === 'data' ? '\n  auto-dark="data"' : ''}\
${params.dark === true ? '\n  data-dark' : ''}
  shape-color="0x${params.shapeColor.toString(16).padStart(6, '0')}"
  selected-shape-color="0x${params.selectedShapeColor.toString(16).padStart(6, '0')}"
></shape-puzzle-captcha>`;
    markupElem.removeAttribute("data-highlighted");
    eventJsElem.textContent = `window.addEventListener('${params.eventKey}:solved', (e) => { ... });
window.addEventListener('${params.eventKey}:reset', (e) => { ... });
window.addEventListener('${params.eventKey}:failed', (e) => { ... });`;
    eventJsElem.removeAttribute("data-highlighted");
    hljs.highlightAll();
  };
  updateMarkup();
  const observer = new MutationObserver(updateMarkup);
  observer.observe(captchaElem, { attributes: true, childList: true, subtree: true });

  return () => {
    document.removeEventListener(`${params.eventKey}:reset`, onReset);
    document.removeEventListener(`${params.eventKey}:failed`, onFailed);
    document.removeEventListener(`${params.eventKey}:solved`, onSolved);
    observer.disconnect();
  };
}

window.addEventListener("DOMContentLoaded", init);