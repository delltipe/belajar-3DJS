import * as THREE from './Three JS/build/three.module.js';
import { OrbitControls } from './Three JS/examples/jsm/controls/OrbitControls.js';

let scene, camera1, camera2, currentCamera, renderer, control;

let init = () => {
    scene = new THREE.Scene();

    let w = window.innerWidth;
    let h = window.innerHeight;
    let aspect = w/h;

    camera1 = new THREE.PerspectiveCamera(75, aspect, 0.1, 1000);
    camera2 = new THREE.PerspectiveCamera(75, aspect, 0.1, 1000);
    camera1.position.set(0, 80, 60);
    camera2.position.set(0, 60, 30);
    camera1.lookAt(0, 0, 0);
    camera2.lookAt(0, 0, 0);
    currentCamera = camera1;

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(w, h);
    renderer.setClearColor(0xffffff);
    document.body.appendChild(renderer.domElement);

    control = new OrbitControls(camera2, renderer.domElement);
    control.autoRotate = true;
};

let boxMesh;

let fill = () => {
    let boxGeometry = new THREE.BoxGeometry(10, 10, 10);
    let boxMaterial = new THREE.MeshBasicMaterial({
        color: 0xff2222
    });
    boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
    boxMesh.position.set(0, 5, 0)
    scene.add(boxMesh);

    let groundGeometry = new THREE.PlaneGeometry(100, 100);
    let groundMaterial = new THREE.MeshBasicMaterial({
        color: 0xffff00,
        side: THREE.DoubleSide
    });
    let groundMesh = new THREE.Mesh(groundGeometry, groundMaterial);
    groundMesh.rotateX(Math.PI/2)
    scene.add(groundMesh);
};

let render = () => {
    requestAnimationFrame(render);
    control.update();
    renderer.render(scene, currentCamera);
};

let keyEvent = (event) => {
    console.log(event.code);

    if (event.code == "KeyA")
        boxMesh.position.x -= 1;
    if (event.code == "KeyD")
        boxMesh.position.x += 1;
    if (event.code == "KeyW")
        boxMesh.position.z -= 1;
    if (event.code == "KeyS")
        boxMesh.position.z += 1;

    if (event.code == "KeyR")
        currentCamera = currentCamera == camera1 ? camera2 : camera1;
}

let mouseEvent = (event) => {
    console.log(event);

    boxMesh.material.color.set(`rgb(${event.clientX % 255}, ${event.clientY % 255}, 0)`);
}

let addEventListener = () => {
    document.addEventListener("keydown", keyEvent);
    document.addEventListener("mousemove", mouseEvent);
}

window.onload = () => {
    addEventListener();
    init();
    fill();
    render();
};