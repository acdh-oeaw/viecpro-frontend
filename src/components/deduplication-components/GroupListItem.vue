<script setup lang="ts">
import type { groupListItem } from "../../types/deduplication_types";

const props = defineProps<{
  item: groupListItem;
}>();
console.log("grooup List item component body parsed");

// todo: make on click function a generic composable, because it is mostly the same for singles and groups
</script>

<template>
  <li v-if="props.item" class="bg-red-200">{{ props.item.name ? props.item.name : "no name" }} - {{ props.item.id }}</li>
</template>
<style scoped></style>
