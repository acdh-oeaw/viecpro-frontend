<script setup lang="ts">
const props = defineProps(['parsedMarkdown']);
</script>
<template>
  <div v-html="parsedMarkdown" class="x"></div>
</template>
<style scoped >
.x:deep(h1) {
  @apply bg-primary-100;
}
p {
  @apply text-red-100;
}

h1 {
  @apply text-primary-100 bg-gray-300;
}
</style>
