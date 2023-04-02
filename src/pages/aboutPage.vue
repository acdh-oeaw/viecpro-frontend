// the about page, with information on project, data, usage, team, etc. // TODO:

<script setup lang="ts">
import genericDialog from "@/components/dialogs/genericDialog.vue";
import { useCustomConfirmation } from "@/composables/useCustomConfirmation";

const myCallback = (data: any) => {
  console.log("data in useCustomConfirmation", data);
};

const { openDialog, isRevealed, confirm, cancel } = useCustomConfirmation();

function myComputation(data: any) {
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
  <div class="flex min-h-screen justify-between">
    <div class="bg-red-100" id="about_navigation">navigation</div>
    <div class="bg-blue-100" id="about_content">content</div>
  </div>
  <genericDialog
    :confirm="confirm"
    :is-revealed="isRevealed"
    :cancel="cancel"
  ></genericDialog>
</template>

<style></style>

#
