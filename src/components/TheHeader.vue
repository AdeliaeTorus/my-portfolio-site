<template>
  <header>
    <div class="header-content">
      <div class="header-text">
        <!-- <p class="underlined"><router-link to="/">{{$t("TheHeader_myname")}}</router-link></p> -->
        <p class="underlined"><a href="/my-portfolio-site/#/">{{$t("TheHeader_myname")}}</a></p>
      </div>
      
      <div class="header-buttons">
        <ChangeLang @change-locale="changeLocale"/>
        <ColorTheme />
        <HamburgerMenu />
      </div>
    </div>
  </header>
</template>

<script>

import ChangeLang from './functionalities/ChangeLang.vue'
import ColorTheme from './functionalities/ColorTheme.vue'
import HamburgerMenu from './functionalities/HamburgerMenu.vue'

export default {
  name: 'TheHeader',
  components: {
    ColorTheme,
    HamburgerMenu,
    ChangeLang
  },
  methods: {
    changeLocale() {
      this.$i18n.locale = (this.$i18n.locale === 'ja') ? 'en' : 'ja';
    }
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
     // background-color: aquamarine;

      position: relative;
      height: 100%;
      width: 150px;
      display: flex;
      justify-content: space-evenly;
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