var scene = new THREE.Scene();
scene.background = new THREE.Color( 0x55555 );
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
var material = new THREE.MeshBasicMaterial( { color: 0xAAABff, wireframe : true } );
var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var triangleGeometry = new THREE.Geometry();
triangleGeometry.vertices.push(new THREE.Vector3(-2,0,0));
triangleGeometry.vertices.push(new THREE.Vector3(-2,2,0));
triangleGeometry.vertices.push(new THREE.Vector3(0,2,0));
triangleGeometry.vertices.push(new THREE.Vector3(0,0,0));
triangleGeometry.faces.push(new THREE.Face3(0, 1, 2));
triangleGeometry.faces.push(new THREE.Face3(2, 3, 0));

var mesh = new THREE.Mesh( triangleGeometry, material );  // create an object

scene.add( mesh ); // add object to the scene to make it visible

camera.position.z = 5;

var animate = function () {
    
    requestAnimationFrame( animate );
    renderer.render( scene, camera );
};

animate();