// The footer bar with impressum, logos, etc.
<template>
  <div class="static bottom-0 w-screen bg-primary-100 h-20 flex">
    <div class="bg-primary-200 flex basis-1/3 text-white">
      <slot name="left"></slot>
    </div>
    <div class="bg-primary-400 flex basis-1/3 text-white">
      <slot name="middle"></slot>
    </div>
    <div class="bg-primary-800 flex basis-1/3 text-white">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
