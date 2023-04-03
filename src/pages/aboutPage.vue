// the about page, with information on project, data, usage, team, etc. // TODO:

<script setup lang="ts">
import genericDialog from "@/components/dialogs/genericDialog.vue";
import { useCustomConfirmation } from "@/composables/useCustomConfirmation";
import { ref } from "vue";
const myCallback = (data: any) => {
  console.log("data in useCustomConfirmation", data);
};

const { openDialog, isRevealed, confirm, cancel } = useCustomConfirmation();

const sections = ref({
  database: {},
  team: {},
  usage: {},
});

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
    <div class="min-h-screen mt-20">
      <div
        class="min-w-40 flex-row py-20 border-r-2 px-10"
        id="about_navigation"
      >
        <div class="indent" v-for="(value, key) in sections" :key="key">
          {{ $t(`words.${key}`)}}
        </div>
      </div>
    </div>

    <div class="flex-grow pl-20" id="about_content">
    <button class="bg-primary-200 rounded px-4 py-2 text-white mt-4" @click="openDialog(myComputation)">Test Dialog</button>
    
    </div>
  </div>
  <genericDialog
    :confirm="confirm"
    :is-revealed="isRevealed"
    :cancel="cancel"
  ></genericDialog>
</template>

<style scoped>
.indent {
  @apply ml-6;
}
</style>
