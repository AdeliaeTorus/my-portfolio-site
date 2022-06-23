<template>  
  <div @click='changeLocale'>{{$t("ChangeLang_change-locale")}}</div>
</template>

<script>
export default {
  name: 'ChangeLang',
  methods: {
    changeLocale() {
      this.$emit('change-locale');
    }
  }
}
</script>

<style lang="scss" scoped>


div {
  top: calc((100% - 28px)/2);
  
  left: 0;
  position: absolute;
  height: 25px;
  width: 35px;
  border-radius: 0px;
  border-bottom: dashed var(--sub-color);
  color: var(--sub-color);
  background: var(--main-color);
  text-align: center;
  cursor: pointer;
  transition-duration: 0.4s;

  &:hover {
    transform: scale(1.1);
  }
  
  &::before {
    
  }
}


</style>