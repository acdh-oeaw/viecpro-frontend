<script setup lang="ts">
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
  DialogDescription,
  DialogOverlay,
} from "@headlessui/vue";


const props = defineProps(["confirm", "cancel", "isRevealed"]);


</script>
<template>


  <Dialog :open="isRevealed" @close="confirm(false)" class="relative z-50">
    <div class="fixed inset-0  bg-black/50" aria-hidden="true" />
    <div class="fixed inset-0 flex items-center justify-center p-4">

    <!-- TODO: make the Panel with "component :is" and create templates for use cases -->
      <DialogPanel class="w-full max-w-sm rounded bg-white py-4 px-10">
        <DialogTitle class="mb-4 text-xl">
          <h1>Are you sure you want to delete this?</h1></DialogTitle
        >
        <DialogDescription>
          <p>
            This would remove something that you would like to see again. Are
            you sure?
          </p>
          <div class="flex justify-between mt-6 mb-2">
            <button class="btn-dummy bg-green-300" @click="confirm(true)">
              Yes
            </button>

            <button class="btn-dummy bg-red-300" @click="confirm(false)">
              No
            </button>
          </div>
        </DialogDescription>
      </DialogPanel>
    </div>
  </Dialog>
</template>
<style scoped></style>
