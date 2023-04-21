<script setup lang="ts">
import { ref, watch, onBeforeMount, onMounted } from 'vue';

const props = defineProps([]);
const textBase = ref('pages.landing-page.viecpro.');
</script>
<template>
  <div class="">
    <p>
      VieCPro liefert erstmals <strong>tausende prosopographische Profile</strong> für die
      überwiegende <strong>Mehrheit des Wiener Hofpersonals</strong> . Gegenwärtig ermöglicht die
      Datenbank die Recherche des Personals beiderlei Geschlechts wie auch verschiedener sozialer
      Schichten des Wiener Haupthofstaats von
      <strong
        >neun Kaisern und der Teilhofstaate von 14 Kaiserinnen, sechs Kaiserinwitwen, 70 Erzherzögen
        und Erzherzoginnen und weiterer Familienmitglieder</strong
      >
      von der Mitte des 17. Jahrhunderts bis zum Ende des 18. Jahrhunderts.
    </p>
    <p>
      Für die
      <strong>leopoldinische Zeit</strong>
      umfasst der Personenbestand darüber hinaus erstens zahlreiche Funktionsträger:innen, die am
      Wiener Hof politisch-administrative Aufgaben und eine ökonomisch-kulturelle Rolle erfüllt
      haben, zweitens Personen an ausländischen Höfen, die von der Wiener Hofkammer Zahlungen
      erhalten haben, und drittens in einem verwandtschaftlichen Verhältnis zu Funktionsträger*innen
      standen.
    </p>
    <div class="mx-auto mb-10 ml-80"> 
      <button class="bg-gray-300  rounded px-4 py-2 text-gray-600 hover:bg-gray-400 hover:text-gray-800  mt-10 uppercase font-regular"  @click="$router.push('/search/Person')"> Zur Datenbank</button>

    </div>

    <!-- <div class="flex-col w-fit p-4 mx-auto">
      <span class="mb-2 flex justify-between w-full">
        <label for="" class="text-primary-100 font-regular">Sucheinstieg: </label>
        <button class="rounded btn-dummy w-fit text-sm ml-4">
          Datenbank 
          <i class="fa-solid fa-square-up-right ml-2"></i>
          </button
      ></span>
      <span>
        <label for="" class="text-primary-100 font-regular"> Mehr über das Projekt:</label>
        <button class="btn-dummy w-fit text-sm ml-4 py-1">
          Materialien und Dokumentation
           <i class="fa-solid fa-square-up-right ml-2"></i>
          </button
      ></span>
    </div> -->

    <p>
      <span class="font-black text-left text-primary-100 text-xl mt-4 mb-10"> {{ $t(textBase + 'aufbau') }}</span>
    </p>

    <!-- slot for additional content -->
    <slot></slot>
  </div>
</template>
<style scoped>
strong {
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
  @apply text-2xl my-8 font-medium;
}
p {
  @apply py-2;
}
li {
  @apply list-disc list-outside pl-4;
}

span {
  @apply block;
}
</style>
