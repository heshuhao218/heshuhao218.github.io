


let camera3D, scene, renderer, cube, sphere, earthmesh, earthtexture;
let dir = 0.001;
let dir2 = 0.0004;
let dir3 = 0.0008


init3D();

function init3D() {


    scene = new THREE.Scene();
    camera3D = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1200);

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const geometry = new THREE.SphereGeometry(2,50,50);
    let texture= new THREE.TextureLoader().load("earth2.jpeg");
    let eMaterial = new THREE.MeshBasicMaterial({ map: texture });

    sphere = new THREE.Mesh(geometry, eMaterial);
    scene.add(sphere);

    const geometry2 = new THREE.SphereGeometry(0.7,40,40);
    let texture2= new THREE.TextureLoader().load("mercury.jpeg");
    let eMaterial2 = new THREE.MeshBasicMaterial({ map: texture2 });

    mercury = new THREE.Mesh(geometry2, eMaterial2);
   
    scene.add(mercury);

    const geometry3 = new THREE.SphereGeometry(0.3,40,40);
    let texture3= new THREE.TextureLoader().load("jupiter.jpeg");
    let eMaterial3 = new THREE.MeshBasicMaterial({ map: texture3 });

    jupiter = new THREE.Mesh(geometry3, eMaterial3);
   
    scene.add(jupiter);


    const geometry4 = new THREE.SphereGeometry(0.5,30,30);
    let texture4= new THREE.TextureLoader().load("neptune.jpeg");
    let eMaterial4 = new THREE.MeshBasicMaterial({ map: texture4 });

    neptune = new THREE.Mesh(geometry4, eMaterial4);
   
    scene.add(neptune);
   

   let bgGeometery = new THREE.SphereGeometry(500, 32, 32);
   // let bgGeometery = new THREE.CylinderGeometry(725, 725, 1000, 10, 10, true)
    bgGeometery.scale(-1, 1, 1);
    // has to be power of 2 like (4096 x 2048) or(8192x4096).  i think it goes upside down because texture is not right size
    //let panotexture = new THREE.TextureLoader().load("itp.jpg");
    let panotexture = new THREE.TextureLoader().load("space.jpeg");
    
    // var material = new THREE.MeshBasicMaterial({ map: panotexture, transparent: true,   alphaTest: 0.02,opacity: 0.3});
    let backMaterial = new THREE.MeshBasicMaterial({ map: panotexture });
    
    let back = new THREE.Mesh(bgGeometery, backMaterial);
    scene.add(back);

    moveCameraWithMouse();

    camera3D.position.z = 5;
    animate();


function animate() {
    requestAnimationFrame(animate);

    sphere.rotation.x += dir;
    sphere.rotation.y += dir;
    sphere.rotation.z += dir;
  
    if (sphere.scale.x > 2 || sphere.scale.x < -2) {
        dir = -dir;
    }
    mercury.position.y = 2;
    mercury.position.z = 3;
    //mercury.position.y += sphere.position.x + 0.02
    console.log(mercury.position.y)
    mercury.rotation.x += dir3;
    mercury.rotation.y += dir3;
    mercury.rotation.z += dir3;
  

    if (mercury.scale.x > 2 || mercury.scale.x < -2) {
        dir = -dir;
    }


    jupiter.position.x = 2;
    jupiter.position.y = 2.5;
    //mercury.position.y += sphere.position.x + 0.02
    jupiter.rotation.x += dir2;
    jupiter.rotation.y += dir2;
    jupiter.rotation.z += dir2;
  

    if (jupiter.scale.x > 2 || jupiter.scale.x < -2) {
        dir = -dir;
    }

    neptune.position.x = 3;
    neptune.position.z = -2;
    neptune.position.y = -2;
    //mercury.position.y += sphere.position.x + 0.02
    neptune.rotation.x += dir;
    neptune.rotation.y += dir;
    neptune.rotation.z += dir;
  

    if (neptune.scale.x > 2 || neptune.scale.x < -2) {
        dir = -dir;
    }
    
    back.rotation.x += dir2;
    back.rotation.y += dir2;
    back.rotation.z += dir2;
    if (back.scale.x > 2 || back.scale.x < -2) {
        dir = -dir;
    }
    renderer.render(scene, camera3D);

 
    
}



/////MOUSE STUFF

var onMouseDownMouseX = 0, onMouseDownMouseY = 0;
var onPointerDownPointerX = 0, onPointerDownPointerY = 0;
var lon = -90, onMouseDownLon = 0;
var lat = 0, onMouseDownLat = 0;
var isUserInteracting = false;


function moveCameraWithMouse() {
    document.addEventListener('keydown', onDocumentKeyDown, false);
    document.addEventListener('mousedown', onDocumentMouseDown, false);
    document.addEventListener('mousemove', onDocumentMouseMove, false);
    document.addEventListener('mouseup', onDocumentMouseUp, false);
    document.addEventListener('wheel', onDocumentMouseWheel, false);
    window.addEventListener('resize', onWindowResize, false);
    camera3D.target = new THREE.Vector3(0, 0, 0);
}

function onDocumentKeyDown(event) {
    //if (event.key == " ") {
    //in case you want to track key presses
    //}
}

function onDocumentMouseDown(event) {
    onPointerDownPointerX = event.clientX;
    onPointerDownPointerY = event.clientY;
    onPointerDownLon = lon;
    onPointerDownLat = lat;
    isUserInteracting = true;
}

function onDocumentMouseMove(event) {
    if (isUserInteracting) {
        lon = (onPointerDownPointerX - event.clientX) * 0.1 + onPointerDownLon;
        lat = (event.clientY - onPointerDownPointerY) * 0.1 + onPointerDownLat;
        computeCameraOrientation();
    }
}

function onDocumentMouseUp(event) {
    isUserInteracting = false;
}

function onDocumentMouseWheel(event) {
    camera3D.fov += event.deltaY * 0.05;
    camera3D.updateProjectionMatrix();
}

function computeCameraOrientation() {
    lat = Math.max(- 30, Math.min(30, lat));  //restrict movement
    let phi = THREE.Math.degToRad(90 - lat);  //restrict movement
    let theta = THREE.Math.degToRad(lon);
    camera3D.target.x = 100 * Math.sin(phi) * Math.cos(theta);
    camera3D.target.y = 100 * Math.cos(phi);
    camera3D.target.z = 100 * Math.sin(phi) * Math.sin(theta);
    camera3D.lookAt(camera3D.target);
}


function onWindowResize() {
    camera3D.aspect = window.innerWidth / window.innerHeight;
    camera3D.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    console.log('Resized');
}

}