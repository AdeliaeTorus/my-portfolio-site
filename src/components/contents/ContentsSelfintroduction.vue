<template>
  <div class="contents" id="self-introduction">
    <h1>Keisuke Onoue</h1>            
    <p>
      I am a mathematics student at The Open University 
      (An university based in the United Kingdom, which provides online education).
    </p>
    <p>
      In my free time, I like listening to music and walking around town while looking at architectures and scenery there.
      In addition, I like degital content creation such as generative art using deep learning and 3D modeling using Blender.
      I am just a beginner, though.
    </p>
  </div>
</template>

<script>
export default {
  name: 'ContentsSelfintroduction'
}
</script>

<style lang="scss" scoped>
@import "../../styles/_mixins.scss";

p {
  @include p_text-indent;
}
</style>