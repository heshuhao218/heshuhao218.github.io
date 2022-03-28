console.clear();

/* SETUP */
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  5000
);
camera.position.z = 500;

const renderer = new THREE.WebGLRenderer();
renderer.setPixelRatio(window.devicePixelRatio > 1 ? 2 : 1);
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

/* CONTROLS */
const controlsWebGL = new THREE.OrbitControls(camera, renderer.domElement);

/* PARTICLES */
// Get the Path in the DOM
const path = document.querySelector("path");
// Store the total length of the path
const length = path.getTotalLength();

// Empty array to store all vertices
const vertices = [];
// Loop along the path
for (let i = 0; i < length; i += 0.2) {
  // Get the coordinates of a point based on the index value
  const point = path.getPointAtLength(i);
  // Create a new vector at the coordinates
  const vector = new THREE.Vector3(point.x, -point.y, 0);
  // Randomize a little bit the point to make the heart fluffier
  vector.x += (Math.random() - 0.5) * 30;
  vector.y += (Math.random() - 0.5) * 30;
  vector.z += (Math.random() - 0.5) * 70;
  // Push the vector into the array
  vertices.push(vector);
}
// Create a new geometry from the vertices
const geometry = new THREE.BufferGeometry().setFromPoints(vertices);
// Define a pink material
const material = new THREE.PointsMaterial( { color: 0xee5282, blending: THREE.AdditiveBlending, size: 3 } );
// Create a Points mesh based on the geometry and material
const particles = new THREE.Points(geometry, material);
// Offset the particles in the scene based on the viewbox values
particles.position.x -= 600 / 2;
particles.position.y += 552 / 2;
// Add the particles in to the scene
scene.add(particles);

/* Animate the scene rotation */
gsap.fromTo(scene.rotation, {
  y: -0.3
}, {
  y: 0.3,
  repeat: -1,
  yoyo: true,
  ease: 'power2.inOut',
  duration: 3
});

/* RENDERING */
function render() {
  requestAnimationFrame(render);
  renderer.render(scene, camera);
}

/* EVENTS */
function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}
window.addEventListener("resize", onWindowResize, false);

requestAnimationFrame(render);