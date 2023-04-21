<script setup lang="ts">
import { onMounted } from 'vue';
const props = defineProps(['parsedMarkdown']);

onMounted(() => {
  console.log(props.parsedMarkdown);
});
</script>
<template>
  <div v-html="parsedMarkdown" class="x"></div>
  <!-- <div :v-text="parsedMarkdown.body"></div> -->
</template>
<style scoped>
.x {
  @apply text-black max-w-3xl;
}
.x:deep(h1) {
  @apply text-2xl mt-8 mb-4;
}

.x:deep(ul) {
  @apply list-none pt-4;
}
.x:deep(ul > li) {
  @apply text-black;
}

/* .x:deep(ul > div) {
  @apply w-2 h-2 rounded-full bg-red-300;
} */
.x:deep(li > p) {
  @apply text-black ml-4 list-item list-outside list-disc;
  
  /* -translate-x-[1.44rem]; relative -top-[1.44rem]; */
}
.x:deep(p:not(li > p)) {
  @apply text-black;
}
.x:deep(strong) {
  @apply text-red-600 font-regular tracking-wider text-black;
}

/* .x:deep(li > p) {
  @apply text-red-300;
} */
.x:deep(a) {
  @apply text-blue-200;
}
/* .x:deep(ol) {
  @apply list-decimal list-inside;
} */
.x:deep(a) {
  @apply text-blue-400 underline;
}
</style>
