<template>
  <div class="container">
    <h1>Sorry. Please wait until I upload some of my works.</h1>
  </div>
</template>

<script>
export default {
  name: 'WorksContainer',
}
</script>

<style lang="scss" scoped>
@import "../styles/_variables.scss";
@import "../styles/_mixins.scss";

.container {
  width: 90%;
  height: 90%;
  position: absolute;
  position: fixed;
  overflow: auto;
  top: 6%;
  right: 5%;
  border-radius: 10px;
    
  @include box-shadow_light_inset;
}

.contents {  
  @include contents_global;
}




/*
Dark theme
===================================== */
@media (prefers-color-scheme: dark) {
  .container {
    @include box-shadow_dark_inset;
  }

  .contents {
    @include box-shadow_dark
  }
}



/*
Responsive
================================================ */
@media (min-width: calc(7000px / 9)) {
  .container {
    @include responsive_container_width;
  }
}

@media (max-height: 850px) {
  .container {
    @include responsive_container_height;
  }
}

</style>