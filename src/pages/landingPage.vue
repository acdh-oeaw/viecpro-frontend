// landing page, should be the default route on loading the app. // reachable
via the home navlink in the main navbar and by clicking on the viecpro logo in
the main navbar
<script setup lang="ts">
import { onBeforeMount, ref, watch } from "vue";

//section components
import welcomeSection from "./landing-page-sections/welcomeSection.vue";
import databaseSection from "./landing-page-sections/databaseSection.vue";
import contactSection from "./landing-page-sections/contactSection.vue";
import documentationSection from "./landing-page-sections/documentationSection.vue";


</script>

<template>
  <div class="min-h-screen mt-20 flex-col lg:mx-80">
    <welcomeSection></welcomeSection>
    <databaseSection></databaseSection>
    <documentationSection></documentationSection>
    <contactSection></contactSection>
  
  </div>
 
</template>
<style scoped>
div.main-container {
  padding-top: 5rem;
}

h1,
p {
  margin: 0 20rem;
}

h1 {
  margin-bottom: 2rem;
  margin-top: 4rem;
  @apply text-gray-600;
}

#header-viecpro {
  @apply text-black;
}

p {
  padding-left: 4rem;
  @apply text-gray-600;
}

h1 {
  @apply text-4xl text-primary-600 mb-4;
}

p {
  @apply mb-5;
}
h2 {
  @apply text-2xl text-primary-600 mb-4;
}
</style>
