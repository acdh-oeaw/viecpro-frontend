<script setup lang="ts">
import { ref, watch, onBeforeMount, onMounted } from 'vue';

const props = defineProps([]);
const textBase = ref('pages.landing-page.viecpro.');
</script>
<template>
  <div class="">
    <h1 class=" text-primary-100 text-center">Der Wiener Hof. Ein prosopographisches Portal</h1>
    <p>
      VieCPro liefert erstmals <strong>tausende prosopographische Profile</strong> für die
      überwiegende <strong>Mehrheit des Wiener Hofpersonals</strong> . Gegenwärtig ermöglicht die
      Datenbank die Recherche des Personals beiderlei Geschlechts wie auch verschiedener sozialer
      Schichten des Wiener Haupthofstaats von
      <strong
        >neun Kaisern und der Teilhofstaate von 14 Kaiserinnen, sechs Kaiserinwitwen, 70 Erzherzögen
        und Erzherzoginnen und weiterer Familienmitglieder</strong
      >
      von der Mitte des 17. Jahrhunderts bis zum Ende des 18. Jahrhunderts. Für die
      <strong>leopoldinische Zeit</strong>
      umfasst der Personenbestand darüber hinaus erstens zahlreiche Funktionsträger:innen, die am
      Wiener Hof politisch-administrative Aufgaben und eine ökonomisch-kulturelle Rolle erfüllt
      haben, zweitens Personen an ausländischen Höfen, die von der Wiener Hofkammer Zahlungen
      erhalten haben, und drittens in einem verwandtschaftlichen Verhältnis zu Funktionsträger*innen
      standen.
    </p>
    <div class="flex-col  w-fit p-4 mx-auto">
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
    </p>

    <!-- slot for additional content -->
    <slot></slot>
  </div>
</template>
<style scoped>
.ul-wrapper {
  @apply pl-4;
}

ul {
  @apply pl-5;
}
h1,
h2,
h3 {
  @apply text-2xl my-8 font-medium;
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
