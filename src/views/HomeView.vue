<template>
  <div class="home">
    <TheHeader />
    <HomeContainer />
    <TheFooter />
    <CursorDecoration />
  </div>
</template>

<script>
// @ is an alias to /src
import TheHeader from '@/components/TheHeader.vue'
import HomeContainer from '@/components/HomeContainer.vue'
import TheFooter from '@/components/TheFooter.vue'
import CursorDecoration from '@/components/functionalities/CursorDecoration.vue'

export default {
  name: 'HomeView',
  components: {
    TheHeader,
    HomeContainer,
    TheFooter,
    CursorDecoration
  }
}
</script>



