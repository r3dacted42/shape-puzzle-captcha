import * as THREE from "three";
import { damp, damp3, dampC, dampQ } from "../utils";

type Animation = {
  active: boolean;
  object: THREE.Object3D;
  color?: THREE.ColorRepresentation;
  opacity?: number;
  position?: THREE.Vector3;
  rotation?: THREE.Euler;
};

export default class Animator {
  private animations = new Map<string, Animation>();
  private speed = 0.01;

  public animate(
    object: THREE.Object3D,
    options: {
      color?: THREE.ColorRepresentation;
      opacity?: number;
      position?: THREE.Vector3;
      rotation?: THREE.Euler;
    },
  ) {
    const { color, opacity, position, rotation } = options;
    const existingAnimation = this.animations.get(object.uuid);
    this.animations.set(object.uuid, {
      active: true,
      object,
      color: color ?? existingAnimation?.color,
      opacity: opacity ?? existingAnimation?.opacity,
      position: position ?? existingAnimation?.position,
      rotation: rotation ?? existingAnimation?.rotation,
    });
  }

  public update(deltaTime: number) {
    const dt = deltaTime * this.speed;
    this.animations.forEach((animation) => {
      const { active, object, color, opacity, position, rotation } = animation;
      if (!active) return;
      let changed = false;
      const material = (object as THREE.Mesh)
        .material as THREE.MeshStandardMaterial;
      if (color && material) {
        changed = dampC(material.color, color, 1.3, dt) || changed;
      }
      if (opacity !== undefined && material) {
        changed = damp(material, "opacity", opacity, 1, dt) || changed;
      }
      if (position) {
        changed = damp3(object.position, position, 1.3, dt) || changed;
      }
      if (rotation) {
        const currentRot = new THREE.Quaternion().setFromEuler(object.rotation);
        const targetRot = new THREE.Quaternion().setFromEuler(rotation);
        changed = dampQ(currentRot, targetRot, 0.5, dt) || changed;
        object.rotation.setFromQuaternion(currentRot);
      }
      animation.active = changed;
    });
  }

  public isAnimationActive(object: THREE.Object3D) {
    const animation = this.animations.get(object.uuid);
    return animation ? animation.active : false;
  }

  public clearAnimations() {
    this.animations.clear();
  }
}
