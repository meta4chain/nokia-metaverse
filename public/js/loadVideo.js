import * as THREE from '../node_modules/three/build/three.module.js';

let volume = 1
// export default function createVideo(scene, level) {
//     console.log("loading video")
//     const video = document.getElementById("video")
//     console.log(video)
//     video.load()
//     video.play()
//     let videoTexture = new THREE.VideoTexture(video)
//     videoTexture.minFilter = THREE.LinearFilter
//     videoTexture.magFilter = THREE.LinearFilter
//     videoTexture.format = THREE.RGBFormat

//     let videoObject = new THREE.Mesh(
//         new THREE.PlaneGeometry(3, 1.6),
//         new THREE.MeshBasicMaterial( { map: videoTexture } )
//     )

//     videoObject.position.set(-3.15, -0.85, -1.39)
//     videoObject.autoplay = true
//     videoObject.rotation.set(0, 179.07, 0)
//     videoObject.name = "movieVideo"
//     console.log(scene)
//     scene.add(videoObject)
//     console.log("video added")

// }

export default class CreateVideo {
    constructor(scene, level) {
        this.scene = scene
        this.level = level
        this.video1Boolean = false
        this.video2Boolean = false
        this.video3Boolean = false
        this.video4Boolean = false
        this.goldParams = [ // Mudei para um array de objetos pois assim consigo trabalhar melhor com o for e a função fica melhor utilizada
            { // Video 1
                videoPosition: {
                    "x": -3.15,
                    "y": -0.85,
                    "z": -1.39
                },
                videoRotation: {
                    "x": 0,
                    "y": 179.07,
                    "z": 0
                }
            },
            { // Video 2
                videoPosition: {
                    "x": -3.15,
                    "y": -0.85,
                    "z": -15.96
                },
                videoRotation: {
                    "x": 0,
                    "y": 0,
                    "z": 0
                }
            },
            { // Video 3
                videoPosition: {
                    "x": 20.9,
                    "y": -0.85,
                    "z": -1.39
                },
                videoRotation: {
                    "x": 0,
                    "y": 179.07,
                    "z": 0
                }
            },
            { //Video 4
                videoPosition: {
                    "x": 20.905,
                    "y": -0.85,
                    "z": -15.96
                },
                videoRotation: {
                    "x": 0,
                    "y": 0,
                    "z": 0
                }
            }
        ]

        this.goldParamsImages = [ // Mudei para um array de objetos pois assim consigo trabalhar melhor com o for e a função fica melhor utilizada
            { // Video 1 -0.30477210879325867, y: -3.4766666889190674, z: -20.301868438720703
                videoPosition: {
                    "x": -0.3,
                    "y": -0.8,
                    "z": -20.30
                },
                videoRotation: {
                    "x": 0,
                    "y": 0,
                    "z": 0
                }
            },
            { // Video 2 -0.30477216839790344, y: -3.4766666889190674, z: 15.489874839782715
                videoPosition: {
                    "x": -0.3,
                    "y": -0.8,
                    "z": 15.47
                },
                videoRotation: {
                    "x": 0,
                    "y": 3.15,
                    "z": 0
                }
            },

        ]
    }
    loadVideo(mobileControls) {
        this._loadImageStatic()
        const video = document.getElementById("video1")
        video.load()
        let videoTexture = new THREE.VideoTexture(video)
        videoTexture.minFilter = THREE.LinearFilter
        videoTexture.magFilter = THREE.LinearFilter
        let videoObject = new THREE.Mesh(new THREE.PlaneGeometry(2.72, 1.5), new THREE.MeshBasicMaterial({ map: videoTexture }))
        videoObject.position.set(6.2, -1.49, -5.17)

        videoObject.rotation.set(0, 80.11, 0)
        videoObject.name = "video1"
        this.scene.add(videoObject)
        video.volume=0;
        video.play()

        // Snapdragon video 
        // const snapdragon = document.getElementById("snapdragon")
        // console.log(snapdragon)
        // snapdragon.load()
        // let videoTexture2 = new THREE.VideoTexture(snapdragon)
        // videoTexture2.minFilter = THREE.LinearFilter
        // videoTexture2.magFilter = THREE.LinearFilter
        // let videoObject2 = new THREE.Mesh(new THREE.PlaneGeometry(3, 1.6), new THREE.MeshBasicMaterial({ map: videoTexture2 }))
        // videoObject2.position.set(-3.2, -0.85, -1.4)
        // videoObject2.rotation.set(0, 179.07, 0)
        // videoObject2.name = "snapdragon"
        // this.scene.add(videoObject2)
        // snapdragon.play()

    }

    _loadImageStatic() {
        let imgArr = ['../files/nokiaVesting/nokiapg1.png', '../files/nokiaVesting/nokiametaverse.jpeg' ]

        for(var i = 0; i < 2; i++) {
            let planeGeometry = new THREE.PlaneGeometry(5.2, 2.8)
            let texture = new THREE.TextureLoader().load(imgArr[i])
            let planeMaterial = new THREE.MeshLambertMaterial({ map: texture, DoubleSide: true, transparent: true })

            var plane = new THREE.Mesh(planeGeometry, planeMaterial)
            plane.position.set(this.goldParamsImages[i].videoPosition.x, this.goldParamsImages[i].videoPosition.y, this.goldParamsImages[i].videoPosition.z)
            plane.rotation.set(this.goldParamsImages[i].videoRotation.x, this.goldParamsImages[i].videoRotation.y, this.goldParamsImages[i].videoRotation.z)
            this.scene.add(plane)
        }

        // let planeGeometry = new THREE.PlaneGeometry(15.8, 15)
        // let texture = new THREE.TextureLoader().load('../files/QVesting/heroQC.jpeg')
        // let planeMaterial = new THREE.MeshLambertMaterial({ map: texture, DoubleSide: true, transparent: true })

        // var plane = new THREE.Mesh(planeGeometry, planeMaterial)
        // i = 4;
        // plane.position.set(this.goldParamsImages[i].videoPosition.x, this.goldParamsImages[i].videoPosition.y, this.goldParamsImages[i].videoPosition.z)
        // plane.rotation.set(this.goldParamsImages[i].videoRotation.x, this.goldParamsImages[i].videoRotation.y, this.goldParamsImages[i].videoRotation.z)


        // this.scene.add(plane)

        let pdfPlaneGeometry = new THREE.PlaneGeometry(0.5, 0.5)
        let pdfTexture = new THREE.TextureLoader().load('../files/nokiaVesting/pdf.png')
        
        let pdfPlaneMaterial = new THREE.MeshLambertMaterial({ map: pdfTexture, DoubleSide: true, transparent: true })
        

        
        var pdfplane = new THREE.Mesh(pdfPlaneGeometry, pdfPlaneMaterial)
        pdfplane.position.set(6.1, -2.6, -6.37)

        pdfplane.rotation.set(0, 80.11, 0)

        pdfplane.name = "pdfplane"
        this.scene.add(pdfplane)
        
        // let image = 0
        // window.setInterval( () => {
        //         if(image > 2){
        //         image = 0;
        //         balloonPlaneMaterial.map = balloonTexture
        //         }            
        //        if(image == 1){
        //         balloonPlaneMaterial.map = balloonTexture1
        //         }
        //         else if(image == 2){
        //             balloonPlaneMaterial.map = balloonTexture2
        //             }
        //         balloonPlaneMaterial.needsUpdate = true
                    
        //         image++
            
        //   } , 3500);


    }

    _addVideoOnScene(videoController, video, level, params) {
        if (level === "gold") {
            video.position.set(params.videoPosition.x, params.videoPosition.y, params.videoPosition.z)
            video.rotation.set(params.videoRotation.x, params.videoRotation.y, params.videoRotation.z)
            this.scene.add(video)
            // setTimeout(videoController.play(), 10000)
        }
    }

    updateVideoVolume(camera, mobileControls, mutedControlsButton) {
        
        const maxDistance = 80;
        

        // for (var i = 1; i < 2; i++) { // @TODO POSITIONAL AUDIO with rotation 
            const video = document.getElementById("video1" )
            let distanceBetweenPlayerVideo = camera.position.distanceToSquared(this.scene.getObjectByName("video1").position)
            //  console.log("distance: " + distanceBetweenPlayerVideo)
            
            volume = 0
            if(distanceBetweenPlayerVideo < maxDistance){
                console.log(mutedControlsButton)
                if(mobileControls.detectiOS() || !mutedControlsButton){
                    video.muted = false;
                } 
                console.log(video.muted)
        
                volume = Math.max( 0, 1 - 1/maxDistance * distanceBetweenPlayerVideo )
            }
            // else{
            //     video.muted = true;
                
            // }    
                
            if (isNaN(volume) || !isFinite(volume)){
                volume = 0
            }
            // console.log("video " + i + ": " + volume)
            video.volume = parseFloat(volume)

            
        // }
    }
}
