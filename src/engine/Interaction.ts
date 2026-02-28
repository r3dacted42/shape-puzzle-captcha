import type { ShapeType } from "../shapesData";
import type SceneManager from "./SceneManager";

export default class Interaction {
  private canvas: HTMLCanvasElement;
  private sceneManager: SceneManager;

  constructor(_canvas: HTMLCanvasElement, _sceneManager: SceneManager) {
    this.canvas = _canvas;
    this.sceneManager = _sceneManager;
    this.canvas.addEventListener("pointerdown", this.onPointerDown);
    window.addEventListener("pointermove", this.onPointerMove);
    window.addEventListener("pointerup", this.onPointerUp);
  }

  public dispose = (): void => {
    this.canvas.removeEventListener("pointerdown", this.onPointerDown);
    window.removeEventListener("pointermove", this.onPointerMove);
    window.removeEventListener("pointerup", this.onPointerUp);
  };

  private onPointerDown = (ev: PointerEvent): void => {
    const rect = this.canvas.getBoundingClientRect();
    const x = ev.clientX - rect.left,
      y = ev.clientY - rect.top;
    const intersections = this.sceneManager.getRaycastIntersections(
      (x / rect.width) * 2 - 1,
      -(y / rect.height) * 2 + 1,
    );
    this.sceneManager.clearSelectedShape();
    const basePoint = intersections.find(
      (i) => i.object.name === "basePlane",
    )?.point;
    if (!basePoint) return;
    for (const interection of intersections)
      if (interection.object.name !== "basePlane") {
        this.sceneManager.setSelectedShape(
          interection.object.name as ShapeType,
          interection.object.position.x - basePoint.x,
          interection.object.position.z - basePoint.z,
        );
        document.documentElement.style.cursor = "move";
      }
  };

  private onPointerMove = (ev: PointerEvent): void => {
    const rect = this.canvas.getBoundingClientRect();
    const x = ev.clientX - rect.left,
      y = ev.clientY - rect.top;
    const intersections = this.sceneManager.getRaycastIntersections(
      (x / rect.width) * 2 - 1,
      -(y / rect.height) * 2 + 1,
    );
    if (!this.sceneManager.isShapeSelected) {
      if (
        intersections.reduce(
          (acc, i) =>
            acc ||
            (i.object.name !== "basePlane" && i.object.name !== "holeBox"),
          false,
        )
      )
        document.documentElement.style.cursor = "pointer";
      else document.documentElement.style.cursor = "auto";
      return;
    }
    const basePoint = intersections.find(
      (i) => i.object.name === "basePlane",
    )?.point;
    if (!basePoint) return;
    this.sceneManager.setSelectedShapeXZ(
      basePoint,
      intersections.reduce(
        (acc, i) => acc || i.object.name === "holeBox",
        false,
      ),
    );
  };

  private onPointerUp = (_ev: PointerEvent): void => {
    this.sceneManager?.clearSelectedShape();
    document.documentElement.style.cursor = "auto";
  };
}
