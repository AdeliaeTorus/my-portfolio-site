<template>
  <div class="contents" id="self-introduction">
    <h1>{{$t("ContentsSelfintroduction_myname")}}</h1>            
    <p>{{$t("ContentsSelfintroduction_p-1")}}</p>
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