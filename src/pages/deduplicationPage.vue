<script setup lang="ts">
import { ref, reactive, watchEffect, watch, provide } from "vue";

import {
  TabGroup,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  RadioGroup,
  RadioGroupLabel,
  RadioGroupOption,
} from "@headlessui/vue";
import GenericList from "../components/deduplication-components/GenericList.vue";
import type { genderOptions } from "../types/apis_types";
import type {
  groupListItem,
  singleListItem,
  memberListItem,
  vorfinListItem,
  requestMap,
  itemIDArray,
  ItemType,
  Group,
} from "../types/deduplication_types";
import type { Ref } from "vue";

const selectedTab: Ref<string> = ref("group");
const tabList = ["group", "single", "member", "vorfin", "notes"];
const apiMap: requestMap = {
  fetchGroupSuggestions: {
    // TODO: refactor url into endpoint, and list of params (like [action, id] to be parsed into endpoint / action / id)
    // TODO: in the fetch Method wrapper, construct the url from base-url / endpoint / kwarg-array.
    url: "",
    method: "GET",
    callback: console.log,
  },
  fetchGroupByID: {
    url: "http://localhost:8000/dubletten/group_api/fetchGroupByID/",
    method: "POST",
    callback: console.log,
  },
  searchItems: {
    url: "http://localhost:8000/dubletten/group_api/searchItems/",
    method: "POST",
    callback: searchResponseCallback,
  },
  removeMemberFromGroup: {
    url: "",
    method: "GET",
    callback: console.log,
  },
  updateGroupName: {
    url: "",
    method: "GET",
    callback: console.log,
  },
  fetchSingle: {
    url: "",
    method: "GET",
    callback: console.log,
  },
  fetchSingles: {
    url: "",
    method: "GET",
    callback: console.log,
    //callback: console.log,
  },
  fetchGroups: {
    url: "http://localhost:8000/dubletten/group_api/fetchGroups/",
    method: "GET",
    callback: updateGroupsList,
  },
  fetchAllNotes: {
    url: "",
    method: "GET",
    callback: console.log,
  },
};

const Singles: Ref<Array<singleListItem>> = ref([]);
let allGroups: Array<groupListItem> = [];
const Groups: Ref<Array<groupListItem>> = ref([]);
const Members: Ref<Array<memberListItem>> = ref([]);
const Vorfins: Ref<Array<vorfinListItem>> = ref([]);

const selectedGender: Ref<genderOptions> = ref("Male");

// TODO: make two nested ref-objects for Selections and boolean SHOW flags.
// singles are selected from the singles tab
const selectedSingles: Ref<itemIDArray> = ref([]);

// groups are selected from the groups tab
const selectedGroups: Ref<groupListItem[]> = ref([]);

// members are either singles or persons in groups, that are selected in displayed groups and singles.
const selectedMember: Ref<number> = ref(-2);
const selectedVorfin: Ref<number> = ref(-2);

const groupDisplay: Ref<Array<Group>> = ref([]);

// handle this at the end. because this involves restructuring the page layout to use a flex layout, instead of bootstrap-grid
const showBrowser: Ref<boolean> = ref(true);
const showNavbar: Ref<boolean> = ref(true);
const showRelations: Ref<boolean> = ref(true);

// this are the refs for the search-inputs
const nameSearch: Ref<string> = ref("");
const firstNameSearch: Ref<string> = ref("");
const selectedItems = ref({
  "groups": {},
  "singles": {},
});

provide("toggleCallback", {
  selectedGroups,
  selectedSingles,
  selectedMember,
  selectedVorfin,
  toggleEntity,
  fetchFromAPI,
});

function innerTest(data) {
  console.log(data);
}

function filterGroups() {
  let terms: Array<string> = nameSearch.value.split(" ");
  console.log("terms", terms);
  Groups.value = allGroups.filter((item) => {
    let res: boolean = terms.every((term) => item.name.includes(term));
    return res;
  });
}

function searchResponseCallback(data) {
  switch (data.type) {
    case "group":
      Groups.value = data.results;
      console.log("updated Groups data");
      break;

    case "single":
      console.log("single branch in switch reached");
      Singles.value = data.results;
      break;

    case "member":
      Members.value = data.results;
      break;

    case "vorfin":
      Vorfins.value = data.results;
      break;

    default:
      alert("no case matched in serach response callback");
  }
}
function performSearch() {
  console.log("perfrom search called");
  // this is the entry point for all request that return lists of data.
  // prepares data to be send in POST body with request from current ref-states.
  let data = {
    item_type: selectedTab.value,
    terms: {
      name: nameSearch.value.split(" "),
      first_name: firstNameSearch.value.split(" "),
    },
    gender: selectedGender.value,
    status: "Not implemented yet",
    vorfin: "placeholder for now",
  };

  console.log("data = ", data);

  // call to fetch function
  fetchFromAPI("searchItems", data);
}

// make this a composable
// TODO: replace any here later with pre-defined data object interfaces to be send with POST request
function fetchFromAPI(
  tag: keyof requestMap,
  data: { [key: string]: any } = { test: "no data send placeholder" }
): void {
  // set method in apiMap
  console.log("fetch from api called with: ", tag, data);
  fetch(apiMap[tag]["url"], {
    method: "POST",
    //credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((json) => {console.log("received: ", json); return apiMap[tag]["callback"](json);})
}

function updateGroupsList(data) {
  // TODO: remove, this is not used any longer
  console.log("updateGroupsList data received: ", data);
  let groups = data.groups;
  Groups.value = groups;
  allGroups = groups;
}

function selectionResponse(vue_ref: Ref, id: number) {
  console.log("reached selectionResponse");
  switch (vue_ref) {
    case selectedGroups:
      console.log("casee selected Groups matched");
      //fetchFromAPI("fetchGroupByID", { id: id });
      break;

    case selectedSingles:
      console.log("reached singles in selection response");
      break;
    default:
      alert("reached default in selectionResponse");
  }
}

function updateSelection(vue_ref: Ref, id: number) {
  /**
   * Helper function that adds or removes an items id from the respective ref that holds
   * all selected items of this type. Type distinction is handled prior to calling this function in
   * toggleEntity.
   */

  if (vue_ref.value.includes(id)) {
    let idx: number = vue_ref.value.indexOf(id);
    vue_ref.value.splice(idx, 1);
    
  } else {
    vue_ref.value.push(id);
    selectionResponse(vue_ref, id);
  }
}

function toggleEntity(type: ItemType, id: number): void {
  /**
                Generic callback when an item representing an entity (Single, Group, Group-Member) is clicked:
        
                Calls the generic updateSelection function for that item and adds or removes it from the respective ref.
                */
  console.log("reached toggle entity: ", type, id);

  switch (type) {
    case "single":
      updateSelection(selectedSingles, id);
      break;

    case "group":
      updateSelection(selectedGroups, id);
      break;

    case "member":
      selectedMember.value == id
        ? (selectedMember.value = -2)
        : (selectedMember.value = id);
      break;

    case "vorfin":
      selectedVorfin.value == id
        ? (selectedVorfin.value = -2)
        : (selectedVorfin.value = id);
      break;

    default:
      alert(`ERROR in toggleEnttiy: type matches no case ${type}`);
  }
}

watch(selectedGroups.value, () => {
  console.log("selected Groups", selectedGroups.value);
});

watch(selectedMember, () => {
  console.log("selected Member", selectedMember.value);
});

watch(selectedSingles.value, () => {
  console.log("selected Singles", selectedSingles.value);
});

watch(selectedGender, () => {
  console.log("selected Gender: ", selectedGender.value);
  performSearch();
});

watch(selectedTab, () => {
  console.log("selected Tab: ", selectedTab.value);
});
function toggleStatusButton() {
  // implement again
}

function toggleBrowser() {
  // implement
}

function toggleNavbar() {
  // implement
}

function togglePersonNames() {
  //implement
  //TODO: check with update of PersonProxy models to implement name fetching again
}

function closeTable() {}

function mergeGroups() {}

function createNewGroup() {}

function clearSuggestions() {}

function pollCeleryTaskStatus() {}

function removeGroupMember() {}
</script>
<template>
  <div class="m-0 p-0 bg-red-400 flex-col">
    <div class="m-0 p-0" id="dedup-header">Results & Hedaer</div>
    <div
      class="min-h-screen bg-blue-200 flex justify-between"
      id="dedup-body"
    >
      <div class="flex-col" id="dedup-browser-section">
        <h1>Browser Header</h1>
        <div>
          <TabGroup
            @change="
              (idx) => {
                selectedTab = tabList[idx];
              }
            "
          >
            <TabList>
              <Tab class="tab-standard">Groups</Tab>
              <Tab class="tab-standard">Singles</Tab>
              <Tab class="tab-standard">Dubletten</Tab>
              <Tab class="tab-standard">Vorfins</Tab>

              <Tab class="tab-standard">Notes</Tab>
            </TabList>
            <TabPanels>
              <div class="flex-col pt-8 pb-4" id="search-items-section">
                <div class="flex" id="name-search-container">
                  <div class="flex-col">
                    <div class="flex justify-between">
                      <label class="pr-14" for="main-search-field"
                        >Name:
                      </label>
                      <input
                        type="text"
                        id="main-search-field"
                        v-model="nameSearch"
                        @keyup.enter="performSearch"
                      />
                    </div>
                    <div
                      v-if="
                        ['single', 'member', 'vorfin'].includes(selectedTab)
                      "
                      class="my-2"
                    >
                      <label class="mr-4" for="main-search-field-first-name"
                        >First-name:
                      </label>

                      <input
                        type="text"
                        id="main-search-first-name"
                        v-model="firstNameSearch"
                        @keyup.enter="performSearch"
                      />
                    </div>
                  </div>
                  <div class="p-auto m-auto">
                    <button
                      class="px-4 py-2 rounded-xl bg-blue-300 hover:bg-blue-600"
                      for="main-serach-field"
                      @click="performSearch"
                    >
                      Search
                    </button>
                  </div>
                </div>

                <RadioGroup v-model="selectedGender">
                  <div class="flex" id="gender-selection-inline">
                    <RadioGroupLabel class="mr-4">Gender: </RadioGroupLabel>
                    <div class="flex">
                      <RadioGroupOption v-slot="{ checked }" value="Male">
                        <input
                          class="clickable"
                          type="radio"
                          name="genderCheckGroup"
                          id="gender-option-male"
                        />
                        <label class="mr-2 clickable" for="gender-option-male">
                          Male
                        </label>
                      </RadioGroupOption>
                      <RadioGroupOption v-slot="{ checked }" value="Female">
                        <input
                          class="clickable"
                          type="radio"
                          name="genderCheckGroup"
                          id="gender-option-female"
                        />
                        <label
                          class="mr-2 clickable"
                          for="gender-option-female"
                        >
                          Female
                        </label>
                      </RadioGroupOption>
                      <RadioGroupOption v-slot="{ checked }" value="Other">
                        <input
                          class="clickable"
                          type="radio"
                          name="genderCheckGroup"
                          id="gender-option-other"
                        />
                        <label class="mr-2 clickable" for="gender-option-other">
                          Other
                        </label>
                      </RadioGroupOption>
                      <RadioGroupOption v-slot="{ checked }" value="All">
                        <input
                          class="clickable"
                          type="radio"
                          name="genderCheckGroup"
                          id="gender-option-all"
                        />
                        <label class="mr-2 clickable" for="gender-option-all">
                          All
                        </label>
                      </RadioGroupOption>
                  
                    </div>
                  </div>
                </RadioGroup>
              </div>
              <!-- TODO: implement correct loading logic for all components in a reusable fashion -->
              <TabPanel class="tab-panel-standard">
                <div class="bg-red-300">
                  <GenericList
                    class="bg-blue-200"
                    :item_type="'group'"
                    :data="Groups"
                  ></GenericList>
                </div>
              </TabPanel>
              <TabPanel class="tab-panel-standard">
                <GenericList
                  class="bg-blue-200"
                  :item_type="'single'"
                  :data="Singles"
                ></GenericList>
              </TabPanel>
              <TabPanel class="tab-panel-standard">
                <GenericList
                  class="bg-blue-200"
                  :item_type="'member'"
                  :data="Members"
                ></GenericList>
              </TabPanel>
              <TabPanel class="tab-panel-standard">
                <GenericList
                  class="bg-blue-200"
                  :item_type="'vorfin'"
                  :data="Vorfins"
                ></GenericList>
              </TabPanel>
              <TabPanel class="tab-panel-standard">
                <div class="bg-green-300">E</div>
              </TabPanel>
            </TabPanels>
          </TabGroup>
        </div>
      </div>
      <div class="flex-col">
        <!-- <button
          class="border rounded-xl bg-gray-200 p-2 m-4"
          @click="fetchFromAPI('fetchGroups', { test: 'empty data attrib' })"
        >
          CallAPI
        </button> -->
        <h1 v-if="selectedGroups.length">Groups:</h1>
        <GenericList
          :item_type="'selectedGroup'"
          :data="selectedGroups"
        ></GenericList>
        <h1 v-if="selectedSingles.length">Singles:</h1>
        <!-- TODO: refactor: this is just one item, so no need to wrap it in a list -->
        <GenericList
          :item_type="'selectedSingle'"
          :data="selectedSingles"
        ></GenericList>
      </div>

      <div class="">Info</div>
    </div>
  </div>
</template>
<style scoped></style>
