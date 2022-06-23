<template>
  <footer>
    <small>{{$t("TheFooter_copyright")}}</small>
  </footer>
</template>

<script>
export default {
  name: 'TheFooter'
}
</script>

<style lang="scss" scoped>
@import "../styles/_mixins.scss";

footer {
  width: 100%;
  height: 4%;
  position: absolute;
  position: fixed;
  bottom: 0%;
  left: 0%;
  display: flex;
  justify-content: center;
  align-items: center;
}


/*
Responsive
================================================ */
@media (max-height: 850px) {
  footer {
    @include responsive_footer_height;
  }
}
</style>