<script setup lang="ts">
import { ref, onMounted } from "vue";
const props = defineProps(["data", "model"]);
</script>

<template>
  <div class="border-2 p-8 rounded mb-8">
    <span class="text-gray-400 px-4 py-1 border-x-2 border-gray-300"
      > {{ data.kind ? data.kind.label : model }}</span
    >
    <h3 class="text-black text-3xl mb-2 mt-1">
      {{ data.first_name ? data.name + ", " + data.first_name : data.name }}
    </h3>
    <p class="mb-4">
      <span v-if="data.start_date"> {{ data.start_date }}</span>
      <span class="mild_text" v-else> {{ $t("words.unknown") }} </span> -
      <span v-if="data.end_date"> {{ data.end_date }}</span>
      <span class="mild_text" v-else> {{ $t("words.unknown") }}</span>
      <!-- {{ data.start_date ? data.start_date : "unknown" }} - {{ data.end_date }} ({{
      data.kind ? data.kind.label : data.gender
    }}) -->
    </p>
    <slot> </slot>
  </div>
</template>
<style scoped>

.mild_text {
  @apply text-gray-400;
}</style>
