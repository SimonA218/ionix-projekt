"use client";
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const canvasRef = useRef(null);
  const sectionRef = useRef(null);
  const mm = useRef(gsap.matchMedia());

  useEffect(() => {
    if (!canvasRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
      alpha: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.5);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    const loader = new GLTFLoader();
    let dronModel = null;
    const modelPath = '/models/dji_fpv_by_sdc_-__high_performance_drone.glb';

    loader.load(modelPath, (gltf) => {
      dronModel = gltf.scene;
      dronModel.scale.set(0.5, 0.5, 0.5);
      scene.add(dronModel);
      setupScrollAnimation();
    }, undefined, (error) => {
      console.error('Chyba pri načítaní modelu:', error);
    });

    function setupScrollAnimation() {
      mm.current.add({
        isDesktop: "(min-width: 768px)",
        isMobile: "(max-width: 767px)",
      }, (context) => {
        const { isDesktop } = context.conditions;
        
        if (isDesktop) {
          gsap.set(sectionRef.current, { height: '300vh' });
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top top',
              end: 'bottom bottom',
              scrub: 1.5,
            },
            defaults: { ease: 'power1.inOut' }
          });
          
          tl.to(camera.position, { z: 2.5, y: 0.6 }, "start");
          tl.to(dronModel.rotation, { y: Math.PI * 2 }, "start");
          tl.to(dronModel.position, { x: 3.5, y: -0.2 }, "end");
          tl.to(dronModel.rotation, { y: (Math.PI * 2) - (Math.PI / 3) }, "end");
          tl.to(camera.position, { x: 0, z: 7, y: 1.0 }, "end");
          tl.to(dronModel.scale, { x: 1.2, y: 1.2, z: 1.2 }, "end");
          tl.to(".hero-text-desktop", { opacity: 1 }, "-=0.5");
        }
        
        else {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: sectionRef.current,
      start: 'top top',
      end: '+=3000', // Dĺžka skrolovania v pixeloch
      scrub: 0.5,    // Plynulejšia odozva
      pin: true,
    },
    // 🔥 OPAVA: 'defaults' sa nastavuje ako vlastnosť priamo tu, nie ako funkcia
    defaults: { 
      ease: 'power1.inOut', 
      duration: 0.3 
    }
  });
  
  // FÁZA 1: Prílet a otočka dronu
  tl.from(camera.position, { z: 15 })
    .from(dronModel.scale, { x: 0.1, y: 0.1, z: 0.1 }, '<')
    .to(camera.position, { z: 7 })
    .to(dronModel.scale, { x: 0.7, y: 0.7, z: 0.7 }, '<')
    .to(dronModel.rotation, { y: Math.PI * 2 }, '<');

  // FÁZA 2: Odlet dronu + pozadie
  tl.to(dronModel.position, { y: 2.5, z: -15, duration: 0.4 }, '+=0.3')
    .to(dronModel.scale, { x: 0, y: 0, z: 0, duration: 0.4 }, '<')
    .to('.hero-mobile-bg', { opacity: 0.5, duration: 0.4 }, '<');

  // FÁZA 3: Text v strede obrazovky
  tl.fromTo('.hero-text-mobile', 
    { opacity: 0, y: 50 }, 
    { opacity: 1, y: 0, duration: 0.4, pointerEvents: 'auto' },
    '-=0.2'
  );

  // FÁZA 4: Plynulý fade-out textu na konci
  tl.to('.hero-text-mobile', { opacity: 0, y: -40, duration: 0.4 }, '>-0.5');
}


        return () => {
          ScrollTrigger.getAll().forEach(trigger => trigger.kill());
          gsap.set(sectionRef.current, { clearProps: "height" });
        }
      });
    }

    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      mm.current.revert();
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        
        {/* Desktop CTA */}
        <div className="absolute z-20 top-1/2 left-12 md:left-24 -translate-y-1/2 max-w-xl hero-text-desktop opacity-0 pointer-events-none hidden md:block">
          <h1 className="text-white font-extrabold text-5xl md:text-7xl leading-tight font-[Nunito]">
            Výkon a sloboda <br /> v tvojich rukách
          </h1>
          <p className="mt-6 text-gray-300 text-lg md:text-xl font-sans">
            Zaži slobodu letu, zachyť každý detail v <span className="text-brand-purple font-semibold">4K kvalite</span>.
          </p>
          <div className="mt-12 flex flex-wrap gap-6 pointer-events-auto">
            <a href="#produkty" className="btn btn-primary">🔍 Odhaľ Detaily</a>
            <a href="#buy" className="btn btn-secondary">🛒 Kúpiť teraz</a>
          </div>
        </div>

        {/* Mobile CTA - 🔥 upravené do stredu + 2 tlačidlá */}
        <div className="absolute z-20 inset-0 flex flex-col items-center justify-center p-6 text-center hero-text-mobile opacity-0 pointer-events-none md:hidden">
          <h1 className="text-white font-extrabold text-4xl leading-tight font-[Nunito]">
            Výkon a sloboda <br /> v tvojich rukách
          </h1>
          <p className="mt-6 text-gray-300 text-base">
            Zaži slobodu letu, zachyť každý detail v <span className="text-brand-purple font-semibold">4K kvalite</span>.
          </p>
          <div className="mt-10 w-full max-w-xs flex flex-col gap-4">
            <a 
              href="#produkty" 
              className="btn btn-primary w-full"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#produkty')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              🔍 Odhaľ Detaily
            </a>
            <a 
              href="#buy" 
              className="btn btn-secondary w-full"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#buy')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              🛒 Kúpiť teraz
            </a>
          </div>
        </div>
        
        {/* Canvas */}
        <canvas ref={canvasRef} className="absolute top-0 left-0 z-10 h-full w-full"></canvas>
      </div>
    </section>
  );
};

export default HeroSection;
