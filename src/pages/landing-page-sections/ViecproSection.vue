<script setup lang="ts">
import { ref, watch, onBeforeMount, onMounted } from 'vue';

const props = defineProps([]);
const textBase = ref('pages.landing-page.viecpro.');
</script>
<template>
  <div class="mt-10">
    <h1 class=" text-primary-100 text-left">VieCPro</h1>
    <p class="mt-2">
      ... ist ein <strong>Gemeinschaftsprodukt zweier Forschungsteams</strong>, die vom
      <a href="https://www.oeaw.ac.at/foerderungen/innovationsfonds">ÖAW-Innovationsfonds</a>
      (09/2020–03/2023) und dem Wissenschaftsfonds
      <a href="https://www.fwf.ac.at/de/)">FWF</a> (09/2020–06/2024) in
      <strong>einer ersten Pilotphase</strong> gefördert wurde.
    </p>
    <!-- <div class="flex-col w-fit p-4 mx-auto">
      <span class="mb-2 flex justify-between w-full">
        <label for="" class="text-primary-100 font-regular">Sucheinstieg: </label>
        <button class="rounded btn-dummy w-fit text-sm ml-4">
          Datenbank <i class="fa-solid fa-square-up-right ml-2"></i></button
      ></span>
      <span>
        <label for="" class="text-primary-100 font-regular"> Mehr über das Projekt:</label>
        <button class="btn-dummy w-fit text-sm ml-4 py-1">
          Materialien und Dokumentation <i class="fa-solid fa-square-up-right ml-2"></i></button
      ></span>
    </div>

    <p>
      <span class="font-regular text-center mt-4"> {{ $t(textBase + 'aufbau') }}</span>
    </p> -->

    <!-- slot for additional content -->
    <slot></slot>
  </div>
</template>
<style scoped>

strong{
    @apply font-regular;
}
.ul-wrapper {
  @apply pl-4;
}

ul {
  @apply pl-5;
}
h1,
h2,
h3 {
  @apply text-3xl font-black;
}
p {
  @apply py-2 pl-4;
}
li {
  @apply list-disc list-outside pl-4;
}

span {
  @apply block;
}
</style>
