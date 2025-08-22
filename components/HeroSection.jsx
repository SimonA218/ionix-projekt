"use client";

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Plugin sa registruje iba raz, ideálne na úrovni modulu
gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  // Vytvoríme referenciu na <canvas> element, aby sme k nemu mali priamy prístup
  const canvasRef = useRef(null);

  // useEffect sa spustí po tom, ako sa komponent prvýkrát vykreslí
  useEffect(() => {
    // Ak z nejakého dôvodu canvas neexistuje, ukončíme funkciu
    if (!canvasRef.current) return;

    // --- INICIALIZÁCIA THREE.JS SCÉNY ---
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({
        canvas: canvasRef.current, // Použijeme referenciu namiesto querySelector
        antialias: true,
        alpha: true // Priehľadné pozadie
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // --- NASVIETENIE SCÉNY ---
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.5);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    // --- NAČÍTANIE 3D MODELU ---
    const loader = new GLTFLoader();
    let dronModel = null;
    const modelPath = '/models/dji_fpv_by_sdc_-__high_performance_drone.glb';

    loader.load(modelPath, (gltf) => {
        dronModel = gltf.scene;
        dronModel.scale.set(0.5, 0.5, 0.5);
        dronModel.position.set(0, 0, 0);
        scene.add(dronModel);
        // Animáciu nastavíme až po úspešnom načítaní modelu
        setupScrollAnimation();
    }, undefined, (error) => {
        console.error('Chyba pri načítaní modelu:', error);
    });

    // --- GSAP ANIMÁCIA ---
    function setupScrollAnimation() {
        // Vyčistíme predchádzajúce animácie, ak nejaké existovali
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        gsap.globalTimeline.clear();

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.hero-section',
                start: 'top top',
                end: 'bottom bottom',
                scrub: 1.5,
                pin: false,
                markers: false
            },
            defaults: {
                ease: 'power1.inOut'
            }
        });

        tl.to(camera.position, { z: 2.5, y: 0.6 }, "start");
        tl.to(dronModel.rotation, { y: Math.PI * 2 }, "start");
        tl.to(dronModel.position, { x: 3.5, y: -0.2 }, "end");
        tl.to(dronModel.rotation, { y: (Math.PI * 2) - (Math.PI / 3) }, "end");
        tl.to(camera.position, { x: 0, z: 7, y: 1.0 }, "end");
        tl.to(dronModel.scale, { x: 1.2, y: 1.2, z: 1.2 }, "end");
        tl.to(".hero-text", { opacity: 1 }, "-=0.5");
    }

    // --- ANIMAČNÁ SLUČKA A RESPONZIVITA ---
    const animate = () => {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        
        if (dronModel) {
            setupScrollAnimation();
        }
    };

    window.addEventListener('resize', handleResize);

    return () => {
        window.removeEventListener('resize', handleResize);
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []); 
  return (
    <section className="hero-section relative h-[300vh]">
      <div className="sticky-container sticky top-0 h-screen w-full overflow-hidden">
        <div className="absolute z-20 top-1/2 left-12 md:left-24 -translate-y-1/2 max-w-xl hero-text opacity-0 pointer-events-none">
          <h1 className="text-white font-extrabold text-5xl md:text-7xl leading-tight font-[Nunito]">
            Výkon a sloboda v tvojich rukách
          </h1>
          
          <p className="mt-6 text-gray-300 text-lg md:text-xl font-sans">
            Zaži slobodu letu, zachyť každý detail v <span className="text-blue-400 font-semibold">4K kvalite</span>.
          </p>
       <div className="mt-12 flex flex-wrap gap-6 pointer-events-auto">
  <a href="#explore" className="btn btn-primary">
    🔍 Odhaľ Všetky Detaily
  </a>
  <a href="#buy" className="btn btn-secondary">
    🛒 Kúpiť teraz
  </a>
</div>

        </div>
        <canvas ref={canvasRef} className="absolute top-0 left-0 z-10 h-full w-full"></canvas>
      </div>

    </section>
  );
};

export default HeroSection;