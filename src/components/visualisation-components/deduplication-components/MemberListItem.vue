<script setup lang="ts">
import type { memberListItem } from "../../types/deduplication_types";
import { ref, inject, computed } from "vue";

const props = defineProps<{
  item: memberListItem; // TODO: this needs another type, that includes all fields
}>();

const { selectedMember, toggleEntity } = inject("toggleCallback");
/**
 * This is for displayinga dublette (member of a group) in its group-context!
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
    @click="toggleEntity('member', props.item.id)"
    :class="{
      'bg-blue-500': isSelected,
    }"
  >{{ item.name }}, {{ item.first_name }} ({{ item.id }})</li>
</template>
<style scoped></style>
