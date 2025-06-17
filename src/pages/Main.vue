<template>
  <div class="min-h-screen bg-gray-50">

    <navBar/>

    <welcomeSection/>

    <expSection/>

    <skillSection/>

    <footerHome/>
  </div>
</template>

<script setup lang="ts">

import footerHome from '../components/footerHome.vue'
import skillSection from '../components/skillSection.vue'
import expSection from '../components/ExpSection.vue'
import welcomeSection from '../components/WelcomeSection.vue'
import navBar from '../components/navBar.vue'

</script>

<style scoped>
/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Transições suaves */
.transition-shadow {
  transition: box-shadow 0.2s ease-in-out;
}

.hover\:shadow-md:hover {
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}
</style>