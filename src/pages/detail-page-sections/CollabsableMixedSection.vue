<script setup lang="ts">
import GenericListSection from './GenericListSection.vue';
const props = defineProps(['header', 'relations', 'labels', 'isCollapsed']);
const labelKeys = ['label', 'start_date', 'end_date'];
const relationKeys = ['relation_type', 'target.name', 'start_date', 'end_date'];
</script>
<template>
  <div class="w-full bg-green-100">
    <div class="flex w-1/2 place-content-between">
      <div>
        <h1 class="">{{ header }}</h1>
      </div>
      <div>
        <button
          class=""
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
        <li v-for="el in relations" :key="el.id">
          <!-- TODO: make this grid -->
          <span v-for="key in relationKeys" :key="el + '_' + key" class="mx-2"> {{ el[key] }}</span>
        </li>
      </ul>

      <ul>
        <li v-for="el in labels" :key="el.id">
          <!-- TODO: make this grid -->
          <span v-for="key in labelKeys" :key="el + '_' + key" class="mx-2"> {{ el[key] }}</span>
        </li>
      </ul>
    </div>

    <!-- <GenericListSection :data="data" :class="{ hidden: isCollapsed }"></GenericListSection> -->
  </div>
</template>
<style scoped></style>
