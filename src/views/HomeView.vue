<template>
  <div class="home">
    <TheHeader />
    <HomeContainer />
    <TheFooter />
  </div>
</template>

<script>
// @ is an alias to /src
import TheHeader from '@/components/TheHeader.vue'
import HomeContainer from '@/components/HomeContainer.vue'
import TheFooter from '@/components/TheFooter.vue'

export default {
  name: 'HomeView',
  components: {
    TheHeader,
    HomeContainer,
    TheFooter
  }
}
</script>



