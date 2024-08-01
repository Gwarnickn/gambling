import React, { Component, useState } from "react";
import * as THREE from 'three';
import './spinning-roulette.scss';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'; 
interface SpinningRouletteProps{
    isLoading: string;
}

class SpinningRoulette extends Component<{},SpinningRouletteProps>{ 
    private containerRef: React.RefObject<HTMLDivElement>;
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
        this.containerRef = React.createRef<HTMLDivElement>();
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
        light.name = "light";
        this.scene.add(light);
        // const geometry = new THREE.BoxGeometry( 1, 1, 1 );
        // const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
        // const cube = new THREE.Mesh( geometry, material );
        // this.scene.add( cube );
        // const fbxLoader = new FBXLoader;
        // fbxLoader.load(
        //     'models/RouletteModel/source/roulette_spin2.fbx',
        //     (object) => {
        //         object.position.y = 10;
        //         this.scene.add(object)
            
        // })
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
        this.camera.position.z = 3.5;
        this.containerRef.current?.appendChild(this.renderer.domElement);
        const animate = () => {
            requestAnimationFrame(animate);
            this.renderer.render(this.scene, this.camera);
            // cube.rotation.x += 0.01;
            // cube.rotation.y += 0.01;
            // cube.material.color = new THREE.Color(document.documentElement.style.getPropertyValue('--g-primary'));
            this.scene.rotation.y += 0.0025;
            //this.rouletteSpin.position.y += 0.001;
        };
        animate();
    }

    componentWillUnmount() {
        this.containerRef.current?.removeChild(this.renderer.domElement);
    }

    render() {
        return <div className={`spinning-roulette loaded-${this.state.isLoading}`}>
            <div className="spinning-roulette-model3D" ref={this.containerRef}/>
            <div className="spinning-roulette-loading">{this.state.isLoading}%</div>
        </div>
    }
    
}
export default (SpinningRoulette)
