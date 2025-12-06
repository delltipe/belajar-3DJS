import * as THREE from '../three.js-master/build/three.module.js'

let scene, camera, renderer

let createGround = () => {
    let geometry = new THREE.PlaneGeometry(500, 500)
    let material = new THREE.MeshPhongMaterial({
        color: 0x008D05
    })
    let ground = new THREE.Mesh(geometry, material)

    ground.rotation.x = -Math.PI / 2
    ground.receiveShadow = true

    scene.add(ground)
}

let createFlagSitter = () => {
    let geometry = new THREE.BoxGeometry(50, 20, 50 )
    let material = new THREE.MeshPhongMaterial({
        color: 0x321C00
    })
    let flagSitter = new THREE.Mesh(geometry, material)

    flagSitter.receiveShadow = true

    scene.add(flagSitter)
}

let createFlagPole = () => {
    let geometry = new THREE.CylinderGeometry(1, 1, 150)
    let material = new THREE.MeshPhongMaterial({
        color: 0xFFF000
    })
    let flagPole = new THREE.Mesh(geometry, material)
    flagPole.castShadow = true
    
    scene.add(flagPole)
}

let createFlag = () => {
    let geometry = new THREE.PlaneGeometry(40, 20, 1)
    let material = new THREE.MeshPhongMaterial({
        color: 0x000000
    })
    let flag = new THREE.Mesh(geometry, material)
    flag.position.set(20, 65, 0)
    flag.castShadow = true

    let loader = new THREE.TextureLoader()
    let texture = loader.load('./OnePieceLogo.jpg')

    let logoGeometry = new THREE.PlaneGeometry(15, 7.5)
    let logoMaterial = new THREE.MeshPhongMaterial({
        // color: 0xFFF000,
        map: texture
    })
    let logo = new THREE.Mesh(logoGeometry, logoMaterial)
    logo.position.set(20, 65, 1)
    logo.castShadow = true

    scene.add(flag, logo)
}

// let createLight = () => {
//     let light = new THREE.AmbientLight()

//     scene.add(light)
// }

let createLight = () => {
    let light = new THREE.PointLight(0xffffff, 100000, 1000)
    light.position.set(100, 150, 50)
    let helper = new THREE.PointLightHelper(light, 20, 0xff0000)

    light.castShadow = true

    scene.add(light, helper)
}

let init = () => {
    scene = new THREE.Scene()

    let w = window.innerWidth
    let h = window.innerHeight
    let aspect = w/h

    camera = new THREE.PerspectiveCamera(75, aspect)
    camera.position.set(50, 100, 100)
    camera.lookAt(0, 0, 0)

    renderer = new THREE.WebGLRenderer()
    renderer.setSize(w, h)
    renderer.setClearColor(0x92E3FF)
    renderer.shadowMap.enabled = true
    document.body.appendChild(renderer.domElement)

    createGround()
    createFlagSitter()
    createFlagPole()
    createFlag()
    createLight()
}

let render = () => {
    requestAnimationFrame(render)
    renderer.render(scene, camera)
}

window.onload = () => {
    init()
    render()
}