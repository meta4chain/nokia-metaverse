import * as THREE from '../node_modules/three/build/three.module.js';

export default class HandleRaycaster{
    constructor(raycaster) {
        this.raycaster = raycaster
    }

    raycasterUpdate(camera) {
        let origin = camera.position.clone()
        origin.set(origin.x, origin.y - 2.5, origin.z)

        this.raycaster.set(origin, new THREE.Vector3(0, -1, 0))

        var intersectionsDown = this.raycaster.intersectObjects(this.getCollidables())

        var onObject = intersectionsDown.length > 0 && intersectionsDown[0].distance < 0.25
    }

    intersectObjects(pointer, camera, scene){
        this.raycaster.setFromCamera(pointer, camera)

        const intersects = this.raycaster.intersectObjects(scene.children)

        for(let i = 0; i < intersects.length; i++) {
            if(intersects[i].object.name == "pdfplane") {
                // console.log("Cubo clicado")
                let doc = document.getElementById("overlayPDF")
                // console.log(doc)
                doc.style.display = "flex";
                // intersects[i].object.material.color.set(0xff0000);
            }
            else {
                console.log(intersects[i])
            }
        }
    }

    getCollidables() {
        return 0
    }
}