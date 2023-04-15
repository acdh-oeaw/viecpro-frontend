<script setup lang="ts">
import { computed } from 'vue';
const props = defineProps(['grouped_labels', 'model']);

const hasAltNameInKeys = computed(() => {
  const all_keys = Object.keys(props.grouped_labels);
  const includesName = (el) => el.includes('name');
  return all_keys.some(includesName);
});
</script>
<template>
  <div v-if="grouped_labels" style="max-width: 40rem">
    <div v-if="hasAltNameInKeys">
      <h1 class="text-xl mb-4">Namensvarianten</h1>
      <div v-for="(values, key) in grouped_labels" :key="key">
        <div v-if="key.includes('name')" class="flex mb-4">
          <label for="alt_names"> {{ key.replace('Schreibvariante', '') }}: </label>
          <div id="alt_names" class="flex flex-wrap">
            <p v-for="val in values" class="bg-gray-100 mx-2 mb-2 rounded px-2 py-1">
              {{ val.name }}</p
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
