<script setup lang="ts">
import type { memberListItem } from "../../types/deduplication_types";
import { ref, inject, computed } from "vue";

const props = defineProps<{
  item: memberListItem;
}>();


/**
 * This is for displaying a selected dublette (a  member) on itself, not in the context of a group.
 * 
 * 
 */

const isSelected = computed(() => {
  return selectedMember.value === props.item.id;
});

// todo: make on click function a generic composable, because it is mostly the same for singles and groups
</script>

<template>
  <li
    class="bg-red-200 clickable"
    :class="{
      'bg-blue-500': isSelected,
    }"
  >
  </li>
</template>
<style scoped></style>
