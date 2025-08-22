gsap.registerPlugin(ScrollTrigger);
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

camera.position.z = 5;

const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#webgl-canvas'),
    antialias: true,
    alpha: true
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
const loader = new THREE.GLTFLoader();
let dronModel = null;
const modelPath = '/models/dji_fpv_by_sdc_-__high_performance_drone.glb'; // Uistite sa, že model je v zložke /public/Pics

loader.load(modelPath, (gltf) => {
    dronModel = gltf.scene;
    dronModel.scale.set(0.5, 0.5, 0.5);
    dronModel.position.set(0, 0, 0);
    scene.add(dronModel);
    setupScrollAnimation();
}, undefined, (error) => {
    console.error('Chyba pri načítaní modelu:', error);
});

// --- GSAP ANIMÁCIA ---
function setupScrollAnimation() {
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
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();

window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    
    if (dronModel) {
        setupScrollAnimation();
    }
});