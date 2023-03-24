import * as THREE from "three";
import { Color, Scene } from "three";
import Experience from "../Utils/Experience.js";
import World from "./World.js";

export default class Environment {
    constructor() {
        this.scene = new Scene();
        this.scene.background = new Color(0x36ade0);

        this.experience = new Experience();
        this.sizes = this.experience.sizes;
        this.scene = this.experience.scene;
        this.canvas = this.experience.canvas;
        this.camera = this.experience.camera;
        this.resources = this.experience.resources;

        this.resources.on("Loaded", () => {
            this.world = new World();
        });
    }

    resize() {
        
    }

    update() {
        this.scene.background = new Color(0x36ade0);

        if (this.world) {
            this.world.update();
        }
    }
}