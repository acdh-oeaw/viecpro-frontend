<script setup lang="ts">
import type { memberListItem } from "../../types/deduplication_types";
import { ref, inject, computed, onMounted } from "vue";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import RelationListItem from "./RelationListItem.vue";
const props = defineProps<{
  member: Object;
}>();

const m = ref({});
const rels = ref([]);
// const { selectedGroups, selectedSingles, selectedMember, toggleEntity } =
//   inject("toggleCallback");

// function ListItemClickHandler(id: number): void {
//   console.log("caleld LIstItemClickHandler, calling toggelEnttity from there");
//   console.log("member list item clicked: ", id);
//   toggleEntity("member", id)
// }

// const isSelected = computed(() => {
//   return selectedMember.value === props.item.id;
// });

// todo: make on click function a generic composable, because it is mostly the same for singles and groups

onMounted(() => {
  m.value = props.member;
  rels.value = props.member.rels;
  console.log()
});
</script>

<template>
 
    <div v-if="m.id" class="ml-6">
      <Disclosure>
        <div class="flex">
          <DisclosureButton class="py-2">
            <h1 class="rounded-xl bg-gray-100 px-3 py-2">
              {{ m.fullname }} ({{ m.id }})
            </h1>
          </DisclosureButton>
          <!-- <button @click="toggleEntity('group', props.item)" class="bg-red-200 rounded-xl p-3 ml-4">X</button> -->
        </div>
        <DisclosurePanel class="text-gray-500">
            <RelationListItem v-for="rel in rels" :key="rel.id" :item="rel"></RelationListItem>
        </DisclosurePanel>
      </Disclosure>
    </div>
</template>
<style scoped></style>
