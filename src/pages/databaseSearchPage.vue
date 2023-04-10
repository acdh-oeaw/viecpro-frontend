// component for searching within a selection of collections or a single collection (typesense
collection ) // results, filters, etc. should be external components that change with the change of
the selectedCollection // should be used in the main search page (database search) and a stripped
down version for searching / filtering the relation tables within the genericEntityDetailView.

<script setup lang="ts">
// TODO: implement all types!
// import components
// these components should be handled by the lookup...
import entitiesResults from '../components/search-components/results/entitiesResults.vue';
import relationsResults from '../components//search-components/results/relationsResults.vue';
import entitiesFilters from '../components//search-components/filters/entitiesFilters.vue';
import genericResultsTable from '../components//search-components/results/genericResultsTable.vue';
import usePrefixedCollection from '@/composables/usePrefixedCollection';
import { collectionsLookup } from '@/lookups.js';

import relationsFilters from '../components//search-components/filters/relationsFilters.vue';
import { Listbox, ListboxButton, ListboxOptions, ListboxOption } from '@headlessui/vue';
// import utils, functions, etc.
import { ref, reactive, computed, watch, onBeforeMount, shallowRef } from 'vue';
import relationsFiltersVue from '../components//search-components/filters/relationsFilters.vue';
import router from '../router';
import type { Ref } from 'vue';

// import instant-search-stuff
import TypesenseInstantSearchAdapter from 'typesense-instantsearch-adapter';
import Typesense from 'typesense';

const headers = ref([]);
console.log(collectionsLookup);

// reactive vars
const selectedCollection: Ref<string> = ref('');
const placeholder: Ref<string> = ref('type to search');
const hitsPerPage: Ref<number> = ref(20);
// const model_type: Ref<String> = ref("")

onBeforeMount(() => {
  selectedCollection.value = 'Relations';
});

// TODO: move collections to a seperate directory with settings / options or request them dynamically from typesense server
// TODO: only use the option field and prefix the selected collection automatically.

// function increaseHits(){
//     hitsPerPage.value += 1;
// }
// functions defined
function updateCollection(collection: string) {
  console.log('COl is now: ', collection);

  switch (collection) {
    case 'entities':
      selectedCollection.value = collection;
      break;
    case 'relations':
      selectedCollection.value = collection;
      break;

    case 'personinstitution':
      selectedCollection.value = collection;
      break;

    case 'PersonPlace':
      selectedCollection.value = collection;
      break;
    default:
      alert('key not found in collections in switch');
  }
}

function redirectToEntity(ent_type: string, ent_id: string, ent_model: string) {
  const route = `/${ent_type}/${ent_model}/detail/${ent_id}`;
  router.push(route);
}
// using shallow Ref, to avoid overhead for making the component object all reactive...
// TODO: or use the string name of component in is
const filterComponent = shallowRef(null);
function showClient() {
  console.log(typesenseInstantSearchAdapter);
}
// search Client logic

const additionalSearchParameters = {
  query_by: 'source.name, target.name',
};
let params: string;

watch(selectedCollection, () => {
  console.log('selectdCollection is', selectedCollection.value);

  let col = collectionsLookup[selectedCollection.value];
  console.log('this', col);
  params = col.searchParams;
  headers.value = col.headers;
  filterComponent.value = col.components.filter;
  // switch (selectedCollection.value) {
  //   case "entities":
  //     params = "name";
  //     console.log("changed to entity params");
  //     break;
  //   case "relations":
  //     params = "ent_a, relation_type";
  //     console.log("changed to relation params");
  //     break;
  //   case "PersonInstitution":
  //     // params = "source.name";
  //     // console.log("changed to personinstitution params");
  //     // headers.value = [
  //     //   "source.name",
  //     //   "source_kind",
  //     //   "relation_type",
  //     //   "target.name",
  //     //   "target_kind",
  //     //   "start",
  //     //   "end",
  //     // ];

  //     params = collectionsLookup[selectedCollection.value].searchParams;
  //     headers.value = collectionsLookup[selectedCollection.value].headers;
  //     filterComponent.value = relationsFilters;

  //     break;

  //   case "PersonPerson":
  //     params = collectionsLookup[selectedCollection.value].searchParams;
  //     headers.value = collectionsLookup[selectedCollection.value].headers;
  //     filterComponent.value = "relationsFilters";

  //     break;
  //   case "PersonPlace":
  //     params = "source.name, target.name";
  //     break;
  //   default:
  //     console.log(
  //       "in searchParam switch, could not find right case for: ",
  //       selectedCollection.value
  //     );
  // }

  console.log('params is now: ', params);
  console.log('Host is', import.meta.env.VITE_TYPESENSE_HOST);
  additionalSearchParameters.query_by = params;
  typesenseInstantSearchAdapter.configuration.additionalSearchParameters.highlight_full_fields =
    params;
  placeholder.value = `search in ${selectedCollection.value}`;
}); // guess I need to make this reactive to change in sync with collection // think even computed would do

const typesenseInstantSearchAdapter = new TypesenseInstantSearchAdapter({
  server: {
    //apiKey: "xyz", // Be sure to use an API key that only allows searches, in production
    apiKey: import.meta.env.VITE_TYPESENSE_API_KEY,
    nodes: [
      {
        host: import.meta.env.VITE_TYPESENSE_HOST,
        port: import.meta.env.VITE_TYPESENSE_PORT,
        protocol: import.meta.env.VITE_TYPESENSE_PROTOCOL,
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

// console.log('host', import.meta.env.VITE_TYPESENSE_HOST);
// console.log('port', import.meta.env.VITE_TYPESENSE_PORT);
// console.log('key: ', import.meta.env.VITE_TYPESENSE_API_KEY);
const searchClient = typesenseInstantSearchAdapter.searchClient;
</script>
<template>
  <div class="min-h-screen">
    <ais-instant-search
      :search-client="searchClient"
      :index-name="usePrefixedCollection(selectedCollection)"
    >
      <div class="min-h-20 flex py-10 place-content-between px-60">
        <div id="buttons-div" class="flex-col">
          <div class="flex my-4 place-items-center">
            <label for="select-collection-listbox" class="mr-4">Selected collection: </label>

            <!-- TODO: Accesability: focus and keyboard navigation of opened listbox needs implementation  -->
            <Listbox v-model="selectedCollection" id="select-collection-listbox" as="div">
              <ListboxButton>{{ selectedCollection }}</ListboxButton>

              <ListboxOptions
                class="absolute bg-white rounded-2xl px-4 py-2 shadow-2xl shadow-black -translate-x-9 translate-y-2 text-black"
              >
                <ListboxOption
                  v-for="key in Object.keys(collectionsLookup)"
                  :value="key"
                  class="hover:bg-green-100 hover:cursor-pointer"
                  :key="key"
                >
                  {{ key }}
                </ListboxOption>
              </ListboxOptions>
            </Listbox>
          </div>
          <div class="flex">
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
      <div class="w-full flex" id="result-and-filter-section">
        <div class="w-100 h-auto min-h-100 px-20 py-10 border-r-2" id="filter-section">
          <component v-if="filterComponent" :is="filterComponent"></component>
          <!-- <div v-if="selectedCollection === 'entities'">Entities Filter</div>
        <div v-else-if="selectedCollection === 'relations'">
          <relationsFilters></relationsFilters>
        </div>
        <div
          v-else-if="
            selectedCollection.replace('viecpro_', '') === 'PersonInstitution'
          "
        >
          <p>PersonInstitution-Filters</p> 
        </div>-->
        </div>

        <div id="result-section" class="mx-auto px-10 py-10">
          <ais-configure :hits-per-page.camel="hitsPerPage" />

          <ais-hits>
            <template v-slot="{ items }">
              <genericResultsTable
                :headers="headers"
                :items="items"
                :tB="
                  selectedCollection == 'Person'
                    ? 'search-result-table-headers.person.'
                    : 'search-result-table-headers.'
                "
              ></genericResultsTable>
              <!-- <table>
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
                    v-if="
                      selectedCollection.replace('viecpro_','') == 'PersonInstitution' ||
                      selectedCollection == 'viecpro_PersonPlace'
                    "
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
                    v-if="
                      selectedCollection == 'personinstitution' ||
                      selectedCollection == 'PersonPlace'
                    "
                    :hit="item"
                    attribute="target"
                    class="entity_tag hover:cursor-pointer hover:underline"
                  ></ais-highlight>
                </td>
              </tr>
            </table> -->
            </template>
          </ais-hits>
        </div>
        <div></div>
      </div>
    </ais-instant-search>
  </div>
</template>

<style scoped>
/* TODO: this style section must be scoped again, and styling of the input must move in the main css file */

button {
  border-radius: 25rem;
  @apply bg-primary-100 px-4 py-1 text-white mx-1;
}
</style>
