<script setup lang="ts">
const props = defineProps(['header', 'data', 'isCollapsed']);
</script>
<template>
 <div
    class="border-2 rounded"
    :class="{ 'shadow-md': data.length && !isCollapsed, 'shadow-0': !data.length || isCollapsed }"
  >
    <div
      class="flex justify-between px-10 font-light "
      :class="{
        'bg-gray-100 border-b-2 border-gray-200 text-gray-900 hover:cursor-pointer': data.length && !isCollapsed,
        'text-gray-400 cursor-not-allowed': !data.length,
        'text-gray-800 hover:cursor-pointer': data.length && isCollapsed,
      }"
      @click="
        () => {
          if (data.length) {
            isCollapsed = !isCollapsed;
          }
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
        <!-- <p v-else class="box text-gray-400 font-mono my-auto py-5">KEINE DATEN</p> -->
      </div>
    </div>
    <div :class="{ hidden: isCollapsed }" class="flex-col px-10 my-4">
      <slot></slot>
    </div>
  </div>
</template>
<style></style>
