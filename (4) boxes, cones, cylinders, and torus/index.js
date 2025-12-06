import * as THREE from "../three.js-master/build/three.module.js"

let scene, camera, renderer

let init = () => {
    scene = new THREE.Scene()

    let w = window.innerWidth
    let h = window.innerHeight
    let aspect = w/h
    camera = new THREE.PerspectiveCamera(75, aspect, 1, 500)
    camera.position.set(45, 0, 45)
    camera.lookAt(0, 0, 0)

    renderer = new THREE.WebGLRenderer()
    renderer.setSize(w, h)
    document.body.appendChild(renderer.domElement)
}

let fill = () => {
    let mat = new THREE.MeshNormalMaterial()

    let box = new THREE.BoxGeometry(7, 26, 7)
    let boxMesh = new THREE.Mesh(box, mat)
    scene.add(boxMesh)

    let cone = new THREE.ConeGeometry(5, 7, 4)
    let coneMesh = new THREE.Mesh(cone, mat)
    coneMesh.position.set(0, 16.5, 0)
    coneMesh.rotateY(45 * Math.PI / 180)
    scene.add(coneMesh)

    let cylinder = new THREE.CylinderGeometry(5, 5, 10, 8)
    let wireframe = new THREE.WireframeGeometry(cylinder)
    let line = new THREE.LineSegments(wireframe)
    line.position.set(10,0,0)
    scene.add(line)
    
    let torus = new THREE.TorusGeometry(25, 2, 8, 10)
    let torusMesh = new THREE.Mesh(torus, mat)
    scene.add(torusMesh)
}

let render = () => {
    renderer.render(scene, camera)
}

window.onload = () => {
    init()
    fill()
    render()
}