// component for searching within a selection of collections or a single collection (typesense
collection ) // results, filters, etc. should be external components that change with the change of
the selectedCollection // should be used in the main search page (database search) and a stripped
down version for searching / filtering the relation tables within the genericEntityDetailView.

<script setup lang="ts">
// TODO: implement all types!
// import components
import GenericResultsTable from '../components/search-components/results/GenericResultsTable.vue';
import usePrefixedCollection from '@/composables/usePrefixedCollection';
import { Listbox, ListboxButton, ListboxOptions, ListboxOption } from '@headlessui/vue';
import router from '../router';
import { simple } from 'instantsearch.js/es/lib/stateMappings';
// import utils, functions, etc.
import { ref, watch, onBeforeMount, onMounted, shallowRef } from 'vue';
import type { Ref } from 'vue';
import { collectionsLookup } from '@/lookups.js';
// import instant-search-stuff
import TypesenseInstantSearchAdapter from 'typesense-instantsearch-adapter';
import { isSimpleIdentifier } from '@vue/compiler-core';
import { history } from 'instantsearch.js/es/lib/routers';
import { onBeforeRouteUpdate } from 'vue-router';

const loading = ref(true);
const showComponents = ref(false);
const props = defineProps(['collection']);
const headers = ref([]);
console.log(collectionsLookup);

const selectedCollection: Ref<string> = ref('');
const placeholder: Ref<string> = ref('type to search');
const hitsPerPage: Ref<number> = ref(20);

// using shallow Ref, to avoid overhead for making the component object all reactive...
const filterComponent = shallowRef(null);

onBeforeMount(() => {
  selectedCollection.value = props.collection;
  console.log('selectdCollection is', selectedCollection.value);

  let col = collectionsLookup[selectedCollection.value]; // TODO: needs typing
  console.log('this', col);
  params = col.searchParams;
  headers.value = col.headers;
  filterComponent.value = col.components.filter;

  // TODO: refactor to change components and collection in sync; or hide compoenents until collection switch finished.
  // atm, switching from relations to an entity collection throws an error that gets resolved after a few milliseconds.

  additionalSearchParameters.query_by = params;
  typesenseInstantSearchAdapter.configuration.additionalSearchParameters.highlight_full_fields =
    params;
  placeholder.value = 'duchsuchen'; // `search in ${selectedCollection.value}`;
  setTimeout(() => {
    loading.value = false;
  }, 250);
});

// search Client logic

const additionalSearchParameters = {
  query_by: 'source.name, target.name',
};
let params: string;

watch(selectedCollection, () => {
  router.push(`/search/${selectedCollection.value}/`);
});

const typesenseInstantSearchAdapter = new TypesenseInstantSearchAdapter({
  server: {
    // TODO: make sure to use a read-only API-key in production!
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
});

function getTBForModel(model) {
  let res;
  console.log("TB CASE WAS", model)
  switch (model) {
    case 'Person':
      res = 'search-result-table-headers.person.';
      break;
    case 'Reference':
      res = 'search-result-table-headers.reference.';
      break;
    case 'Hofstaat':
      res = 'search-result-table-headers.hofstaat.';
      break;
    default:
      res = 'search-result-table-headers.';
  }

  return res;
}

const searchClient = typesenseInstantSearchAdapter.searchClient;

const routing = {
  router: history({
    writeDelay: 400,
  }),
  stateMapping: simple(),
};
</script>
<template>
  <div
    class="min-h-screen transition-all ease-in-out duration-300"
    :class="{ 'invisible blur-sm': loading }"
  >
    <ais-instant-search
      :search-client="searchClient"
      :index-name="usePrefixedCollection(selectedCollection)"
      :routing="routing"
    >
      <div class="min-h-20 flex py-10 place-content-center px-60">
        <div id="buttons-div " class="flex-col">
          <div class="flex my-4 place-items-center">
            <label for="select-collection-listbox" class="collection-select"> </label>

            <!-- TODO: Accesability: focus and keyboard navigation of opened listbox needs implementation  -->
            <Listbox v-model="selectedCollection" id="select-collection-listbox" as="div">
              <div class="flex">
                <ListboxButton class="" id="collection-select">
                  {{ $t(`collections.${selectedCollection}`) }}</ListboxButton
                >
                <ais-search-box :placeholder="placeholder" class="h-8">
                  <template v-slot:submit-icon><div class="hidden"></div></template>
                  <template v-slot:reset-icon><div class=""></div></template>
                </ais-search-box>
              </div>

              <ListboxOptions
                class="absolute bg-white rounded px-4 py-2 shadow-2xl shadow-black translate-y-1 text-black"
              >
                <ListboxOption
                  v-for="key in Object.keys(collectionsLookup)"
                  :value="key"
                  class="hover:bg-green-100 hover:cursor-pointer px-2 py-1"
                  :key="key"
                >
                  {{ $t(`collections.${key}`) }}
                </ListboxOption>
              </ListboxOptions>
            </Listbox>
          </div>
          <!-- <div class="flex">
            <label for="set-hits-per-page" class="mr-4">Results per page: </label>
            <input
              type="text"
              v-model="hitsPerPage"
              id="set-hits-per-page"
              class="border-2 border-black rounded-xl px-4 text-center w-20"
            />
          </div> -->
        </div>
        <div>
          <!-- <template v-slot:submit-icon>
                                                                                                                                                                                                                                                                                                                                                                                                                                                              <img src="../assets/suche.png" alt="" class="search_icon" />
                                                                                                                                                                                                                                                                                                                                                                                                                                                            </template> -->
        </div>
      </div>
      <div class="w-full flex" id="result-and-filter-section">
        <div class="w-100 h-auto min-h-100 px-20 py-10 border-r-2" id="filter-section">
          <component v-if="filterComponent" :is="filterComponent"></component>
        </div>

        <div id="result-section" class="mx-auto px-10 py-10">
          <ais-configure :hits-per-page.camel="hitsPerPage" />

          <ais-hits>
            <template v-slot="{ items }">
              <GenericResultsTable
                :headers="headers"
                :items="items"
                :tB="getTBForModel(selectedCollection)"
              ></GenericResultsTable>
            </template>
          </ais-hits>
        </div>
        <div></div>
      </div>
    </ais-instant-search>
  </div>
</template>

<style>
.ais-SearchBox-input {
  @apply border-black border-2 rounded-r-xl pl-2 px-4 py-1 h-8;
  width: 30rem;
}

#collection-select {
  @apply border-primary-100 border-2 bg-primary-100 px-4 py-1 text-white h-8;
}

.collection-select {
  @apply border-primary-100 border-2 bg-primary-100 px-4 py-1 text-gray-600 h-8 rounded-l-xl;
}
</style>
