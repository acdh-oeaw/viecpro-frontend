<script setup lang="ts">
import { ref, onMounted } from "vue";
import GenericLabelsSection from "./GenericLabelsSection.vue";
const props = defineProps(["data", "model"]);
</script>

<template>
  <div class="border-2 p-8 rounded mb-8 bg-white">
    <span class="text-gray-400 px-4 py-1 border-x-2 border-gray-300"
      > {{  $t(`models.${model}`) }}</span
    >
    <span v-if="data.kind" class="text-gray-400 px-4 py-1 border-r-2 border-gray-300"> {{ data.kind }}</span>
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
  
    <slot name="functions_and_titles"> </slot>
    <!-- <div v-if="data.grouped_labels">
    <div v-for="(values, key) in data.grouped_labels" :key="key">
      <h2 class="bg-blue-100">{{ key }}</h2>
      <ul>
        <li v-for="val in values" :key="val">{{ val.name }}</li>
      </ul>
    </div>
  </div> -->
  </div>
  <slot name="content-below"></slot>
  <GenericLabelsSection v-if="data.grouped_labels" :grouped_labels="data.grouped_labels" :model="model"></GenericLabelsSection>
</template>
<style scoped>

.mild_text {
  @apply text-gray-400;
}</style>
