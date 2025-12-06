import * as THREE from '../three.js-master/build/three.module.js'

let scene, camera, renderer

// init
let init = () => {
    scene = new THREE.Scene()

    let w = window.innerWidth
    let h = window.innerHeight
    let aspect = w/h

    camera = new THREE.PerspectiveCamera(75, aspect, 1, 20)
    // PrespectiveCamera(fov, aspect ratio, near, far) = kamera yang mengikuti realita,
    // perbedaan posisi mempengaruhi ukuran benda yang terlihat.
    // OrthographicCamera() = kamera yang tidak mempengaruhi ukuran benda dilihat dari sisi manapun

    camera.position.set(2, 0, 0) // menggeser posisi kamera
    camera.lookAt(2, 0, 0)

    renderer = new THREE.WebGLRenderer()
    renderer.setSize(w, h)
    renderer.setClearColor("#e2e2e2")
    document.body.appendChild(renderer.domElement)
}


// render
let render = () => {
    renderer.render(scene, camera)
}

let fill = () => {
    // bikin kubus

    // bikin kerangka
    let box = new THREE.BoxGeometry(2, 2, 2)
    // bikin tampilannya
    let material = new THREE.MeshBasicMaterial({color: "#FF0000"})
    let mesh = new THREE.Mesh(box, material)
    // mesh.translateZ(-10)
    mesh.position.set(0, 0, -10)

    scene.add(mesh)
}

window.onload = () => {
    init()
    fill()
    render()
}

window.onresize = () => {
    let w = window.innerWidth
    let h = window.innerHeight
    let aspect = w/h
    camera.aspect = aspect
    camera.updateProjectionMatrix()

    renderer.setSize(w, h)
}