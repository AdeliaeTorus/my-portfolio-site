<template>
  <div class="contents" id="hero">
    <div id="screen"></div>
  </div>
</template>

<script>
export default {
  name: "ContentsHero",
}

// import * as THREE from 'three'

// window.addEventListener('DOMContentLoaded', init);

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

  background-color: rosybrown;

  overflow: hidden;
  height: 100%;
  width: 100%;

}
</style>
