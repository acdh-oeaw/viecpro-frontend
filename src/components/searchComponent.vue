// component for searching within a selection of collections or a single
collection (typesense collection ) // results, filters, etc. should be external
components that change with the change of the selectedCollection // should be
used in the main search page (database search) and a stripped down version for
searching / filtering the relation tables within the genericEntityDetailView.

<script setup lang="ts">
// TODO: implement all types!
// import components
import entitiesResults from "./search-components/results/entitiesResults.vue";
import relationsResults from "./search-components/results/relationsResults.vue";
import entitiesFilters from "./search-components/filters/entitiesFilters.vue";

import relationsFilters from "./search-components/filters/relationsFilters.vue";
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from "@headlessui/vue";
// import utils, functions, etc.
import { ref, reactive, computed, watch } from "vue";
import relationsFiltersVue from "./search-components/filters/relationsFilters.vue";
import router from "../router";
import type { Ref } from "vue";

// import instant-search-stuff

import TypesenseInstantSearchAdapter from "typesense-instantsearch-adapter";
import Typesense from "typesense";

// reactive vars
const selectedCollection: Ref<string> = ref("personinstitution");
const placeholder: Ref<string> = ref("type to search");
const hitsPerPage: Ref<number> = ref(20);
// const model_type: Ref<String> = ref("")

// TODO: move collections to a seperate directory with settings / options or request them dynamically from typesense server
const collections = {
  Entities: [
    // { option: "ALL", value: "entities" },
    { option: "Person", value: "Person" },
    { option: "Institution", value: "Institution" },
    { option: "Work", value: "Work" },
    { option: "Event", value: "Event" },
  ],
  Relations: [
    // { option: "ALL", value: "relations" },
    { option: "PersonPerson", value: "PersonPerson" },
    { option: "PersonPlace", value: "PersonPlace" },
    { option: "PersonEvent", value: "PersonEvent" },
    { option: "PersonWork", value: "PersonWork" },
    { option: "personinstitution", value: "personinstitution" },
    { option: "InstitutionInstitution", value: "InstitutionInstitution" },
    { option: "InstitutionPlace", value: "InstitutionPlace" },
    { option: "InstitutionWork", value: "InstitutionWork" },
    { option: "InstitutionEvent", value: "InstitutionEvent" },
    { option: "PlacePlace", value: "PlacePlace" },
    { option: "PlaceWork", value: "PlaceWork" },
    { option: "PlaceEvent", value: "PlaceEvent" },
    { option: "WorkWork", value: "WorkWork" },
    { option: "WorkEvent", value: "WorkEvent" },
    { option: "EventEvent", value: "EventEvent" },
  ],
};

// function increaseHits(){
//     hitsPerPage.value += 1;
// }
// functions defined
function updateCollection(collection: string) {
  console.log("COl is now: ", collection);

  switch (collection) {
    case "entities":
      selectedCollection.value = collection;
      break;
    case "relations":
      selectedCollection.value = collection;
      break;

    case "personinstitution":
      selectedCollection.value = collection;
      break;

    case "PersonPlace":
      selectedCollection.value = collection;
      break;
    default:
      alert("key not found in collections in switch");
  }
}

function redirectToEntity(ent_type: string, ent_id: string, ent_model: string) {
  const route = `/${ent_type}/${ent_model}/detail/${ent_id}`;
  router.push(route);
}

function showClient() {
  console.log(typesenseInstantSearchAdapter);
}
// search Client logic

const additionalSearchParameters = {
  query_by: "source.name, target.name",
};
let params: string;

watch(selectedCollection, () => {
  console.log("selectdCollection is", selectedCollection.value);
  switch (selectedCollection.value) {
    case "entities":
      params = "name";
      console.log("changed to entity params");
      break;
    case "relations":
      params = "ent_a, relation_type";
      console.log("changed to relation params");
      break;
    case "personinstitution":
      params = "source.name, target.name";
      console.log("changed to personinstitution params");
      break;

    case "PersonPlace":
      params = "source.name, target.name";
      break;
    default:
      console.log("in searchParam switch, could not find right case for: ");
  }

  console.log("params is now: ", params);
  additionalSearchParameters.query_by = params;
  typesenseInstantSearchAdapter.configuration.additionalSearchParameters.highlight_full_fields =
    params;
  placeholder.value = `search in ${selectedCollection.value}`;
}); // guess I need to make this reactive to change in sync with collection // think even computed would do

const typesenseInstantSearchAdapter = new TypesenseInstantSearchAdapter({
  server: {
    apiKey: "xyz", // Be sure to use an API key that only allows searches, in production
    nodes: [
      {
        host: "localhost",
        port: 8109,
        protocol: "http",
      },
    ],
  },
  // The following parameters are directly passed to Typesense's search API endpoint.
  //  So you can pass any parameters supported by the search endpoint below.
  //  queryBy is required.
  //  filterBy is managed and overridden by InstantSearch.js. To set it, you want to use one of the filter widgets like refinementList or use the `configure` widget.
  // collectionSpecificSearchParameters: {
  //   relations: { query_by: "ent_a, relation_type,  ent_b" },
  //   entities: { query_by: "name" },
  // },
  additionalSearchParameters: additionalSearchParameters,
  //   additionalSearchParameters: {
  //     query_by: "name, title, first_name",
  //   },
});

const searchClient = typesenseInstantSearchAdapter.searchClient;
</script>
<template>
  <ais-instant-search
    :search-client="searchClient"
    :index-name="selectedCollection"
  >
    <div
      class="bg-yellow-100 min-h-20 w-screen flex py-10 place-content-between px-60"
    >
      <div id="buttons-div" class="flex-col bg-blue-200">
        <div class="flex my-4 place-items-center">
          <label for="select-collection-listbox" class="mr-4"
            >Selected collection:
          </label>

          <!-- TODO: Accesability: focus and keyboard navigation of opened listbox needs implementation  -->
          <Listbox
            v-model="selectedCollection"
            id="select-collection-listbox"
            as="div"
          >
            <ListboxButton>{{ selectedCollection }}</ListboxButton>

            <ListboxOptions
              class="absolute bg-white rounded-2xl px-4 py-2 shadow-2xl shadow-black -translate-x-9 translate-y-2"
            >
              <!-- TODO: make variable names concrete -->
              <template
                v-for="(values, key) in collections"
                :key="key + '_listboxoption'"
              >
                <ListboxOption
                  :value="key.toLowerCase()"
                  class="hover:bg-green-100 hover:cursor-pointer"
                >
                  {{ key }}</ListboxOption
                >

                <ListboxOption
                  v-for="val in values"
                  :key="val.value"
                  :value="val.value"
                  class="hover:bg-green-100 hover:cursor-pointer pl-4"
                >
                  {{ val.option }}
                </ListboxOption>
              </template>
            </ListboxOptions>
          </Listbox>
        </div>
        <div class="flex bg-green-200">
          <!-- <button @click="updateCollection('entities')">Entities</button>
          <button @click="updateCollection('personinstitution')">PI</button>

          <button @click="updateCollection('relations')">Relations</button> 
          <button @click="showClient()">ShowClient</button> -->
          <!-- <button @click="increaseHits()">AddResults</button> -->
          <label for="set-hits-per-page" class="mr-4">Results per page: </label>
          <input
            type="text"
            v-model="hitsPerPage"
            id="set-hits-per-page"
            class="border-2 border-black rounded-xl px-4 text-center w-20"
          />
        </div>
      </div>
      <div>
        <ais-search-box :placeholder="placeholder">
          <!-- <template v-slot:submit-icon>
                                                                                                                                                                                                                                                                                                                                                                                                                                                              <img src="../assets/suche.png" alt="" class="search_icon" />
                                                                                                                                                                                                                                                                                                                                                                                                                                                            </template> -->
        </ais-search-box>
      </div>
    </div>
    <div class="bg-blue-100 w-screen flex" id="result-and-filter-section">
      <div
        class="bg-gray-400 w-100 h-auto min-h-100 px-20 py-10"
        id="filter-section"
      >
        <div v-if="selectedCollection === 'entities'">Entities Filter</div>
        <div v-else-if="selectedCollection === 'relations'">
          <relationsFilters></relationsFilters>
        </div>
        <div v-else-if="selectedCollection === 'personinstitution'">
          <p>PersonInstitution-Filters</p>
        </div>
      </div>

      <div id="result-section" class="mx-auto px-60 py-10 bg-red-600">
        <ais-configure :hits-per-page.camel="hitsPerPage" />

        <ais-hits>
          <template v-slot="{ items }">
            <table>
              <tr>
                <th>name</th>
                <th>reltype</th>
              </tr>
              <tr
                v-for="item in items"
                :key="item.id"
                align="left"
                style="min-width: 50%"
              >
                <td>
                  <ais-highlight
                    v-if="selectedCollection == 'relations'"
                    :hit="item"
                    attribute="ent_a"
                    class="entity_tag hover:cursor-pointer hover:underline"
                    @click="redirectToEntity('relations', item.id, item.model)"
                  ></ais-highlight>
                  <ais-highlight
                    v-if="selectedCollection == 'entities'"
                    :hit="item"
                    attribute="name"
                    class="entity_tag hover:cursor-pointer hover:underline"
                    @click="redirectToEntity('entities', item.id, item.model)"
                  ></ais-highlight>
                  <ais-highlight
                    v-if="selectedCollection == 'personinstitution' || selectedCollection == 'PersonPlace'"
                    :hit="item"
                    attribute="source.name"
                    class="entity_tag hover:cursor-pointer hover:underline"
                  ></ais-highlight>
                </td>
                <td>
                  <ais-highlight
                    v-if="selectedCollection == 'relations'"
                    :hit="item"
                    attribute="relation_type"
                    class="entity_tag"
                  ></ais-highlight>
                  <ais-highlight
                    v-if="selectedCollection == 'entities'"
                    :hit="item"
                    attribute="start_date_written"
                    class="entity_tag"
                  ></ais-highlight>
                  <ais-highlight
                    v-if="selectedCollection == 'personinstitution' || selectedCollection == 'PersonPlace'"
                    :hit="item"
                    attribute="target.name"
                    class="entity_tag hover:cursor-pointer hover:underline"
                  ></ais-highlight>
                </td>
              </tr>
            </table>
          </template>
        </ais-hits>
      </div>
      <div></div>
    </div>
  </ais-instant-search>
</template>

<style scoped>
/* TODO: this style section must be scoped again, and styling of the input must move in the main css file */

button {
  border-radius: 25rem;
  @apply bg-primary-100 px-4 py-1 text-white mx-1;
}
</style>
