import * as THREE from '../three.js-master/build/three.module.js'
import { TextGeometry } from '../three.js-master/examples/jsm/geometries/TextGeometry.js'
import { Font, FontLoader } from '../three.js-master/examples/jsm/loaders/FontLoader.js'
import { TTFLoader } from '../three.js-master/examples/jsm/loaders/TTFLoader.js'

let scene, camera, renderer

let init = () => {
    scene = new THREE.Scene

    let w = window.innerWidth
    let h = window.innerHeight
    let aspect = w/h
    
    camera = new THREE.PerspectiveCamera
    camera.position.set(5, 5, 50)
    camera.lookAt(0, 0, 0)

    renderer = new THREE.WebGLRenderer({antialias: true})
    renderer.setSize(w, h)
    document.body.appendChild(renderer.domElement)
}

let render = () => {
    renderer.render(scene, camera)
}

let fill = async () => {
    let loader = new TTFLoader()
    let json = await loader.loadAsync('../three.js-master/examples/fonts/ttf/kenpixel.ttf')
    let font = new Font(json)

    let textGeometry = new TextGeometry("Hello World", {
        font: font,
        size: 3,
        height: 1,
        depth: 5
    })
    let textMaterial = new THREE.MeshBasicMaterial({
        color: 0x00ff00
    })
    let textMesh = new THREE.Mesh(textGeometry, textMaterial)
    textMesh.position.set(-15, 0, -30)

    scene.add(textMesh)
}

window.onload = async () => {
    init()
    await fill()
    render()
}