<template>
  <div class="contents" id="interests">
    <h2 class="title">{{$t("ContentsInterests_title")}}</h2>
    <p>{{$t("ContentsInterests_p-1")}}</p>
    <p>{{$t("ContentsInterests_p-2")}}</p>
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