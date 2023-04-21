<script setup lang="ts">
import { ref, watch, onBeforeMount, onMounted } from 'vue';
const textBase = ref('pages.landing-page.documentation.');

const props = defineProps([]);
</script>
<template>
  <div>
    <h1>Materialien und Dokumentation</h1>
    <p class="w-[35rem]">
      Unsere Dokumentation und Materialien zur Benutzung der VieCPro-Datenbank reichen von einer
      Erklärung der APIS-Funktionalitäten über die Darlegung der Bearbeitungsrichtlinien bis hin zu
      diversen Verzeichnissen (Projektpublikationen, Hofstaatslisten, Abkürzungsverzeichnis).
      <strong>Der Inhalt befindet sich wie die Datenbank selber noch in Arbeit</strong>.
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
  @apply text-3xl my-8 font-black text-primary-100;
}

li {
  @apply list-disc list-outside pl-4;
}

span {
  @apply block;
}
</style>
