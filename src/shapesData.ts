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

export const shapesData = [
  {
    type: "cube",
    geometry: new THREE.BoxGeometry(50, 50, 50),
    offset: new THREE.Vector3(),
    rotation: new THREE.Euler(0, Math.PI / 6, 0),
    compatibleHoles: ["cube"],
    hole: {
      render: true,
      shapeOffset: new THREE.Vector3(),
      rotation: new THREE.Euler(),
    },
  },
  {
    type: "small cuboid",
    geometry: new THREE.BoxGeometry(30, 30, 50),
    offset: new THREE.Vector3(),
    rotation: new THREE.Euler(0, Math.PI / 6, 0),
    compatibleHoles: ["small cuboid", "cube"],
    hole: {
      render: true,
      shapeOffset: new THREE.Vector3(0, -10, 0),
      rotation: new THREE.Euler(),
    },
  },
  {
    type: "big cuboid",
    geometry: new THREE.BoxGeometry(50, 50, 80),
    offset: new THREE.Vector3(),
    rotation: new THREE.Euler(0, Math.PI / -3, 0),
    compatibleHoles: ["cube"],
    hole: {
      render: false,
      shapeOffset: new THREE.Vector3(0, 15, 0),
      rotation: new THREE.Euler(Math.PI / 2, 0, 0),
    },
  },
  {
    type: "cylinder",
    geometry: new THREE.CylinderGeometry(25, 25, 50, 32),
    offset: new THREE.Vector3(),
    rotation: new THREE.Euler(0, Math.PI / -3, Math.PI / 2),
    compatibleHoles: ["cylinder", "cube"],
    hole: {
      render: true,
      shapeOffset: new THREE.Vector3(),
      rotation: new THREE.Euler(),
    },
  },
  {
    type: "half-cylinder",
    geometry: BufferGeometryUtils.mergeGeometries([
      new THREE.CylinderGeometry(25, 25, 60, 32, 1, false, 0, Math.PI),
      new THREE.PlaneGeometry(50, 60).rotateY(Math.PI / -2),
    ]).translate(-25 / 2, 0, 0),
    offset: new THREE.Vector3(),
    rotation: new THREE.Euler(0, Math.PI / 6, Math.PI / 2),
    compatibleHoles: ["half-cylinder", "cube", "cylinder"],
    hole: {
      render: true,
      shapeOffset: new THREE.Vector3(0, 5, 0),
      rotation: new THREE.Euler(0, Math.PI / 2, 0),
    },
  },
  {
    type: "triangular prism",
    geometry: new THREE.ExtrudeGeometry(
      new THREE.Shape([
        new THREE.Vector2(0, 0),
        new THREE.Vector2(50, 0),
        new THREE.Vector2(25, 50),
      ]),
      { depth: 50, bevelEnabled: false },
    ).translate(-25, -25, -25),
    offset: new THREE.Vector3(0, 0, -5),
    rotation: new THREE.Euler(0, Math.PI / 6, 0),
    compatibleHoles: ["triangular prism", "cube"],
    hole: {
      render: true,
      shapeOffset: new THREE.Vector3(),
      rotation: new THREE.Euler(Math.PI / 2, 0, Math.PI),
    },
  },
];
