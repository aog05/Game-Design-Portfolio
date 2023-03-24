import * as THREE from "three";
import Sizes from "./Sizes.js";
import Camera from "./Camera.js";
import Renderer from "./Renderer.js";
import Time from "./Time.js";
import Assets from "./Assets.js";
import Resources from "./Resources.js";
import Environment from "../World/Environment.js";
import Buttons from "../Buttons.js";

export default class Experience {
    static instance;
    constructor(canvas) {
        if (Experience.instance) {
            return Experience.instance;
        }

        Experience.instance = this;
        this.canvas = canvas;
        this.scene = new THREE.Scene();
        this.sizes = new Sizes();
        this.camera = new Camera();
        this.renderer = new Renderer();
        this.time = new Time();
        this.resources = new Resources(Assets);
        this.environment = new Environment();
        this.buttons = new Buttons();

        this.sizes.on("resize", () => {
            this.resize();
        });

        this.time.on("update", () => {
            this.update();
        });
    }

    resize() {
        this.camera.resize();
        this.renderer.resize();
    }

    update() {
        this.environment.update();
        this.camera.update();
        this.renderer.update();
    }
}