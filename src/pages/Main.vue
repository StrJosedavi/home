<template>
  <div class="min-h-screen">

    <navBar/>

    <welcomeSection/>

    <expSection/>

    <skillSection/>

    <recommendationsSection/>

    <footerHome/>
  </div>
</template>

<script setup lang="ts">

import footerHome from '../components/footerHome.vue'
import skillSection from '../components/skillSection.vue'
import expSection from '../components/ExpSection.vue'
import welcomeSection from '../components/WelcomeSection.vue'
import recommendationsSection from '../components/recommendationsSection.vue'
import navBar from '../components/navBar.vue'

</script>

<style scoped>

</style>