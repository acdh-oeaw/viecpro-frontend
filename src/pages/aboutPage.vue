// the about page, with information on project, data, usage, team, etc. // TODO:

<script setup lang="ts">
import genericDialog from "@/components/dialogs/genericDialog.vue";
import { useCustomConfirmation } from "@/composables/useCustomConfirmation";

const myCallback = (data:any) => {
  console.log("data in useCustomConfirmation", data);
};

const { openDialog, isRevealed, confirm, cancel } = useCustomConfirmation();

function myComputation(data:any) {
  console.log("starting process");

  if (data) {
    console.log("running process, data was:", data);
  } else {
    console.log("aborting process, as data was:", data);
  }

  console.log("finishing process");
}
</script>

<template>
  <div class="text-white container min-h-screen">
    <h1 class="bg-black text-white static text-9xl">{{ $t("title") }}</h1>
    <p></p>
  </div>
  <button @click="openDialog(myCallback)">Show Modal</button>
  <button @click="openDialog(myComputation)">Run Computation</button>

  <genericDialog
    :confirm="confirm"
    :is-revealed="isRevealed"
    :cancel="cancel"
  ></genericDialog>
</template>

<style></style>

#
