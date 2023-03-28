<script setup lang="ts">
import { inject } from "vue";
import { DialogTitle, DialogDescription } from "@headlessui/vue";

const { isBlurred, toggleBlurred } = inject("bgBlurred");
</script>
<template>
  <DialogTitle class="mb-4 text-xl">
    <h1>Are you sure you want to delete this?</h1></DialogTitle
  >
  <DialogDescription>
    <p>
      This would remove something that you would like to see again. Are you
      sure?
    </p>
    <div class="flex justify-between mt-6 mb-2">
      <button class="btn-dummy bg-green-300" @click="toggleBlurred(false, 'yes')">Ja</button>
      <button class="btn-dummy bg-red-300" @click="toggleBlurred(false, 'no')">Nein</button>
    </div>
  </DialogDescription>
</template>
<style scoped></style>
