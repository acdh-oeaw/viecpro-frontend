// landing page, should be the default route on loading the app. // reachable via the home navlink
in the main navbar and by clicking on the viecpro logo in the main navbar
<script setup lang="ts">
import { onBeforeMount, ref, watch } from 'vue';

//section components
import WelcomeSection from './landing-page-sections/WelcomeSection.vue';
import DatabaseSection from './landing-page-sections/DatabaseSection.vue';
import ContactSection from './landing-page-sections/ContactSection.vue';
import DocumentationSection from './landing-page-sections/DocumentationSection.vue';
import ViecproSection from './landing-page-sections/ViecproSection.vue';


function scrollToTop(){
  window.scrollTo(0, 0);

}

scrollToTop()
</script>

<template>
  <div class="w-full h-2 bg-primary-600"></div>

  <img src="/src/assets/images/homeBackground.jpeg" alt="" class="w-full" />
  <div class="w-full h-2 bg-primary-400"></div>
  <div class="text-primary-100 text-center text-5xl font-black mt-20 flex justify-center mx-auto">
    <span class="pr-2">Der Wiener Hof.</span>
    <span class="font-light"> Ein prosopographisches Portal</span>
  </div>
  <div class="min-h-screen mb-60">
    <div class="mt-20 flex-col max-w-[50rem] mx-auto">
      <WelcomeSection></WelcomeSection>

      <ViecproSection class="bg-gray-100 rounded-lg p-8"></ViecproSection>

    </div>
    <div class="mx-auto flex justify-between max-w-[80rem] space-x-20 border-t-4 border-gray-200 mt-32 pt-10">
      <DatabaseSection></DatabaseSection>
      <DocumentationSection></DocumentationSection>
    </div>
    <div class="mx-auto flex justify-between max-w-[80rem] space-x-20 border-b-4 border-gray-200 mt-10 pb-24 pl-20 pr-80">
      <button class="bg-gray-300  rounded px-4 py-2 text-gray-600 hover:bg-gray-400 hover:text-gray-800  mt-10 uppercase font-regular"  @click="$router.push('/search/Person')">{{ $t('pages.landing-page.viecpro.link-database') }}</button>
      <button class="bg-gray-300  rounded px-4 py-2 text-gray-600 hover:bg-gray-400 hover:text-gray-800  mt-10 uppercase font-regular" @click="$router.push('/about')">Zur Dokumentation</button>

    </div>
    <div class="mx-auto max-w-[50rem] mt-28">
      <ContactSection></ContactSection>
</div>
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
