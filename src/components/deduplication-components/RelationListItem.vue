<script setup lang="ts">
import type { memberListItem } from "../../types/deduplication_types";
import { ref, inject, computed, onMounted} from "vue";

const props = defineProps<{
  item: Object; // TODO: this needs another type, that includes all fields
}>();

const rel = ref({})

/**
 * This is for displayinga dublette (member of a group) in its group-context!
 * 
 */

onMounted(()=>{
    rel.value = props.item
})

// todo: make on click function a generic composable, because it is mostly the same for singles and groups
</script>

<template>
  <li v-if="rel.id"
    class="bg-red-200 clickable ml-6"
  >
  {{ rel.related_institution }} {{ rel.start }} - {{ rel.end }}
  </li>
</template>
<style scoped></style>
