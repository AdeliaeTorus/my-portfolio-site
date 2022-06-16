<template>
  <header>
    <div class="header-content">
      <div class="header-text">
        <p class="underlined"><router-link to="/">Keisuke Onoue</router-link></p>
      </div>
      <div class="header-buttons">
        <ColorTheme />
        <HamburgerMenu />
      </div>
    </div>
  </header>
</template>

<script>
import ColorTheme from './functionalities/ColorTheme.vue'
import HamburgerMenu from './functionalities/HamburgerMenu.vue'

export default {
  name: 'TheHeader',
  components: {
    ColorTheme,
    HamburgerMenu
  }
}
</script>

<style lang="scss" scoped>
@import "../styles/_variables.scss";
@import "../styles/_mixins.scss";


header {

  width: 100%;
  height: 6%;
  position: absolute;
  position: fixed;
  top: 0%;
  left: 0%;  
  z-index: 40;

  & > .header-content {

    height: 100%;
    padding: 0 5%;
    margin: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;

    & > .header-text > p {

      font-weight: bold;
      font-size: 150%;
    }

    & > .header-buttons {

      position: relative;
      height: 100%;
      width: 100px;
      display: flex;
      justify-content: space-between;
    }
  }
}






/*
Responsive
================================================ */
@media (min-width: calc(7000px / 9)) {
  header > .header-content {
    @include responsive_header_width;
  }
}

@media (max-height: 850px) {
  header {
    @include responsive_header_height;
  }
}

</style>