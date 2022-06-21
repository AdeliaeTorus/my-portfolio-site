<template>  
  <div @click='colorSwitch'></div>
</template>

<script>
export default {
  name: 'ColorTheme',
  methods: {
    colorSwitch: () => {
      const isDark = document.documentElement.classList.contains('dark');
      isDark ? document.documentElement.classList.remove('dark') : document.documentElement.classList.add('dark');
      
    }
  }
}

if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  document.documentElement.classList.add('dark');
}
</script>

<style lang="scss" scoped>
@import "../../styles/_variables.scss";

div {
  top: calc((100% - 33px)/2);

  position: absolute;
  height: 30px;
  width: 45px;
  border-radius: 0px;
  border: inset var(--sub-color);
  color: var(--main-color);
  background: var(--sub-color);
  text-align: center;
  cursor: pointer;
  transition-duration: 0.4s;

  &:hover {
    transform: scale(1.1);
  }
  
  &::before {
    content: var(--toggle-button);
  }
}





</style>