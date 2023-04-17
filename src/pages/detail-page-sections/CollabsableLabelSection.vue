<script setup lang="ts">
import { ref, onBeforeMount } from 'vue';
import useGroupArrayOfObjectsByKey from '@/composables/transform-data/useGroupArrayOfObjectsByKey';

const props = defineProps(['header', 'data', 'isCollapsed']);
const orderedKeys = ['name', 'start_date', 'end_date'];
const isReady = ref(false);
const groupedLabels = ref({});
onBeforeMount(() => {
  if (
    props.data.some((el) => {
      return Object.keys(el).includes('label_type');
    })
  ) {
    console.log('was True for', props.data);
    isReady.value = true;
    groupedLabels.value = useGroupArrayOfObjectsByKey(props.data, 'label_type');
  } else {
    console.log('was FALSE');
    isReady.value = false;
  }
});
</script>
<template>
  <div class="border-2 rounded px-10">
    <div class="flex justify-between pr-10">
      <h2
        class="mr-4"
        :class="{
          'text-gray-300 cursor-not-allowed': !data.length,
          'hover:cursor-pointer': data.length,
        }"
        @click="
          () => {
            isCollapsed = !isCollapsed;
          }
        "
      >
        {{ header }}
      </h2>
      <div>
        <button
          v-if="data.length"
          @click="
            () => {
              isCollapsed = !isCollapsed;
            }
          "
        >
          Toggle
        </button>
      </div>
    </div>
    <!-- TODO: implement check against certain labels that are displayed in one span, not as list (alt names!) -->
    <!-- CHECK could be: for those, I add the label_type in the parsed Labels and if this appears, make label_type a label element and list values after it. -->
    <div v-if="isReady" class="flex-col" :class="{ hidden: isCollapsed }">
      <div v-for="(values, key) in groupedLabels" :key="key" class="pb-2 flex">
        <label> {{ key }}: </label>
        <div class="flex flex-wrap pb-2 items-center justify-start">
          <span v-for="val in values" :key="val" class="mx-2 my-2 rounded bg-gray-200 px-2 py-1">
            {{ val.name }}</span
          >
        </div>
      </div>
    </div>
    <ul v-else :class="{ hidden: isCollapsed }">
      <li v-for="el in data" :key="el.id">
        <!-- TODO: make this grid -->
        <span v-for="key in orderedKeys" :key="el + '_' + key" class="mx-2"> {{ el[key] }}</span>
      </li>
    </ul>
  </div>
</template>
<style scoped></style>
