import * as THREE from "three";
import { BufferGeometryUtils } from "three/examples/jsm/Addons.js";

export const xSpacing = 120,
  xOffset = 0,
  zSpacing = -150,
  zOffset = -30;

export const positions = [
  new THREE.Vector3(xOffset - xSpacing, 0, zOffset + zSpacing),
  new THREE.Vector3(xOffset - xSpacing, 0, zOffset),
  new THREE.Vector3(xOffset + 0, 0, zOffset + zSpacing),
  new THREE.Vector3(xOffset + 0, 0, zOffset),
  new THREE.Vector3(xOffset + xSpacing, 0, zOffset + zSpacing),
  new THREE.Vector3(xOffset + xSpacing, 0, zOffset),
];

export type ShapeType =
  | "cube"
  | "small cuboid"
  | "big cuboid"
  | "cylinder"
  | "half-cylinder"
  | "prism";
export type HoleType = "square" | "rect" | "circle" | "semicircle" | "triangle";
export interface ShapeData {
  type: ShapeType;
  geometry: THREE.BufferGeometry;
  rotation: THREE.Euler;
  hole?: {
    type: HoleType;
    offset?: THREE.Vector3;
    rotation?: THREE.Euler;
  };
  compatibleHoles: HoleType[];
  holeAlignment?: {
    holeType: "any" | HoleType[];
    offset?: THREE.Vector3;
    rotation?: THREE.Euler;
  }[];
}

export const shapesData = [
  {
    type: "cube",
    geometry: new THREE.BoxGeometry(50, 50, 50),
    rotation: new THREE.Euler(0, Math.PI / 6, 0),
    hole: {
      type: "square",
    },
    compatibleHoles: ["square"],
  },
  {
    type: "small cuboid",
    geometry: new THREE.BoxGeometry(30, 30, 50),
    rotation: new THREE.Euler(0, Math.PI / 6, 0),
    hole: {
      type: "rect",
    },
    compatibleHoles: ["rect", "square", "circle"],
    holeAlignment: [
      {
        holeType: "any",
        offset: new THREE.Vector3(0, -10, 0),
      },
      {
        holeType: ["circle"],
        offset: new THREE.Vector3(0, 0, 0),
        rotation: new THREE.Euler(Math.PI / 2, 0, 0),
      },
    ],
  },
  {
    type: "big cuboid",
    geometry: new THREE.BoxGeometry(50, 50, 80),
    rotation: new THREE.Euler(0, Math.PI / -3, 0),
    compatibleHoles: ["square"],
    holeAlignment: [
      {
        holeType: "any",
        offset: new THREE.Vector3(0, 15, 0),
        rotation: new THREE.Euler(Math.PI / 2, 0, 0),
      },
    ],
  },
  {
    type: "cylinder",
    geometry: new THREE.CylinderGeometry(25, 25, 50, 32),
    rotation: new THREE.Euler(0, Math.PI / -3, Math.PI / 2),
    hole: {
      type: "circle",
    },
    compatibleHoles: ["circle", "square"],
  },
  {
    type: "half-cylinder",
    geometry: BufferGeometryUtils.mergeGeometries([
      new THREE.CylinderGeometry(25, 25, 60, 32, 1, false, 0, Math.PI),
      new THREE.PlaneGeometry(50, 60).rotateY(Math.PI / -2),
    ]).translate(-25 / 2, 0, 0),
    rotation: new THREE.Euler(0, Math.PI / 6, Math.PI / 2),
    hole: {
      type: "semicircle",
      rotation: new THREE.Euler(0, Math.PI / 2, 0),
    },
    compatibleHoles: ["semicircle", "square", "circle"],
    holeAlignment: [
      {
        holeType: "any",
        offset: new THREE.Vector3(0, 5, 0),
        rotation: new THREE.Euler(0, Math.PI / 2, 0),
      },
    ],
  },
  {
    type: "prism",
    geometry: new THREE.ExtrudeGeometry(
      new THREE.Shape([
        new THREE.Vector2(0, 0),
        new THREE.Vector2(50, 0),
        new THREE.Vector2(25, 50),
      ]),
      { depth: 50, bevelEnabled: false },
    ).translate(-25, -25, -25),
    rotation: new THREE.Euler(0, Math.PI / 6, 0),
    hole: {
      type: "triangle",
      rotation: new THREE.Euler(-Math.PI / 2, 0, 0),
    },
    compatibleHoles: ["triangle", "square"],
    holeAlignment: [
      {
        holeType: "any",
        rotation: new THREE.Euler(Math.PI / 2, 0, Math.PI),
      },
    ],
  },
] as ShapeData[];
