<script setup lang="ts">
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  DialogDescription,
} from '@headlessui/vue';

const props = defineProps(['confirm', 'cancel', 'isRevealed']);
</script>
<template>
  <Dialog :open="isRevealed" @close="confirm(false)" class="relative z-50">
    <div class="fixed inset-0 bg-black/50" aria-hidden="true" />
    <div class="fixed inset-0 flex items-center justify-center p-4">
      <DialogPanel class="w-full max-w-md rounded bg-white py-4 px-10">
        <DialogTitle class="mb-4 text-xl text-center">
          <slot name="title"></slot>
        </DialogTitle>
        <DialogDescription>
          <slot name="body"> </slot>
        </DialogDescription>
      </DialogPanel>
    </div>
  </Dialog>
</template>
<style scoped></style>
