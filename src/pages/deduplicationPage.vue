<script setup lang="ts">
import {
  ref,
  reactive,
  watchEffect,
  watch,
  createApp,
  h,
  compile,
  render,
} from "vue";

import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";
import GenericList from "../components/deduplication-components/GenericList.vue";
import type { genderOptions } from "../types/apis_types";
import type {
  groupListItem,
  singleListItem,
  requestMap,
  itemIDArray,
  ItemType,
  Group,
} from "../types/deduplication_types";
import type { Ref } from "vue";

const apiMap: requestMap = {
  fetchGroupSuggestions: {
    // TODO: refactor url into endpoint, and list of params (like [action, id] to be parsed into endpoint / action / id)
    // TODO: in the fetch Method wrapper, construct the url from base-url / endpoint / kwarg-array.
    url: "",
    method: "GET",
    callback: console.log,
  },
  fetchGroupByID: {
    url: "http//:127.0.0.1:8000/dubletten/vue_test/fetchAllGroups",
    method: "GET",
    callback: console.log,
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
const selectedGender: Ref<genderOptions> = ref("Male");

// TODO: make two nested ref-objects for Selections and boolean SHOW flags.
// singles are selected from the singles tab
const selectedSingles: Ref<itemIDArray> = ref([]);

// groups are selected from the groups tab
const selectedGroups: Ref<groupListItem[]> = ref([]);

// members are either singles or persons in groups, that are selected in displayed groups and singles.
const selectedMembers: Ref<itemIDArray> = ref([]);
const groupDisplay: Ref<Array<Group>> = ref([]);

// handle this at the end. because this involves restructuring the page layout to use a flex layout, instead of bootstrap-grid
const showBrowser: Ref<boolean> = ref(true);
const showNavbar: Ref<boolean> = ref(true);
const showRelations: Ref<boolean> = ref(true);

// this are the refs for the search-inputs
const groupNameSearch = ref("group name");

function innerTest(data) {
  console.log(data);
}

function filterGroups() {
  let terms: Array<string> = groupNameSearch.value.split(" ");
  console.log("terms", terms);
  Groups.value = allGroups.filter((item) => {
    let res: boolean = terms.every((term) => item.name.includes(term));
    return res;
  });
}

// make this a composable
// TODO: replace any here later with pre-defined data object interfaces to be send with POST request
function fetchFromAPI(
  tag: keyof requestMap,
  data: { [key: string]: any } = { test: "no data send placeholder" }
) {
  // set method in apiMap

  fetch(apiMap[tag]["url"], {
    method: "POST",
    //credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((json) => apiMap[tag]["callback"](json));
}

function updateGroupsList(data) {
  console.log("updateGroupsList data received: ", data);
  let groups = data.groups;
  Groups.value = groups;
  allGroups = groups;
}

function selectionResponse(vue_ref: Ref, id: number) {
  console.log("reached selectionResponse");
  switch (vue_ref) {
    case selectedGroups:
      console.log("cae selected Groups matched");
      fetchFromAPI("fetchGroupByID", (data = { id: id }));
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
  console.log("reached togllge entity: ", type, id);

  switch (type) {
    case "single":
      updateSelection(selectedSingles, id);
      break;

    case "group":
      updateSelection(selectedGroups, id);
      break;

    case "member":
      updateSelection(selectedMembers, id);
      break;

    default:
      alert(`ERROR in toggleEnttiy: type matches no case ${type}`);
  }
}

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

function log(id: number) {
  //console.log(this, event, event.target);
  // TODO: fix deprecated event.target implementation
  event.target.style =
    "background-color:" +
    (selectedGroups.value.includes(id) ? "blue" : "grey") +
    ";";
}

function unlog(id) {
  //console.log("unlog called", id)
  event.target.style =
    "background-color: " +
    (selectedGroups.value.includes(id) ? "lightblue" : "inherit") +
    ";";
}
</script>
<template>
  <div class="w-vw bg-red-400 flex-col">
    <div class="w-vw" id="dedup-header">Results & Hedaer</div>
    <div class="w-vw bg-blue-200 flex justify-between" id="dedup-body">
      <div class="w-vw flex-col" id="dedup-browser-section">
        <h1>Browser Header</h1>
        <div>
          <TabGroup>
            <TabList>
              <Tab class="tab-standard">Groups</Tab>
              <Tab class="tab-standard">Singles</Tab>
              <Tab class="tab-standard">Marked</Tab>
            </TabList>
            <TabPanels>
              <!-- TODO: implement correct loading logic for all components in a reusable fashion -->
              <TabPanel class="tab-panel-standard">
                <div class="bg-red-300">A</div>
              </TabPanel>
              <TabPanel class="tab-panel-standard">
                <div class="bg-yellow-300">B</div>
              </TabPanel>
              <TabPanel class="tab-panel-standard">
                <div class="bg-green-300">C</div>
              </TabPanel>
            </TabPanels>
          </TabGroup>
        </div>
      </div>
      <div class="w-vw">Selection</div>
      <button
        class="border rounded-xl h-4 p-3 my-auto"
        @click="fetchFromAPI('fetchGroups')"
      >
        CallAPI
      </button>
      <div class="w-vw">Info</div>
    </div>
  </div>
  <div class="container-fluid w-100 d-flex flex-column" id="tool_page_vue_app">
    <!-- display results of merge and remerge here -->
    <div class="text-center" id="result-section">Results</div>
    <!-- this should display column layout -->
    <div class="d-flex flex-row justify-content-between" id="editor-container">
      <!-- display browser here -->
      <!-- v-if="showBrowser" removed for first display -->
      <div id="browser-section">
        <div class="" id="browser-header">
          <!-- use headass ui tabs here -->
          <div id="manu_navigation">
            <ul class="nav nav-tabs" id="myTab" role="tablist">
              <li class="nav-item" role="presentation">
                <a
                  class="nav-link active"
                  id="groups-tab"
                  data-toggle="tab"
                  href="#groups_section"
                  role="tab"
                  >Groups</a
                >
              </li>
              <li class="nav-item" role="presentation">
                <a
                  class="nav-link"
                  id="singles-tab"
                  data-toggle="tab"
                  href="#singles_section"
                  role="tab"
                  >Singles</a
                >
              </li>
              <li class="nav-item" role="presentation">
                <a
                  class="nav-link"
                  id="marked-tab"
                  data-toggle="tab"
                  href="#marked_section"
                  @click="fetchFromAPI('fetchAllNotes')"
                  role="tab"
                  >Marked</a
                >
              </li>
            </ul>
          </div>
        </div>
        <div id="browser-body">
          <div class="tab-content" id="myTabContent">
            <div
              class="tab-pane fade show active"
              id="groups_section"
              role="tabpanel"
            >
              <label>Gender:</label>
              <span
                class="d-flex justify-content-start align-items-center mb-3"
              >
                <div class="form-check form-check-inline mx-1">
                  <!-- use headless ui checkbox here -->
                  <input
                    v-model="selectedGender"
                    checked
                    class="form-check-input"
                    type="radio"
                    name="genderCheckGroup"
                    id="genderCheckboxGROUPMale"
                    value="Male"
                  />
                  <label
                    class="form-check-label mr-2"
                    for="genderCheckboxGROUPMale"
                  >
                    Male
                  </label>
                </div>
                <div class="form-check form-check-inline mx-1">
                  <input
                    v-model="selectedGender"
                    class="form-check-input"
                    type="radio"
                    name="genderCheckGroup"
                    id="genderCheckboxGROUPFemale"
                    value="Female"
                  />
                  <label
                    class="form-check-label mr-2"
                    for="genderCheckboxGROUPFemale"
                  >
                    Female
                  </label>
                </div>
                <div class="form-check form-check-inline mx-1">
                  <input
                    v-model="selectedGender"
                    class="form-check-input"
                    type="radio"
                    name="genderCheckGroup"
                    id="genderCheckboxGROUPOther"
                    value="Other"
                  />
                  <label
                    class="form-check-label mr-2"
                    for="genderCheckboxGROUPOther"
                  >
                    Other/None
                  </label>
                </div>
              </span>
              <span
                class="d-flex justify-content-start align-items-center mb-3"
              >
                <label class="m-0 mr-4 p-1 my-2"
                  >Status: {{ selectedGender }}</label
                >
                <!-- 
                {% for b in Buttons %} {% if forloop.first %}
                <label
                  class="border border-dark rounded-left m-0 my-2 p-1 my_checkbox"
                  value="undefined"
                  onclick="toggleStatusButton('{{b.id}}')"
                  id="status_button_filter_{{b.id}}"
                  style="background-color: inherit"
                  ><small>{{ b.short }}</small></label
                >
                {% elif forloop.last %}
                <label
                  class="border border-dark rounded-right m-0 my-2 p-1 my_checkbox"
                  value="undefined"
                  onclick="toggleStatusButton('{{b.id}}')"
                  id="status_button_filter_{{b.id}}"
                  style="background-color: inherit"
                  ><small>{{ b.short }}</small></label
                >

                {% else %}
                <label
                  class="border border-dark m-0 my-2 p-1 my_checkbox"
                  value="undefined"
                  onclick="toggleStatusButton('{{b.id}}')"
                  id="status_button_filter_{{b.id}}"
                  style="background-color: inherit"
                  ><small>{{ b.short }}</small></label
                >

                {% endif %} {% endfor %} -->
              </span>

              <span class="d-flex justify-content-center align-items-center">
                <input
                  class="form-control mr-4 rounded-right"
                  type="search"
                  placeholder="Search for Groups"
                  v-model="groupNameSearch"
                  @keyup.enter="filterGroups()"
                  id="search-groups"
                />
              </span>
              <span
                class="d-flex px-1 my-2 justify-content-start align-content-center"
                id="group_label_span"
                ><label class="mr-2">Count:</label
                ><label id="group_count_container">{{
                  Groups.length
                }}</label></span
              >

              <div
                class="container-fluid mt-5"
                style="overflow-y: scroll; height: 80vh"
                id="group_list_container"
              >
                <GenericList
                v-if="allGroups"
                  class="bg-blue-200"
                  :item_type="'group'"
                  :data="Groups"
                ></GenericList>
                <!-- <ul>
                  <template v-for="group in Groups" :key="group.id">
                    <GroupListItem :item="group"></GroupListItem> -->
                <!-- <li>
                      <span
                        @click="toggleEntity('GROUP', group.id)"
                        @mouseover="
                          () => {
                            log(group.id);
                          }
                        "
                        @mouseleave="unlog(group.id)"
                        :style="{
                          'background-color': selectedGroups.includes(group.id)
                            ? 'lightblue'
                            : 'inherit',
                        }"
                      >
                        {{ group.name }}, ( {{ group.id }} )</span
                      >
                    </li> -->
                <!-- </template>
                </ul> -->
              </div>
            </div>
            <div class="tab-pane fade" id="singles_section" role="tabpanel">
              <label>Gender:</label>
              <span
                class="d-flex justify-content-start align-items-center mb-3"
              >
                <div class="form-check form-check-inline mx-1">
                  <input
                    checked
                    class="form-check-input"
                    type="radio"
                    name="genderCheckSingle"
                    id="genderCheckboxSINGLEMale"
                    value="Male"
                  />
                  <label
                    class="form-check-label mr-2"
                    for="genderCheckboxSINGLEMale"
                  >
                    Male
                  </label>
                </div>
                <div class="form-check form-check-inline mx-1">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="genderCheckSingle"
                    id="genderCheckboxSINGLEFemale"
                    value="Female"
                  />
                  <label
                    class="form-check-label mr-2"
                    for="genderCheckboxSINGLEFemale"
                  >
                    Female
                  </label>
                </div>
                <div class="form-check form-check-inline mx-1">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="genderCheckSingle"
                    id="genderCheckboxSINGLEOther"
                    value="Other"
                  />
                  <label
                    class="form-check-label mr-2"
                    for="genderCheckboxSINGLEOther"
                  >
                    Other/None
                  </label>
                </div>
              </span>
              <span
                class="d-flex px-1 my-2 justify-content-start align-content-center"
                ><input
                  aria-label="Search"
                  class="form-control mr-4 rounded-right"
                  id="input_search"
                  placeholder="Name"
                  type="search" />
                <input
                  aria-label="Search"
                  class="form-control mr-4 rounded-right"
                  id="filter_first_name"
                  placeholder="First Name"
                  type="search"
              /></span>
              <span
                class="d-flex px-1 my-2 justify-content-start align-content-center"
                ><label class="mr-2">Count:</label
                ><label id="filtered_count">0</label></span
              >
              <div
                class="container-fluid pt-2"
                style="overflow-y: scroll; height: 80vh"
              >
                <ul class="list-group mt-3" id="singles_container">
                  <!-- <ul class="list-group" id="all_singles_list">
                        {% for s in singles %}
                        <li class="list-group-item single-list-item list-group-item-sm d-flex justify-content-between align-items-center" id="single_list_item_{{s.id}}">
                            {{s.person.name}}, {{s.person.first_name}}
                        </li>
                    </ul>
                        {% endfor %} -->
                </ul>
              </div>
            </div>
            <div class="tab-pane fade" id="marked_section" role="tabpanel">
              Not implemented yet
            </div>
          </div>
        </div>
      </div>
      <!-- display selected entities here -->
      <div id="selected-section">
        <button class="button" @click="fetchFromAPI('fetchGroups')">
          TestAPI
        </button>
        <!-- <ul>
          <template v-for="group in selectedGroups" :key="group">
            <li>
              <span @click="toggleEntity('group', group)"> {{ group }}</span>
            </li>
          </template>
        </ul> -->

        <div id="selected-groups"></div>
      </div>
      <!-- display suggestions, metainfo, details, etc in here -->
      <div id="info-section">Info</div>
    </div>
  </div>
</template>
<style scoped></style>
