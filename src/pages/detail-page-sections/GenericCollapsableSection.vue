<script setup lang="ts">
const props = defineProps(['header', 'data', 'isCollapsed']);
</script>
<template>
  <div class="border-2 rounded px-10">
    <div class="flex justify-between">
      <h2
      class="my-auto py-5"
        :class="{
          'text-gray-400 cursor-not-allowed': !data.length,
          'hover:cursor-pointer': data.length,
        }"
        @click="
          () => {
            isCollapsed = !isCollapsed;
          }
        "
      >
        {{ header }}
      </h2>
      <button
        v-if="data.length"
        @click="
          () => {
            isCollapsed = !isCollapsed;
          }
        "
      >
        Toggle
      </button>
      <!-- <p v-else class="box text-gray-400 font-mono my-auto py-5">KEINE DATEN</p> -->

    </div>
      <div :class="{ hidden: isCollapsed }" class="flex-col">
        <slot></slot>

      </div>
  </div>
</template>
<style scoped></style>
