<script setup lang="ts">
import type { groupListItem } from "../../types/deduplication_types";
import { ref, inject, onMounted, onBeforeMount, watch, reactive } from "vue";
import type { Ref } from "vue";
import { isTemplateElement } from "@babel/types";

import MemberGroupDisplayItem from "./MemberGroupDisplayItem.vue";

import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
const props = defineProps<{
  item: groupListItem | number;
}>();

const {
  selectedGroups,
  selectedSingles,
  selectedMember,
  toggleEntity,
  fetchFromAPI,
} = inject("toggleCallback");

function ListItemClickHandler(id: number): void {
  console.log("caleld LIstItemClickHandler, calling toggelEnttity from there");
  toggleEntity("group", id);
}
// todo: make on click function a generic composable, because it is mostly the same for singles and groups

const data = ref({});
const group = ref({});
const members = ref([]);
function LoadData() {
  console.log("load data called");
  fetch(import.meta.env.VITE_APIS_API_URL+"dubletten/group_api/fetchGroupByID/", {
    method: "POST",
    //credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id: props.item }),
  })
    .then((response) => response.json())
    .then((json) => {
      console.log("received: ", json);
      // D.value = json;
      data.value = json.data;
      group.value = json.data.group;
      members.value = json.data.members;
    });
}



onBeforeMount(() => {
  console.log("in on before mount");
  console.log(props, props.item);
  LoadData();
});
</script>

<template>
  <div v-if="data.group">
    <Disclosure>
      <div class="flex"> 
      <DisclosureButton class="py-2">
        <h1 class="rounded-xl bg-gray-200 px-3 py-2">
          {{ group.name }} ({{ group.id }})
        </h1>
     
      </DisclosureButton>
      <button @click="toggleEntity('group', props.item)" class="bg-red-200 rounded-xl p-3 ml-4">X</button>

      </div>
      <DisclosurePanel class="text-gray-500">
      <MemberGroupDisplayItem v-for="m in members" :key="m.id" :member="m"></MemberGroupDisplayItem>
      </DisclosurePanel>
    </Disclosure>
  </div>

  <!-- {{D ? D.group.name : "loading"}} ({{ D ? D.group.id : "loading" }}) -->
</template>
<style scoped></style>

// :class="{selectedGroups.value.includes(props.item.id ? props.item.id :
props.item) : 'bg-blue-200'}"
