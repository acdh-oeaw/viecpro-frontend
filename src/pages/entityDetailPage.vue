<script setup lang="ts">
// utitily imports
import { ref, onBeforeMount, computed, watch, onMounted } from 'vue';
import type { Ref } from 'vue';
import GenericTable from '@/components/GenericTable.vue';
import useTypesenseAsyncRetrieval from '@/composables/useTypesenseAsyncRetrieval';
import useTypesenseAsyncQuery from '@/composables/useTypesenseAsyncQuery';
import useExtractHitsFromResults from '@/composables/transform-data/useExtractHitsFromResults';
import useGroupRelationsByClass from '@/composables/transform-data/useGroupRelationsByClass';
import useGroupArrayOfObjectsByKey from '@/composables/transform-data/useGroupArrayOfObjectsByKey';
import useGetCollectionFromModel from '@/composables/utils/useGetCollectionFromModel';
import useConstructDocIDFromParams from '@/composables/utils/useConstructDocIDFromParams';
// component imports
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue';
import EntityVisualisationSection from '@/components/entity-components/entity-vis/EntityVisualisationSection.vue';

const props = defineProps({
  object_id: String,
  model: String,
});

const data: Ref<object> = ref({}); // TODO: make more clear distinction between metada and relations-data
const relations: Ref<object> = ref({});
const collection = useGetCollectionFromModel(props.model);
const doc_id = useConstructDocIDFromParams(props.model, props.object_id);
const labels = ref({});

useTypesenseAsyncRetrieval(collection.value, doc_id, (response) => {
  data.value = response;
});

// TODO: make the two data fetching functions failsafe and work together.
watch(data, () => {
  // TODO: this is a hack atm, settings value below should re-trigger the watcher... improve this.
  function process_results(response) {
    const docs = useExtractHitsFromResults(response);
    const transformedRelations = useGroupRelationsByClass(docs);
    labels.value = useGroupArrayOfObjectsByKey(data.value.labels, 'label_type');
    // TODO: consider moving grouping logic into meta views of specific classes (Person, Institution)

    data.value['grouped_labels'] = labels.value;
    data.value['relations'] = transformedRelations;
    relations.value = transformedRelations;
  }

  useTypesenseAsyncQuery(
    'Relations',
    props.object_id,
    'source.object_id, target.object_id',
    process_results
    // { filter_by: '', sort_by: '', per_page: 200, num_typos: 0 },
  );
});
</script>
<template>
  <div id="main-container flex" class="bg-white">
    <div class="flex place-content-between mx-40 pt-20" id="meta-and-actions">
      <div class="flex-col" id="meta-section">
        <!-- TODO: change the v-if condition here, once the data is split into metadata and relations-data -->
        <EntityMetaBase :data="data" :model="model"
          ><component v-if="data.relations" :is="collection + 'Meta'" :data="data"> </component
        ></EntityMetaBase>
      </div>
      <div
        class="my-section bg-gray-200 rounded w-40 h-40 text-white text-center"
        id="actions-section"
      >
        <!-- This section will contain download, how to cite entity, and visualisations redirect (to vis studio) as well as inline visualisation selection actions -->
        actions
      </div>
    </div>
    <div class="mx-40" id="vis-section">
      <!-- Just a dummy at the moment. Needs to be generic and adapt to entity type.  -->
      <EntityVisualisationSection :ent_type="model"></EntityVisualisationSection>
    </div>

    <!-- TODO: add proper :key attribs for all v-for loops here -->
    <div class="mx-40 bg-blue-200 min-h-screen pt-4" id="tables-section">
      <TabGroup v-if="data.relations" :defaultIndex="0">
        <TabList>
          <Tab
            v-for="(rels, model) in relations"
            :key="model + '_tablist'"
            v-slot="{ selected }"
            ><button :class="{ 'bg-red-400': selected }" class="rounded bg-gray-200 text-black px-4 py-2">{{ model + ' - Relations' }}</button>
          </Tab>
        </TabList>
        <TabPanels>
          <!-- TODO: implement correct loading logic for all components in a reusable fashion -->

          <TabPanel
            v-for="(rels, model) in relations"
            class="tab-panel-standard"
            :key="model + '_rel2'"
          >
            <div class="flex-col">
              <!-- <p v-for="rel in rels" :key="rel + '_rel_el'">{{ rel }}</p> -->
              <GenericTable
                :headers="['object_id', 'relation_type', 'target.name', 'start', 'end']"
                :data="rels"
              ></GenericTable>
            </div>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </div>
  </div>
</template>

<style scoped>

/* This was just a test to try the scoped apply */
</style>
