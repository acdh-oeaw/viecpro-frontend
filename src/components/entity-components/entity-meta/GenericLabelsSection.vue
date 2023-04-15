<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
const props = defineProps(['grouped_labels', 'model']);
const showNames = ref(false);
const hasAltNameInKeys = computed(() => {
  const all_keys = Object.keys(props.grouped_labels);
  const includesName = (el) => el.includes('name');
  return all_keys.some(includesName);
});

onMounted(() => {
  console.log(props.grouped_labels);
});
</script>
<template>
  <div
    v-if="grouped_labels && hasAltNameInKeys"
    style="max-width: 40rem"
    class="border-2 p-8 mb-8 bg-white"
  >
    <div v-if="hasAltNameInKeys">
      <div class="text-xl flex justify-between text-gray-400" :class="{ 'mb-8': showNames }">
        <label for="">Namensvarianten</label>
        <button
          class="rounded bg-gray-300 text-white text-sm px-4 py-1"
          @click="
            () => {
              showNames = !showNames;
            }
          "
        >
          {{ showNames? 'up' : "down" }}
        </button>
      </div>
      <template v-if="showNames">
        <div v-for="(values, key) in grouped_labels" :key="key">
          <div v-if="key.includes('name')" class="flex mb-4 text-gray-600">
            <label for="alt_names"> {{ key.replace('Schreibvariante', '') }}: </label>
            <div id="alt_names" class="flex flex-wrap">
              <p
                v-for="val in values"
                class="bg-gray-100 mx-2 mb-2 rounded px-2 py-1 text-sm text-gray-600"
                :key="val"
              >
                {{ val.name }}
              </p>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>
<style scoped></style>
