<script setup lang="ts">
import type { groupListItem } from "../../types/deduplication_types";
import { ref, inject, computed } from "vue";
import type { Ref } from "vue";
const props = defineProps<{
  item: groupListItem;
}>();

const { selectedGroups, selectedSingles, selectedMemebers, toggleEntity } =
  inject("toggleCallback");

function ListItemClickHandler(id: number): void {
  console.log("caleld LIstItemClickHandler, calling toggelEnttity from there");
  toggleEntity("group", id);
}

const isSelected = computed(() => {
  return selectedGroups ? selectedGroups.value.includes(props.item.id) : false;
});

// todo: make on click function a generic composable, because it is mostly the same for singles and groups
</script>

<template>
  <li
    class="bg-red-200"
    @click="ListItemClickHandler(props.item.id)"
    :class="{
      'bg-blue-500': isSelected,
    }"
  >
    {{ props.item.name ? props.item.name : "no name" }} - {{ props.item.id }}
  </li>
</template>
<style scoped></style>
