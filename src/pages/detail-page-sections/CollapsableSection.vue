<script setup lang="ts">
import GenericListSection from './GenericListSection.vue';
const props = defineProps(['header', 'data', 'isCollapsed']);
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
    <GenericListSection :data="data" :class="{ hidden: isCollapsed }"></GenericListSection>
  </div>
</template>
<style scoped></style>
