<script setup lang="ts">
const props = defineProps(['header', 'data', 'isCollapsed']);
const orderedKeys = ['name', 'start_date', 'end_date'];
</script>
<template>
  <div class="w-full bg-green-100">
    <div class="flex">
      <h2
        class="mr-4"
        :class="{
          'text-gray-300 cursor-not-allowed': !data,
          'hover:cursor-pointer': data,
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
          v-if="data"
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
  </div>
</template>
<style scoped></style>
