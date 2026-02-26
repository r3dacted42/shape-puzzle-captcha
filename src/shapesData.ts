import * as THREE from "three";
import { BufferGeometryUtils } from "three/examples/jsm/Addons.js";

export const xSpacing = 120,
  xOffset = 0,
  zSpacing = -150,
  zOffset = -30;

export const positions = [
  { x: xOffset - xSpacing, y: 0, z: zOffset + zSpacing },
  { x: xOffset - xSpacing, y: 0, z: zOffset },
  { x: xOffset + 0, y: 0, z: zOffset + zSpacing },
  { x: xOffset + 0, y: 0, z: zOffset },
  { x: xOffset + xSpacing, y: 0, z: zOffset + zSpacing },
  { x: xOffset + xSpacing, y: 0, z: zOffset },
];

export const shapesData = [
  {
    type: "cube",
    geometry: new THREE.BoxGeometry(50, 50, 50),
    offset: { x: 0, y: 0, z: 0 },
    rotation: { x: 0, y: Math.PI / 6, z: 0 },
    compatibleHoles: ["cube"],
    hole: {
      render: true,
      compatibleShapes: ["all"],
      shapeOffset: { x: 0, y: 0, z: 0 },
      rotation: { x: 0, y: 0, z: 0 },
    },
  },
  {
    type: "small cuboid",
    geometry: new THREE.BoxGeometry(30, 30, 50),
    offset: { x: 0, y: 0, z: 0 },
    rotation: { x: 0, y: Math.PI / 6, z: 0 },
    compatibleHoles: ["small cuboid", "cube"],
    hole: {
      render: true,
      shapeOffset: { x: 0, y: -10, z: 0 },
      rotation: { x: 0, y: 0, z: 0 },
    },
  },
  {
    type: "big cuboid",
    geometry: new THREE.BoxGeometry(50, 50, 80),
    offset: { x: 0, y: 0, z: 0 },
    rotation: { x: 0, y: Math.PI / -3, z: 0 },
    compatibleHoles: ["cube"],
    hole: {
      render: false,
      shapeOffset: { x: 0, y: 15, z: 0 },
      rotation: { x: Math.PI / 2, y: 0, z: 0 },
    },
  },
  {
    type: "cylinder",
    geometry: new THREE.CylinderGeometry(25, 25, 50, 32),
    offset: { x: 0, y: 0, z: 0 },
    rotation: { x: 0, y: Math.PI / -3, z: Math.PI / 2 },
    compatibleHoles: ["cylinder", "cube"],
    hole: {
      render: true,
      shapeOffset: { x: 0, y: 0, z: 0 },
      rotation: { x: 0, y: 0, z: 0 },
    },
  },
  {
    type: "half-cylinder",
    geometry: BufferGeometryUtils.mergeGeometries([
      new THREE.CylinderGeometry(25, 25, 60, 32, 1, false, 0, Math.PI),
      new THREE.PlaneGeometry(50, 60).rotateY(Math.PI / -2),
    ]).translate(-25 / 2, 0, 0),
    offset: { x: 0, y: 0, z: 0 },
    rotation: { x: 0, y: Math.PI / 6, z: Math.PI / 2 },
    compatibleHoles: ["half-cylinder", "cube", "cylinder"],
    hole: {
      render: true,
      shapeOffset: { x: 0, y: 5, z: 0 },
      rotation: { x: 0, y: Math.PI / 2, z: 0 },
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
    offset: { x: 0, y: 0, z: -5 },
    rotation: { x: 0, y: Math.PI / 6, z: 0 },
    compatibleHoles: ["triangular prism", "cube"],
    hole: {
      render: true,
      shapeOffset: { x: 0, y: 0, z: 0 },
      rotation: { x: Math.PI / 2, y: 0, z: Math.PI },
    },
  },
];
