<template>
  <div class="contents" id="skills">
    <h2 class="title">Skills</h2>
    <p>Python / JavaScript / HTML / CSS / LaTeX</p>
  </div>
</template>

<script>
export default {
  name: 'ContentsSkills'
}
</script>

<style lang="scss" scoped>
@import "../../styles/_mixins.scss";

p {
  @include p_text-indent;
}
</style>