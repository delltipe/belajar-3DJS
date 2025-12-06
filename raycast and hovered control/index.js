import * as THREE from "../three.js-master/build/three.module.js"

let camera, scene, renderer

let generateBox = () => {
    for (let i = -1; i < 2; i++) {
        let geometry = new THREE.BoxGeometry(2, 2, 2)
        let material = new THREE.MeshBasicMaterial({ 
            color: 0x00ff00
        })
        let mesh = new THREE.Mesh(geometry, material)
        mesh.position.set((i * 5), 0, -10)

        scene.add(mesh)
    }
}

let init = () => {
    scene = new THREE.Scene()

    let w = window.innerWidth
    let h = window.innerHeight
    let aspect = w/h
    camera = new THREE.PerspectiveCamera(75, aspect, 1, 50)

    renderer = new THREE.WebGLRenderer()
    renderer.setSize(w, h)
    document.body.appendChild(renderer.domElement)
}

let render = () => {
    renderer.render(scene, camera)
    requestAnimationFrame(render)
}

window.onload = () => {
    init()
    generateBox()
    render()
}

let lastHovered = null

window.onmousemove = event => {
    let mouse = new THREE.Vector2()
    // koordinat akan berubah dari -1 sampai 1
    // anchor point masih di kiri atas, akan diubah ke tengah layar
    mouse.x = event.clientX / window.innerWidth * 2 - 1
    mouse.y = -event.clientY / window.innerHeight * 2 + 1

    let raycast = new THREE.Raycaster()
    raycast.setFromCamera(mouse, camera)

    if (lastHovered){
        // console.log("reset color")
        lastHovered.material.color = lastHovered.originalColor
    }

    const intersect = raycast.intersectObjects(scene.children)

    if (intersect.length > 0){
        let hovered = intersect[0].object
        if (!hovered.originalColor) {
            hovered.originalColor = hovered.material.color
        }
        if (lastHovered && hovered !== lastHovered){
            lastHovered.material.color = lastHovered.originalColor
        }
        hovered.material.color = new THREE.Color(0xff0000)

        lastHovered = hovered
    }
}