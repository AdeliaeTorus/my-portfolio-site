<template>
  <div class="container">
    <h1>{{$t("WorksContainer_statement")}}</h1>
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
    
  @include box-shadow_inset;
}

.contents {  
  @include contents_global;
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