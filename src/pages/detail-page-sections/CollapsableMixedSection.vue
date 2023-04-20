<script setup lang="ts">
const props = defineProps(['header', 'relationData', 'labelData', 'isCollapsed']);
const labelKeys = ['name', 'start_date', 'end_date'];
const relationKeys = ['relation_type', 'target.name', 'start_date', 'end_date'];

function checkHasNoData() {
  return !props.labelData.length && !props.relationData.length;
}

function checkHasData() {
  return props.labelData.length || props.relationData.length;
}

// function checkDataANDisCollapsed(negation: boolean) {
//   if (negation) {
//     return !props.labelData.length && !props.relationData.length && props.isCollapsed;
//   } else {
//     return (props.labelData || props.relationData) && props.isCollapsed;
//   }
// }

// function checkDataANDisNOTCollapsed(negation: boolean) {
//   if (negation) {
//     return !props.labelData.length && !props.relationData.length && !props.isCollapsed;
//   } else {
//     return (props.labelData || props.relationData) && !props.isCollapsed;
//   }
// }
</script>
<template>
  <div
    class="border-2 rounded transition-all duration-150 ease-out"
    :class="{
      'shadow-md': checkHasData() && !isCollapsed,
      'shadow-0': checkHasNoData() || isCollapsed,
    }"
  >
    <div
      class="flex justify-between px-10 font-light transition-all duration-100 ease-out"
      :class="{
        'bg-gray-100 border-b-2 border-gray-200 text-gray-900 hover:cursor-pointer':
          checkHasData() && !isCollapsed,
        'text-gray-400 hover:cursor-not-allowed': checkHasNoData(),
        'text-gray-800 hover:cursor-pointer': checkHasData() && isCollapsed,
      }"
      @click="
        () => {
          if (checkHasData()) {
            isCollapsed = !isCollapsed;
          }
        }
      "
    >
      <h2 class="py-2">{{ header }}</h2>
      <div>
        <button class="my-auto py-2" v-if="checkHasData()">
          <i v-if="isCollapsed" class="fas fa-sm fa-arrow-down text-gray-400"></i>
          <i v-else class="fas fa-sm fa-arrow-up text-gray-500"></i>
        </button>
        <!-- <p v-else class="box text-gray-400 font-mono my-auto py-5">KEINE DATEN</p> -->
      </div>
    </div>

    <!-- <div
    class="border-2 rounded"
    :class="{ 'shadow-md': data.length && !isCollapsed, 'shadow-0': !data.length || isCollapsed }"
  >
    <div
      class="flex justify-between px-10 font-light hover:cursor-pointer"
      :class="{
        'bg-gray-100 border-b-2 border-gray-200 text-gray-900 ': data.length && !isCollapsed,
        'text-gray-400 cursor-not-allowed': !data.length,
        'text-gray-800': data.length && isCollapsed,
      }"
      @click="
        () => {
          isCollapsed = !isCollapsed;
        }
      "
    >
      <h2 class="py-2">
        {{ header }}
      </h2>
      <div>
        <button class="my-auto py-2" v-if="data.length">
          <i v-if="isCollapsed" class="fas fa-sm fa-arrow-down text-gray-400"></i>
          <i v-else class="fas fa-sm fa-arrow-up text-gray-500"></i>
        </button>
      </div>
    </div> -->

    <!-- <div class="border-2 rounded px-10">
    <div class="flex justify-between">
      <div>
        <h2
          class="my-auto py-5"
          :class="{
            'text-gray-400 cursor-not-allowed': !labelData.length && !relationData.length,
            'hover:cursor-pointer': labelData || relationData,
          }"
          @click="
            () => {
              isCollapsed = !isCollapsed;
            }
          "
        >
          {{ header }}
        </h2>
      </div>
      <div>
        <button
          class="my-auto py-5"
          v-if="labelData.length || relationData.length"
          @click="
            () => {
              isCollapsed = !isCollapsed;
            }
          "
        >
          <i v-if="isCollapsed" class="fas fa-sm fa-arrow-down text-gray-400"></i>
          <i v-else class="fas fa-sm fa-arrow-up text-gray-400"></i>
        </button>
      </div>
    </div> -->
    <div :class="{ hidden: isCollapsed }" class="px-10 my-4">
      <ul>
        <li v-for="el in relationData" :key="el.id">
          <!-- TODO: make this grid -->
          <div class="grid grid-cols-4 justify-items-start auto-cols-max">
            <template v-for="key in relationKeys" :key="el + '_' + key">
              <!-- TODO: make this grid -->
              <span
                v-if="key === 'target.name'"
                class="hover:cursor-pointer"
                @click="useOpenDetail(el.target.model, el.target.object_id)"
              >
                {{ el['target']['name'] }}</span
              >
              <span v-else class="mx-2"> {{ el[key] }}</span>
            </template>
          </div>
        </li>
      </ul>

      <ul class="">
        <li v-for="el in labelData" :key="el.id">
          <!-- TODO: make this grid -->
          <span v-for="key in labelKeys" :key="el + '_' + key" class="mx-2"> {{ el[key] }}</span>
        </li>
      </ul>
    </div>

    <!-- <GenericListSection :data="data" :class="{ hidden: isCollapsed }"></GenericListSection> -->
  </div>
</template>
<style scoped></style>
