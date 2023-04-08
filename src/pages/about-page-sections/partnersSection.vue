<script setup lang="ts">
import { ref, watch, onBeforeMount, onMounted } from "vue";

const props = defineProps([]);
const tB = ref("pages.about-page.partners.");
</script>
<template>
  <div>
  
  <h1>{{  $t(tB+"header") }}</h1>
  <p>{{  $t(tB+"sh1") }}</p>
<div class="ul-wrapper">
    <ul>
    <li>{{  $t(tB+"h1-l1") }}</li>
    <li>{{  $t(tB+"h1-l2") }}</li>
    <li>{{  $t(tB+"h1-l3") }}</li></ul>
</div>
<p>{{  $t(tB+"sh2") }}</p>
<div class="ul-wrapper">
    <ul><li>{{  $t(tB+"h2-l1") }}</li>
    <li>{{  $t(tB+"h2-l2") }}</li>
    <li>{{  $t(tB+"h2-l3") }}</li></ul>
</div>
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
  @apply text-2xl my-8;
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
