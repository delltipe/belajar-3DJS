import * as THREE from '../three.js-master/build/three.module.js'
import { OrbitControls } from '../three.js-master/examples/jsm/controls/OrbitControls.js'

let camera, scene, renderer

let init = () => {
    scene = new THREE.Scene()

    let w = window.innerWidth
    let h = window.innerHeight
    let aspect = w/h

    camera = new THREE.PerspectiveCamera(75, aspect, 5, 50000)
    camera.position.set(0, 0, 1)

    renderer = new THREE.WebGLRenderer()
    renderer.setSize(w, h)
    document.body.appendChild(renderer.domElement)

    let control = new OrbitControls(camera, renderer.domElement)
}

let render = () => {
    requestAnimationFrame(render)
    renderer.render(scene, camera)
}

// URUTANNYA HARUS SESUAI (DEPAN - BELAKANG, ATAS - BAWAH, KANAN - KIRI)

let generateSkybox = async () => {
    let front = await new THREE.TextureLoader().load("./cloudy/bluecloud_ft.jpg")
    let back = await new THREE.TextureLoader().load("./cloudy/bluecloud_bk.jpg")
    let top = await new THREE.TextureLoader().load("./cloudy/bluecloud_up.jpg")
    let bottom = await new THREE.TextureLoader().load("./cloudy/bluecloud_dn.jpg")
    let right = await new THREE.TextureLoader().load("./cloudy/bluecloud_rt.jpg")
    let left = await new THREE.TextureLoader().load("./cloudy/bluecloud_lf.jpg")

    let materialArray = []
    materialArray.push(new THREE.MeshBasicMaterial({map: front}))
    materialArray.push(new THREE.MeshBasicMaterial({map: back}))
    materialArray.push(new THREE.MeshBasicMaterial({map: top}))
    materialArray.push(new THREE.MeshBasicMaterial({map: bottom}))
    materialArray.push(new THREE.MeshBasicMaterial({map: right}))
    materialArray.push(new THREE.MeshBasicMaterial({map: left}))

    materialArray.forEach(element => {
        element.side = THREE.BackSide
    });

    let skyboxGeometry = new THREE.BoxGeometry(10000, 10000, 10000)
    let skybox = new THREE.Mesh(skyboxGeometry, materialArray)

    scene.add(skybox)
}

window.onload = async () => {
    init()
    await generateSkybox()
    render()
}