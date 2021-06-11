import "./style.css";
import * as THREE from "three";

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene(); //instantiation or new instance
/**
 * Objects
 */
const geometry = new THREE.BoxGeometry(1, 1, 1,3,3,3); // 6 sides but its a cube
const material = new THREE.MeshBasicMaterial({ color: 0x00f0ff });
const mesh = new THREE.Mesh(geometry, material);
mesh.position.x = 1
mesh.position.y = 1
mesh.position.z = 1
scene.add(mesh);
///scale

//Rotation

/**
 * Sizes
 */
const sizes = {
width: 800, 
height: 600,
}

/**
 * Camera
 */
const camera = new.THREE.PerspectiveCamera(75, sizes.width/sizes.height )
camera.position.z = 7
camera.position.y = 2
camera.position.x = 1
scene.add(scene, camera)
/**
 * Renderer
 */
const renderer = new THREE.WebGL1Renderer({canvas: canvas, })
renderer