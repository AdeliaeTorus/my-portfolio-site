<template>
  <div class="contents" id="interests">
    <h2 class="title">Interests</h2>
      <p>
        Concerning mathematics, I am interested in information geometry, 
        so now I am studying probability theory, mathematical statistics and differential geometry at my own pace. 
      </p>      
      <p>
        My interests in programming are analyzing data using statistics and machine learning 
        in relation to the fields of mathematics I am studying and front-end development, 
        especially creating unique websites using technologies such as WebGL.
      </p>
  </div>
</template>

<script>
export default {
  name: 'ContentsInterests'
}
</script>

<style lang="scss" scoped>
@import "../../styles/_mixins.scss";

p {
  @include p_text-indent;
}
</style>