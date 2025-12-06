import * as THREE from '../three.js-master/build/three.module.js'

let scene, camera, renderer
let init = () => {
    scene = new THREE.Scene()

    let w = window.innerWidth
    let h = window.innerHeight
    let aspect = w/h
    // aspect untuk menyesuaikan ukuran kamera, agar tidak terdistorsi
    camera = new THREE.PerspectiveCamera(75, aspect)
    camera.position.set(0,0,10)
    camera.lookAt(0,0,0)

    renderer = new THREE.WebGLRenderer()
    renderer.setSize(w,h)
    document.body.appendChild(renderer.domElement)
}

let fill = () => {
    let pointCoordinate = [
        new THREE.Vector3(5,5,0),
        new THREE.Vector3(-5,5,0),
        new THREE.Vector3(-5,-5,0),
        new THREE.Vector3(5,-5,0)
    ]
    let pointGeometry = new THREE.BufferGeometry().setFromPoints(pointCoordinate)
    let pointMaterial = new THREE.PointsMaterial({
        color: 0x60b3fc
    })
    let point = new THREE.Points(pointGeometry, pointMaterial)
    scene.add(point)

    let lineCoordinate = [
        new THREE.Vector3(5,5,0),
        new THREE.Vector3(-5,5,0),
        new THREE.Vector3(-5,-5,0),
        new THREE.Vector3(5,-5,0)
        // new THREE.Vector3(5,5,0)
    ]
    let lineGeometry = new THREE.BufferGeometry().setFromPoints(lineCoordinate)
    let lineMaterial = new THREE.LineBasicMaterial({
        color: 0xbfe1ff
    })
    // let line = new THREE.Line(lineGeometry, lineMaterial)
    let line = new THREE.LineLoop(lineGeometry, lineMaterial)
    scene.add(line)

    let planeGeometry = new THREE.PlaneGeometry(10, 10)
    let planeMaterial = new THREE.MeshBasicMaterial({
        color: 0xe2bfff,
        side: THREE.DoubleSide
    })
    let plane = new THREE.Mesh(planeGeometry, planeMaterial)
    plane.position.set(5,0,0)
    plane.rotateY(Math.PI/4)
    scene.add(plane)
}

let render = () => {
    renderer.render(scene, camera) 
}

window.onload = () => {
    init()
    fill()
    render()
}