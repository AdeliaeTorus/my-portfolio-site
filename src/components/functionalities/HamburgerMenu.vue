<template>
  <div class="hamburger-menu">
    <!-- button -->
    <div class="hamburger-btn" @click="ActiveBtn=!ActiveBtn">
      <span class="line line-01" :class="{'btn-line-01':ActiveBtn}"></span>
      <span class="line line-02" :class="{'btn-line-02':ActiveBtn}"></span>
      <span class="line line-03" :class="{'btn-line-03':ActiveBtn}"></span>
    </div>
    <!-- side bar -->
    <transition name="menu">
      <div class="menu" v-show="ActiveBtn">
        <ul>
          <li class="underlined-reverse"><router-link to="/">Top</router-link></li>
          <li class="underlined-reverse"><router-link to="#works">Works</router-link></li>
          <li class="underlined-reverse"><router-link to="#contact">Contact</router-link></li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'HamburgerMenu',
  data: () => {
    return {
      ActiveBtn: false
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../styles/_variables.scss";
@import "../../styles/_mixins.scss";
@import "../../styles/global.scss";


/*
hamburger-button
========================================== */
.hamburger-menu {

  position: absolute;
  right: 0;
  top: calc((100% - 33px)/2);
  height: 33px;
  width: 35px;
}

.hamburger-btn {
  background-color: var(--main-color);

  position: relative;
  border: none;
  height: 100%;
  width: 100%;
  cursor: pointer;
  z-index: 50;
  border-radius: 5px;

  & > .line {
    position: absolute;
    background-color: var(--sub-color);
    top: 0;
    height: 3px;
    width: 35px;
  }

  & > .line-01 {
    top: 0;
  }

  & > .line-02 {
    top: 15px;
  }

  & > .line-03 {
    top: 30px;
  }
}


.btn-line-01 {
  transform:  translateY(15px) rotate(-405deg);
  @include transition_general;
}

.btn-line-02 {
  opacity: 0;
}

.btn-line-03 {
  transform: translateY(-15px) rotate(45deg);
  @include transition_general;
}



/*
side bar
===================================== */
.menu-enter-active, .menu-leave-active {
  transition: 0s;
}
.menu-enter, .menu-leave-to {
  opacity: 0;
}
.menu-leave, .menu-enter-to{
  opacity: 1;
}


.menu {
  opacity: 0.9;
  color: var(--main-color);
  background-color: var(--sub-color);
  z-index: 30;
  padding: 2rem 1rem;
  position: fixed;
  width: 20rem;
  height: 100%;
  top: 0;
  right: 0;
}

.menu ul{
  margin: 1rem;
  padding: 0;
}

.menu li {
  list-style: none;
  line-height: 1;
  padding: 1rem;
  font-size: 1.1rem;
}

.menu a {
  color: var(--main-color);
  text-decoration: none;
}





/*
Responsive
================================================ */
@media (min-width: calc((7000px / 9) + 550px)) {
  .menu {
    width: calc((100% - 700px)/2);
  }
}



</style>
