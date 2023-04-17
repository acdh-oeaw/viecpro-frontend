<script setup lang="ts">
const props = defineProps(['header', 'data', 'isCollapsed']);
</script>
<template>
  <div class="w-full bg-green-100">
    <div class="flex">
      <h2
        class="mr-4"
        :class="{
          'text-gray-300 cursor-not-allowed': !data.length,
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
    </div>
      <div :class="{ hidden: isCollapsed }" class="flex-col">
        <slot name="collapsable-content" :data="data"></slot>
      </div>
      <slot name="content-below-allways-visible"></slot>
  </div>
</template>
<style scoped></style>
