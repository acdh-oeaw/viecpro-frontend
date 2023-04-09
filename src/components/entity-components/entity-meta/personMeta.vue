<script setup lang="ts">
import { ref, onMounted } from "vue";
const props = defineProps(["data"]);
const functions = ref([""]);

onMounted(() => {
  let test: Set<string> | Array<string> = new Set(

    props.data.relations.PersonInstitution.map((el)=>{return el.relation_type})

  );
  console.log("object keys: ", Object.keys(props.data.relations))

  //test = Array.from(test).filter((el) => el != "placeholder dummy");

  functions.value = test;
});
</script>

<template>
  <!-- <div class="border-2 p-8 rounded mb-8"> -->
  <!-- <span class="text-gray-400 px-4 py-1 border-x-2 border-gray-300"
      >Person</span
    >
    <h3 class="text-black text-3xl mb-2 mt-1">
      {{ data.name + ", " + data.first_name }}
    </h3>
    <p class="mb-4">
      <span v-if="data.start_date"> {{ data.start_date }}</span>
      <span class="mild_text" v-else> unbekannt </span> -
      <span v-if="data.end_date"> {{ data.end_date }}</span>
      <span class="mild_text" v-else> unbekannt</span>
      {{ data.start_date ? data.start_date : "unknown" }} - {{ data.end_date }} ({{
      data.kind ? data.kind.label : data.gender
    }}) 
    </p> -->
  <p>
    <span
      v-for="func in functions"
      class="mr-4 bg-gray-500 px-4 py-2 rounded text-white text-xs uppercase clickable"
      :key="func"
      >{{ func }}</span
    >
  </p>
  <!-- </div> -->
</template>
<style scoped>
.mild_text {
  @apply text-gray-400;
}

.clickable {
  @apply hover:bg-gray-200 hover:text-black;
}
</style>
