<template>
  <div class="contents" id="skills">
    <h2 class="title">{{$t("ContentsSkills_title")}}</h2>
    <p>{{$t("ContentsSkills_skills")}}</p>
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