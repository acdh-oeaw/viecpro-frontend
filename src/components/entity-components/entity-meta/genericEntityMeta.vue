// generic implementation of the meta section // shitty first draft, needs
refactor once the full picture on how to display each entities metadata is known
<template>
  <!-- TODO: refactor. either use conditional rendering sections for each part of the metadata that is entity-specific, or externalise this generalised component into sub-components for each entity -->
  <div v-if="props.data">
    <h3 v-if="model == 'person'" class="">
      {{ data.name + ", " + data.first_name }}
    </h3>
    <h3 v-else-if="model_type == 'relations'">
      {{
        "Relation-Instance: " +
        data.relation_type.label +
        " (" +
        props.data.id +
        ")"
      }}
    </h3>
    <h3 v-else>{{ props.data.name }}</h3>

    <p class="mb-4">
      {{ data.start_date }} - {{ data.end_date }} ({{
        data.kind ? data.kind.label : data.gender
      }})
    </p>
    <p>
      <span
        v-if="model.toLowerCase() == 'person'"
        v-for="func in functions"
        class="mr-4 bg-green-200 px-4 py-2 rounded-3xl"
        :key="func"
        >{{ func }}</span
      >
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const props = defineProps({
  data: Object,
  model: String,
  model_type: String,
  functions: Array<String>,
});
</script>

<style scoped>
h3 {
  @apply text-black text-3xl mb-2;
}
</style>
