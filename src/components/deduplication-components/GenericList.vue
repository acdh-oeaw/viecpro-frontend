<script setup lang="ts">
// Write this as a generic wrapper for lis.

import GroupListItem from "./GroupListItem.vue";
import SingleListItem from "./SingleListItem.vue";
import MemberListItem from "./MemberListItem.vue";
import SelectedGroupItem from "./SelectedGroupItem.vue";
import type { PropType } from "vue";
import type {
  ItemType,
  deduplicationItem,
} from "../../types/deduplication_types";
import SelectedSingleItem from "./SelectedSingleItem.vue";
import VorfinListItem from "./VorfinListItem.vue";

console.log("generic list component body parsed");
const props = defineProps<{
  item_type: ItemType;
  data: Array<deduplicationItem>;
}>();

const itemMap = {
  group: GroupListItem,
  single: SingleListItem,
  member: MemberListItem,
  vorfin: VorfinListItem,
  selectedGroup: SelectedGroupItem,
  selectedSingle: SelectedSingleItem,
};

const selectedComponent = itemMap[props.item_type];
</script>

<template>
  <div>
    <ul>
      <component
        :is="selectedComponent"
        v-for="item in props.data"
        :item="item"
        :key="item.id ? item.id : item"
      ></component>
    </ul>
  </div>
</template>
<style scoped></style>
