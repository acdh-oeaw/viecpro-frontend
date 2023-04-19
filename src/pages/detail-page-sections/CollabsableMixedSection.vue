<script setup lang="ts">
const props = defineProps(['header', 'relationData', 'labelData', 'isCollapsed']);
const labelKeys = ['label', 'start_date', 'end_date'];
const relationKeys = ['relation_type', 'target.name', 'start_date', 'end_date'];
</script>
<template>
  <div class="border-2 rounded px-10">
    <div class="flex justify-between">
      <div>
        <h2
          class="my-auto py-5"
          :class="{ 'text-gray-400 cursor-not-allowed': !labelData.length || !relationData.length }"
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
        <!-- <p v-else class="box text-gray-400 font-mono my-auto py-5">KEINE DATEN</p> -->

      </div>
    </div>
    <div :class="{ hidden: isCollapsed }">
      <ul>
        <li v-for="el in relationData" :key="el.id">
          <!-- TODO: make this grid -->
          <span v-for="key in relationKeys" :key="el + '_' + key" class="mx-2"> {{ el[key] }}</span>
        </li>
      </ul>

      <ul>
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
