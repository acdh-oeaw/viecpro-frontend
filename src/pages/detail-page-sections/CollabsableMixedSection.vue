<script setup lang="ts">
const props = defineProps(['header', 'relationData', 'labelData', 'isCollapsed']);
const labelKeys = ['label', 'start_date', 'end_date'];
const relationKeys = ['relation_type', 'target.name', 'start_date', 'end_date'];
</script>
<template>
  <div class="w-full bg-green-100">
    <div class="flex">
      <div>
        <h2
          class="mr-4"
          :class="{ 'text-gray-300 cursor-not-allowed': !labelData.length || !relationData.length }"
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
          v-if="labelData.length || relationData.length"
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
