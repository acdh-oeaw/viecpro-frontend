<script setup lang="ts">
const props = defineProps(['data']);
import useTypesenseAsyncRetrieval from '@/composables/useTypesenseAsyncRetrieval';
const log_res = (data)=>{console.log(data);}

useTypesenseAsyncRetrieval("Reference", 'Reference_95007', log_res)
</script>
<template>
  <div class="w-80 h-40 border-2 flex-col place-content-between bg-gray-200">
    <div class="mb-4"><p>Donwnload</p></div>
    <div>Zitation</div>
    <div>Visualisation</div>
  </div>
</template>
<style scoped></style>
