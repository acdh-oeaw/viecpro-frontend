<script setup lang="ts">
const props = defineProps(['data']);
const orderedKeys = ['relation_type', 'target.name', 'start_date', 'end_date']
</script>
<template>
  <ul>
    <li v-for="el in data" :key="el.id">
      - <span class="mx-2" v-for="key in orderedKeys" :key="el + '_' + key"> {{ el[key] }}</span>
    </li>
  </ul>
</template>
<style scoped></style>
