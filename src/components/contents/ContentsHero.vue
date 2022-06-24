<template>
  <div class="contents" id="hero">
    <div id="screen"></div>
  </div>
</template>

<script>
import * as THREE from "three";
//import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
//import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { onMounted } from '@vue/runtime-core';


// lifecycle hooks rendering test
import { onBeforeMount } from '@vue/runtime-core';
import { onBeforeUpdate } from '@vue/runtime-core';
import { onUpdated } from '@vue/runtime-core';
import { onBeforeUnmount } from '@vue/runtime-core';
import { onUnmounted } from '@vue/runtime-core';



export default {
  setup() {
    const scene = new THREE.Scene();
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    const geometry = new THREE.BoxGeometry( 1, 1, 1 );
    const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    const cube = new THREE.Mesh( geometry, material );



    // lifecycle hooks rendering test 
    onBeforeMount(() => {
      console.log('onBeforeMount...');
    });
    onMounted(() => {
      console.log('onMounted...');
    });
    onBeforeUpdate(() => {
      console.log('onBeforeUpdate...');
    });
    onUpdated(() => {
      console.log('onUpdated...');
    });
    onBeforeUnmount(() => {
      console.log('onBeforeUnmount...');
    });
    onUnmounted(() => {
      console.log('onUnmounted...');
    });




    
    onMounted(() => {
      const target = document.getElementById('screen');
      let width = target.clientWidth;
      let height = target.clientHeight;

      const camera = new THREE.PerspectiveCamera( 75, width / height, 0.1, 1000 );
      camera.position.z = 2;

      renderer.setSize( width, height );
      document.getElementById("screen").appendChild( renderer.domElement );
      
      scene.add( cube );
      
      function animate() {
        requestAnimationFrame( animate );

        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;

        renderer.render( scene, camera);
      }

      function onWindowResize() {
        width = target.clientWidth;
        height = target.clientHeight;

        camera.aspect = width / height;
        camera.updateProjectionMatrix();

        renderer.setSize( width, height );
      }

      animate();

      onWindowResize();
      addEventListener('resize', onWindowResize);
    })
  }
}
</script>


<style lang="scss" scoped>
#hero {
  height: 30%;
}

#screen {
  margin: 0;
  padding: 0;

  /* 
  background-color: rosybrown;
  */

  overflow: hidden;
  height: 100%;
  width: 100%;

}
</style>
