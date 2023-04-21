<script setup lang="ts">
import { ref, watch, onBeforeMount, onMounted } from 'vue';
const textBase = ref('pages.landing-page.database.');

const props = defineProps([]);
</script>
<template>
  <div>
    <h1 >Datenbank</h1>
    <p class="w-[35rem]">
      Die Datenbank beinhaltet die prosopographischen Datensammlungen zweier abgeschlossener FWF-Projekte
      zum Wiener Hof von Kaiser Leopold I. (1657–1705) bis Leopold II. (1790–1792). Diese Sammlungen
      werden durch eine <strong>Datenneuaufnahme</strong> für die Hofgesellschaft unter Kaiser Franz II./I.
      (1792–1835) erweitert. In seiner technischen Umsetzung setzt das Team auf die am ACDH-CH der
      ÖAW entwickelte virtuelle Forschungsumgebung <strong>Austrian Prosopographical Information System</strong>
      (APIS).
    </p>
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
  @apply text-3xl my-8 font-black text-primary-100;
}

li {
  @apply list-disc list-outside pl-4;
}

span {
  @apply block;
}
</style>
