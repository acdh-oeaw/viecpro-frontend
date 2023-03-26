<script setup lang="ts">
import type { memberListItem } from "../../types/deduplication_types";

const props = defineProps<{
  item: memberListItem;
}>();

// todo: make on click function a generic composable, because it is mostly the same for singles and groups
</script>

<template>
  <li>{{ props.item.name }} - {{ props.item.id }}</li>
</template>
<style scoped></style>
