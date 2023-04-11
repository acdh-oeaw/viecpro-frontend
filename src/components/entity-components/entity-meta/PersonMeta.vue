<script setup lang="ts">
import { ref, onMounted } from 'vue';
const props = defineProps(['data']);
const functions = ref(new Set<string>());

onMounted(() => {
  let parsedFunctions: Set<string> | Array<string> = new Set(
    props.data.relations.PersonInstitution.map((el: object) => {
      //TODO: type this object.
      return el.relation_type;
    })
  );
  console.log('object keys: ', Object.keys(props.data.relations));

  //test = Array.from(test).filter((el) => el != "placeholder dummy");

  functions.value = parsedFunctions;
});
</script>

<template>
  <div class="flex flex-wrap" style="max-width: 40rem">
    <span
      v-for="func in functions"
      class="block mx-2 my-1 bg-gray-200 px-4 py-2 rounded text-gray-500 text-xs hover:bg-gray-300 hover:text-gray-700 hover:cursor-pointer"
      :key="func"
      >{{ func }}</span
    >
  </div>
  <div v-if="data.grouped_labels">
    <div v-for="(values, key) in data.grouped_labels">
      <h2 class="bg-blue-100">{{ key }}</h2>
      <ul>
        <li v-for="val in values">{{ val.name }}</li>
      </ul>
    </div>
  </div>
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
