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
  <div
    v-if="isReady"
    class="border-2 rounded transition-all duration-200 ease-out"
    :class="{ 'shadow-md': data.length && !isCollapsed, 'shadow-0': !data.length && isCollapsed }"
  >
    <div
      class="flex justify-between px-10 font-light transition-all duration-100 ease-out"
      :class="{
        'bg-gray-100 border-b-2 border-gray-200 text-gray-900 hover:cursor-pointer':
          data.length && !isCollapsed,
        'text-gray-400 hover:cursor-not-allowed': !data.length,
        'text-gray-800 hover:cursor-pointer': data.length && isCollapsed,
      }"
      @click="
        () => {
          if (data.length) {
            isCollapsed = !isCollapsed;
          }
        }
      "
    >
      <h2 class="py-2">{{ header }} </h2>
      <div>
        <button class="my-auto py-2" v-if="data.length">
          <i v-if="isCollapsed" class="fas fa-sm fa-arrow-down text-gray-400"></i>
          <i v-else class="fas fa-sm fa-arrow-up text-gray-500"></i>
        </button>
        <!-- <p v-else class="box text-gray-400 font-mono my-auto py-5">KEINE DATEN</p> -->
      </div>
    </div>
    <!-- TODO: implement check against certain labels that are displayed in one span, not as list (alt names!) -->
    <!-- CHECK could be: for those, I add the label_type in the parsed Labels and if this appears, make label_type a label element and list values after it. -->
    <div
      v-if="Object.keys(groupedLabels).length"
      class="flex-col px-10 my-4 text-sm"
      :class="{ hidden: isCollapsed }"
    >
      <div
        v-for="(values, key) in groupedLabels"
        :key="key"
        class="pb-2 grid grid-cols-2 justify-items-start"
      >
        <label> {{ key.replace('', '') }}: </label>
        <div class="flex flex-wrap pb-2 items-center justify-start">
          <span v-for="val in values" :key="val" class="mr-2 my-2 rounded bg-gray-200 px-2 py-1">
            {{ val.name }}</span
          >
        </div>
      </div>
    </div>
    <ul v-else :class="{ hidden: isCollapsed }" class="px-10 my-4">
      <li v-for="el in data" :key="el.id">
        <!-- TODO: make this grid -->
        <span v-for="key in orderedKeys" :key="el + '_' + key" class="mr-2 text-sm">
          {{ el[key] }}</span
        >
      </li>
    </ul>
  </div>
  <div v-else>Loading</div>
</template>
<style scoped></style>
