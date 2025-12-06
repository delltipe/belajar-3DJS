import * as THREE from './Three JS/build/three.module.js'
import { GLTFLoader } from './Three JS/examples/jsm/loaders/GLTFLoader.js'

let camera, scene, renderer

let init = () => {
    scene = new THREE.Scene()

    let w = window.innerWidth
    let h = window.innerHeight
    let aspect = w/h

    camera = new THREE.PerspectiveCamera(75, aspect)
    camera.position.set(0, 5, 10)
    camera.lookAt(0, 0, 0)

    renderer = new THREE.WebGLRenderer()
    renderer.setSize(w, h)
    renderer.setClearColor(0xffffff)    
    document.body.appendChild(renderer.domElement)

    scene.add(new THREE.AmbientLight(0xffffff, 1))
}

let render = () => {
    renderer.render(scene, camera)
    requestAnimationFrame(render)
}

let load3D = (url) => {
    let loader = new GLTFLoader()
    loader.load(url, (gltf)=>{
        let object = gltf.scene
        object.scale.set(5, 5, 5)
        scene.add(gltf.scene)
    })
}

window.onload = () => {
    init()
    load3D('./shiba/scene.gltf')
    render()
}