// landing page, should be the default route on loading the app. // reachable
via the home navlink in the main navbar and by clicking on the viecpro logo in
the main navbar
<script setup lang="ts">
import { onBeforeMount, ref, watch } from "vue";

//section components
import WelcomeSection from "./landing-page-sections/WelcomeSection.vue";
import DatabaseSection from "./landing-page-sections/DatabaseSection.vue";
import ContactSection from "./landing-page-sections/ContactSection.vue";
import DocumentationSection from "./landing-page-sections/DocumentationSection.vue";


</script>

<template>
  <div class="min-h-screen mt-20 flex-col lg:mx-80">
    <WelcomeSection></WelcomeSection>
    <DatabaseSection></DatabaseSection>
    <DocumentationSection></DocumentationSection>
    <ContactSection></ContactSection>
  
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
