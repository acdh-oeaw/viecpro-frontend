<script setup lang="ts">
import { ref, onBeforeMount } from 'vue';
import useGroupArrayOfObjectsByKey from '@/composables/transform-data/useGroupArrayOfObjectsByKey';

const props = defineProps(['header', 'data', 'isCollapsed']);
const orderedKeys = ['name', 'start_date', 'end_date'];
const isReady = ref(false);
const groupedLabels = ref({});
onBeforeMount(() => {
  if (props.data) {
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
      isReady.value = true;
    }
  } else {
    console.log('NO PROPS.DATA...');
  }
});
</script>
<template>
  <div v-if="isReady" class="border-2 rounded px-10">
    <div class="flex justify-between">
      <h2
        class="my-auto py-5"
        :class="{
          'text-gray-400 cursor-not-allowed': !data.length,
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
          class="my-auto py-5"
          v-if="data.length"
          @click="
            () => {
              isCollapsed = !isCollapsed;
            }
          "
        >
          <i v-if="isCollapsed" class="fas fa-sm fa-arrow-down text-gray-400"></i>
          <i v-else class="fas fa-sm fa-arrow-up text-gray-400"></i>
        </button>
        <!-- <p v-else class="box text-gray-400 font-mono my-auto py-5">KEINE DATEN</p> -->
      </div>
    </div>
    <!-- TODO: implement check against certain labels that are displayed in one span, not as list (alt names!) -->
    <!-- CHECK could be: for those, I add the label_type in the parsed Labels and if this appears, make label_type a label element and list values after it. -->
    <div v-if="Object.keys(groupedLabels).length" class="flex-col" :class="{ hidden: isCollapsed }">
      <div
        v-for="(values, key) in groupedLabels"
        :key="key"
        class="pb-2 grid grid-cols-2 justify-items-start"
      >
        <label> {{ key.replace('', '') }}: </label>
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
  <div v-else>Loading</div>
</template>
<style scoped></style>
