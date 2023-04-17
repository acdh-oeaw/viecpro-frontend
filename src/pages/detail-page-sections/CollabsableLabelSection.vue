<script setup lang="ts">
import GenericListSection from './GenericListSection.vue';
const props = defineProps(['header', 'data', 'isCollapsed']);
const orderedKeys = ['name', 'start_date', 'end_date'];
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
    <ul :class="{ hidden: isCollapsed }">
      <li v-for="el in data" :key="el.id">
        <!-- TODO: make this grid -->
        <span v-for="key in orderedKeys" :key="el + '_' + key" class="mx-2"> {{ el[key] }}</span>
      </li>
    </ul>
    <!-- <GenericListSection :data="data" :class="{ hidden: isCollapsed }"></GenericListSection> -->
  </div>
</template>
<style scoped></style>
