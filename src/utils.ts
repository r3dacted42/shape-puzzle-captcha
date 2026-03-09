import {
  Vector3,
  Vector4,
  Color,
  Quaternion,
  type ColorRepresentation,
} from "three";

// ----------------------- maath/easing.ts excerpt ---------------------------
// https://github.com/pmndrs/maath/blob/main/packages/maath/src/easing.ts

export const rsqw = (t: number, delta = 0.01, a = 1, f = 1 / (2 * Math.PI)) =>
  (a / Math.atan(1 / delta)) * Math.atan(Math.sin(2 * Math.PI * t * f) / delta);
export const exp = (t: number) =>
  1 / (1 + t + 0.48 * t * t + 0.235 * t * t * t);
export const linear = (t: number) => t;

/**
 * Damp, based on Game Programming Gems 4 Chapter 1.10
 *   Return value indicates whether the animation is still running.
 */
export function damp(
  /** The object */
  current: { [key: string]: any },
  /** The key to animate */
  prop: string,
  /** To goal value */
  target: number,
  /** Approximate time to reach the target. A smaller value will reach the target faster. */
  smoothTime = 0.25,
  /** Frame delta, for refreshrate independence */
  delta = 0.01,
  /** Optionally allows you to clamp the maximum speed. If smoothTime is 0.25s and looks OK
   *  going between two close points but not for points far apart as it'll move very rapid,
   *  then a maxSpeed of e.g. 1 which will clamp the speed to 1 unit per second, it may now
   *  take much longer than smoothTime to reach the target if it is far away. */
  maxSpeed = Infinity,
  /** Easing function */
  easing = exp,
  /** End of animation precision */
  eps = 0.001
) {
  const vel = "velocity_" + prop;
  if (current.__damp === undefined) current.__damp = {};
  if (current.__damp[vel] === undefined) current.__damp[vel] = 0;

  if (Math.abs(current[prop] - target) <= eps) {
    current[prop] = target;
    return false;
  }

  smoothTime = Math.max(0.0001, smoothTime);
  const omega = 2 / smoothTime;
  const t = easing(omega * delta);
  let change = current[prop] - target;
  const originalTo = target;
  // Clamp maximum maxSpeed
  const maxChange = maxSpeed * smoothTime;
  change = Math.min(Math.max(change, -maxChange), maxChange);
  target = current[prop] - change;
  const temp = (current.__damp[vel] + omega * change) * delta;
  current.__damp[vel] = (current.__damp[vel] - omega * temp) * t;
  let output = target + (change + temp) * t;
  // Prevent overshooting
  if (originalTo - current[prop] > 0.0 === output > originalTo) {
    output = originalTo;
    current.__damp[vel] = (output - originalTo) / delta;
  }
  current[prop] = output;
  return true;
}

/**
 * Vector3D Damp
 */
const v3d = /*@__PURE__*/ new Vector3();
let a3: boolean, b3: boolean, c3: boolean;
export function damp3(
  current: Vector3,
  target: number | [x: number, y: number, z: number] | Vector3,
  smoothTime?: number,
  delta?: number,
  maxSpeed?: number,
  easing?: (t: number) => number,
  eps?: number
) {
  if (typeof target === "number") v3d.setScalar(target);
  else if (Array.isArray(target)) v3d.set(target[0], target[1], target[2]);
  else v3d.copy(target);
  a3 = damp(current, "x", v3d.x, smoothTime, delta, maxSpeed, easing, eps);
  b3 = damp(current, "y", v3d.y, smoothTime, delta, maxSpeed, easing, eps);
  c3 = damp(current, "z", v3d.z, smoothTime, delta, maxSpeed, easing, eps);
  return a3 || b3 || c3;
}

/**
 * Color Damp
 */
const col = /*@__PURE__*/ new Color();
let aC: boolean, bC: boolean, cC: boolean;
export function dampC(
  current: Color,
  target: ColorRepresentation | [r: number, g: number, b: number],
  smoothTime?: number,
  delta?: number,
  maxSpeed?: number,
  easing?: (t: number) => number,
  eps?: number
) {
  if (target instanceof Color) col.copy(target);
  else if (Array.isArray(target)) col.setRGB(target[0], target[1], target[2]);
  else col.set(target);
  aC = damp(current, "r", col.r, smoothTime, delta, maxSpeed, easing, eps);
  bC = damp(current, "g", col.g, smoothTime, delta, maxSpeed, easing, eps);
  cC = damp(current, "b", col.b, smoothTime, delta, maxSpeed, easing, eps);
  return aC || bC || cC;
}

/**
 * Quaternion Damp
 * https://gist.github.com/maxattack/4c7b4de00f5c1b95a33b
 * Copyright 2016 Max Kaufmann (max.kaufmann@gmail.com)
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
const qt = /*@__PURE__*/ new Quaternion();
const v4result = /*@__PURE__*/ new Vector4();
const v4velocity = /*@__PURE__*/ new Vector4();
const v4error = /*@__PURE__*/ new Vector4();
let aQ: boolean, bQ: boolean, cQ: boolean, dQ: boolean;
export function dampQ(
  current: Quaternion,
  target: [x: number, y: number, z: number, w: number] | Quaternion,
  smoothTime?: number,
  delta?: number,
  maxSpeed?: number,
  easing?: (t: number) => number,
  eps?: number
) {
  const cur = current as Quaternion & { __damp: { [key: string]: number } };
  if (Array.isArray(target)) qt.set(target[0], target[1], target[2], target[3]);
  else qt.copy(target);

  const multi = current.dot(qt) > 0 ? 1 : -1;
  qt.x *= multi;
  qt.y *= multi;
  qt.z *= multi;
  qt.w *= multi;

  aQ = damp(current, "x", qt.x, smoothTime, delta, maxSpeed, easing, eps);
  bQ = damp(current, "y", qt.y, smoothTime, delta, maxSpeed, easing, eps);
  cQ = damp(current, "z", qt.z, smoothTime, delta, maxSpeed, easing, eps);
  dQ = damp(current, "w", qt.w, smoothTime, delta, maxSpeed, easing, eps);

  // smooth damp (nlerp approx)
  v4result.set(current.x, current.y, current.z, current.w).normalize();
  v4velocity.set(
    cur.__damp.velocity_x,
    cur.__damp.velocity_y,
    cur.__damp.velocity_z,
    cur.__damp.velocity_w
  );

  // ensure deriv is tangent
  v4error
    .copy(v4result)
    .multiplyScalar(v4velocity.dot(v4result) / v4result.dot(v4result));
  cur.__damp.velocity_x -= v4error.x;
  cur.__damp.velocity_y -= v4error.y;
  cur.__damp.velocity_z -= v4error.z;
  cur.__damp.velocity_w -= v4error.w;

  current.set(v4result.x, v4result.y, v4result.z, v4result.w);
  return aQ || bQ || cQ || dQ;
}

// ----------------------- end excerpt ---------------------------

export function shuffleArray<T>(array: T[]): T[] {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
