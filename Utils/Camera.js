import * as THREE from "three";
import Experience from "./Experience";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

export default class Camera {
    constructor() {
        this.experience = new Experience();
        this.sizes = this.experience.sizes;
        this.scene = this.experience.scene;
        this.canvas = this.experience.canvas;
        this.viewSize = 25;
        this.canOrbit = true;

        this.orthographicCamera = new THREE.OrthographicCamera(
            -this.sizes.aspect * this.viewSize / 2,
            this.sizes.aspect * this.viewSize / 2,
            this.viewSize / 2,
            -this.viewSize / 2,
            0.1,
            1000
        );
        
        this.orthographicCamera.position.x = 25;
        this.orthographicCamera.position.y = 20;
        this.orthographicCamera.position.z = 25;

        this.scene.add(this.orthographicCamera);

        this.setOrbit();
    }

    setOrbit() {
        this.orbitControls = new OrbitControls(this.orthographicCamera, this.canvas);
        this.orbitControls.enableDamping = true;
        this.orbitControls.enablePan = false;
        this.orbitControls.enableZoom = false;

        const angle = this.orbitControls.getPolarAngle();
        this.orbitControls.maxPolarAngle = angle;
        this.orbitControls.minPolarAngle = angle;
    }

    resize() {
        this.orthographicCamera.left = -this.sizes.aspect * this.viewSize / 2;
        this.orthographicCamera.right = this.sizes.aspect * this.viewSize / 2;
        this.orthographicCamera.top = this.viewSize / 2;
        this.orthographicCamera.bottom = -this.viewSize / 2;
        this.orthographicCamera.updateProjectionMatrix();
    }

    update() {
        if (this.canOrbit === true) {
            this.orbitControls.update();
        }
    }
}