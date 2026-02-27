import * as THREE from "three";

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
  private speed = 0.75;

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
    const t = Math.min((this.speed * deltaTime) / 100, 1.0);
    this.animations.forEach((animation) => {
      const { active, object, color, opacity, position, rotation } = animation;
      if (!active) return;
      let changed = false;
      const material = (object as THREE.Mesh)
        .material as THREE.MeshBasicMaterial;
      if (color && material) {
        const targetColor = material.color
          .clone()
          .lerp(new THREE.Color(color), t);
        if (!material.color.equals(targetColor)) {
          changed = true;
          material.color.copy(targetColor);
        }
      }
      if (opacity !== undefined && material) {
        const targetOpacity = THREE.MathUtils.lerp(
          material.opacity,
          opacity,
          t,
        );
        if (Math.abs(material.opacity - targetOpacity) > 0.01) {
          changed = true;
          material.opacity = targetOpacity;
        }
      }
      if (position) {
        if (object.position.distanceTo(position) > 0.01) {
          changed = true;
          object.position.lerp(position, t);
        } else if (object.position.distanceTo(position) <= 0.01) {
          object.position.copy(position);
        }
      }
      if (rotation) {
        const currentRotation = new THREE.Quaternion().setFromEuler(
          object.rotation,
        );
        const targetRotation = new THREE.Quaternion().setFromEuler(rotation);
        if (currentRotation.angleTo(targetRotation) > 0.01) {
          changed = true;
          object.rotation.setFromQuaternion(
            currentRotation.slerp(targetRotation, t),
          );
        }
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
