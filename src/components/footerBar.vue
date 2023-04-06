// The footer bar with impressum, logos, etc.
<template>
  <div class="static bottom-0  bg-white py-10 max-h-60 flex border-t-2 mx-20 border-primary-400">
    <div class="flex basis-1/3 ">
      <slot name="left"></slot>
    </div>
    <div class=" flex basis-1/3">
      <slot name="middle"></slot>
    </div>
    <div class="flex basis-1/3 ">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
