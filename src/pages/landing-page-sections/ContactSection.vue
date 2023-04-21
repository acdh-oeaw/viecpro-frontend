<script setup lang="ts">
import { ref, watch, onBeforeMount, onMounted } from 'vue';
const textBase = ref('pages.landing-page.contact.');

const props = defineProps([]);
</script>
<template>
  <div class="bg-gray-100 p-8 rounded-lg">
    <h1>Kontaktaufnahme</h1>
    <p>
      ... zum VieCPro-Team ist stets herzlich willkommen.
      <strong>Die Datenbank befindet sich im Aufbau</strong>. Wir freuen uns über Ihre
      sachdienlichen Hinweise und Ergänzungsvorschläge. Falls Sie eine Idee für Anschlussprojekte
      haben oder an einer Kooperation interessiert sind, dann schreiben Sie uns an:
      <a href="mailto:viecpro(at)oeaw.ac.at">viecpro(at)oeaw.ac.at</a>.
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
  @apply text-3xl mb-8 font-black text-primary-100;
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
