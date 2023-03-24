import Experience from "../Utils/Experience";
import * as THREE from "three";

export default class World {
    constructor() {
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.resources = this.experience.resources;
        this.rawWorld = this.experience.resources.loadedAssets.world;
        this.world = this.experience.resources.loadedAssets.world.scene;
        this.time = this.experience.time;

        this.scene.add(this.world);
        this.light = new THREE.AmbientLight();

        this.setAnimation();
    }

    setAnimation() {
        this.mixer = [this.rawWorld.animations.length];
        this.animations = [this.rawWorld.animations.length];
        
        for (var i = 0; i < this.rawWorld.animations.length; i++) {
            this.mixer[i] = new THREE.AnimationMixer(this.world);
            this.animations[i] = this.rawWorld.animations[i];
            this.currentAnim = this.mixer[i].clipAction(this.animations[i]);
            this.currentAnim.play();
        }
    }

    update() {
        for (var i = 0; i < this.rawWorld.animations.length; i++) {
            this.mixer[i].update(0.001 * this.time.delta);
        }
    }
}