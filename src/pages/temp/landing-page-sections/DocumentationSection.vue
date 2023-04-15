<script setup lang="ts">
import { ref, watch, onBeforeMount, onMounted } from "vue";
const textBase = ref("pages.landing-page.documentation.");

const props = defineProps([]);
</script>
<template>
  <div>
    <h1>{{  $t(textBase +"header") }}</h1>
    <p>{{  $t(textBase +"text") }}</p>

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
}</style>
