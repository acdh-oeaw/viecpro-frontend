<script setup lang="ts">
import { ref, watch, onBeforeMount, onMounted } from "vue";

const props = defineProps([]);
const textBase = ref("pages.landing-page.viecpro.");
</script>
<template>
  <div>
    <h1>{{ $t(textBase + "header") }}</h1>
    <p>{{ $t(textBase + "text") }}</p>
    <button class="rounded bg-red-200 px-4 py-2 hover:bg-gray-200">
      {{ $t(textBase + "link-database") }}
    </button>
    <p>
      <strong> {{ $t(textBase + "aufbau") }}</strong>
    </p>

    <!-- slot for additional content -->
    <slot></slot>
  </div>
</template>
<style scoped></style>
