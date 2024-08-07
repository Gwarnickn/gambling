import React, { Component, useState } from "react";
import * as THREE from 'three';
import './spinning-roulette.scss';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'; 

interface SpinningRouletteProps{
    isLoading: string;
}

class SpinningRoulette extends Component<{},SpinningRouletteProps>{ 
    private container: React.RefObject<HTMLDivElement>;
    private scene: THREE.Scene;
    private renderer: THREE.WebGLRenderer;
    private camera: THREE.PerspectiveCamera;
    private rouletteSpin: THREE.Object3D;
    private loadingManager: THREE.LoadingManager;

    private width = 400;
    private height = 400;

    constructor(props: SpinningRoulette) {
        super(props);
        this.state = {
            isLoading: '0', 
        };
        this.container = React.createRef<HTMLDivElement>();
        this.scene = new THREE.Scene();
        this.renderer = new THREE.WebGLRenderer();
        this.camera = new THREE.PerspectiveCamera();
        this.rouletteSpin = new THREE.Object3D();
        this.loadingManager = new THREE.LoadingManager();
    }

    setIsLoading = (newValue: string) => {
        this.setState({ isLoading: newValue });
    }

    componentDidMount() {
        this.scene = new THREE.Scene();
        const light = new THREE.AmbientLight("#ffffff",1);

        this.scene.add(light);
        this.loadingManager.onProgress = async (url, loaded, total) => {
            this.setIsLoading(`${loaded / total * 100}`);
            console.log(`${loaded / total * 100}`);
        };
        const loader = new GLTFLoader(this.loadingManager);
        loader.load(
            "models/RouletteModel/source/roulette_spin-gltf.gltf",
            (object) => {
                object.scene.rotation.x = 0.50;
                object.scene.position.y = 0;
                this.rouletteSpin = object.scene;
                this.scene.add(this.rouletteSpin);
            },
        )
        

        this.renderer = new THREE.WebGLRenderer({alpha: true});
        this.renderer.setSize(this.width, this.height);

        this.camera = new THREE.PerspectiveCamera(45, this.width / this.height, 0.1, 1000);

        this.camera.position.z = 3.25;
        this.container.current?.appendChild(this.renderer.domElement);
        const animate = () => {
            requestAnimationFrame(animate);
            this.renderer.render(this.scene, this.camera);
            this.scene.rotation.y += 0.0025;
            light.intensity = document.body.className === "light-theme" ? 4 : 1;
        };
        animate();
    }

    componentWillUnmount() {
        this.container.current?.removeChild(this.renderer.domElement);
    }

    render() {
        return <div className={`spinning-roulette loaded-${this.state.isLoading}`}>
            <div className="spinning-roulette-model3D" ref={this.container}/>
            <div className="spinning-roulette-loading">{this.state.isLoading}%</div>
        </div>
    }
    
}
export default (SpinningRoulette)
