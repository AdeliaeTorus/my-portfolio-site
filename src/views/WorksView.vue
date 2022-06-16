<template>
  <div class="works">
    <TheHeader />
    <WorksContainer />
    <TheFooter />  
  </div>
</template>

<script>
// @ is an alias to /src
import TheHeader from '@/components/TheHeader.vue'
import WorksContainer from '@/components/WorksContainer.vue'
import TheFooter from '@/components/TheFooter.vue'

export default {
  name: 'HomeView',
  components: {
    TheHeader,
    WorksContainer,
    TheFooter
  }
}
</script>

