<script setup lang="ts">
import { ref, watch, onBeforeMount, onMounted } from 'vue';

const props = defineProps([]);
const textBase = ref('pages.landing-page.viecpro.');
</script>
<template>
  <div>
    <h1>{{ $t(textBase + 'header') }}</h1>
    <p>{{ $t(textBase + 'text') }}</p>
    <button class="rounded bg-red-200 px-4 py-2 hover:bg-gray-200">
      {{ $t(textBase + 'link-database') }}
    </button>
    <p>
      <span class="font-black text-xl"> {{ $t(textBase + 'aufbau') }}</span>
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
