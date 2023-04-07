<script setup lang="ts">
import { ref, watch, onBeforeMount, onMounted } from "vue";
const textBase = ref("pages.landing-page.database.");

const props = defineProps([]);
</script>
<template>
  <div>
    <h1> {{ $t(textBase + "header") }}</h1>
    <!-- slot for additional content -->
    <p>{{ $t(textBase + "text") }}</p>
    <button> {{ $t("pages.landing-page.viecpro.link-database") }}</button>
    <slot></slot>
  </div>
</template>
<style scoped></style>
