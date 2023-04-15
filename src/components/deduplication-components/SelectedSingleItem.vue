<script setup lang="ts">
import type { singleListItem } from "../../types/deduplication_types";
import { ref, inject } from "vue";
import type { Ref } from "vue";
const props = defineProps<{
  item: singleListItem | number;
}>();

const { selectedGroups, selectedSingles, selectedMember, toggleEntity } =
  inject("toggleCallback");

function ListItemClickHandler(id: number): void {
  console.log("caleld LIstItemClickHandler, calling toggelEnttity from there");
  toggleEntity("single", id);
}
// todo: make on click function a generic composable, because it is mostly the same for singles and groups
</script>

<template>
  <li
    class="clickable"
    @click="ListItemClickHandler(props.item.id ? props.item.id : props.item)"
  >
    {{ props.item.name ? props.item.name : "no name" }} -
    {{ props.item.id ? props.item.id : props.item }}
  </li>
</template>
<style scoped></style>

// :class="{selectedGroups.value.includes(props.item.id ? props.item.id :
props.item) : 'bg-blue-200'}"
