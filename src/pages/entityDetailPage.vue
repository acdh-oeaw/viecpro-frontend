// Generic detail page for all entities // maped to a dynamic route // generic sections are coded as
external components /* TODO: at the moment, this same view deals with entities and relations display
(i.e. you can view a single relation instance as the base entity. This needs to be split into two
different generic components - if we want to show detail views of relations at all.) */

<script setup lang="ts">
// utitily imports
import { ref, onBeforeMount, computed, watch, onMounted } from 'vue';
import type { Ref } from 'vue';
import genericTable from '@/components/genericTable.vue';
import useTypesenseAsyncRetrieval from '@/composables/useTypesenseAsyncRetrieval';
import useTypesenseAsyncQuery from '@/composables/useTypesenseAsyncQuery';
import useExtractHitsFromResults from '@/composables/transform-data/useExtractHitsFromResults';
import useGroupRelationsByClass from '@/composables/transform-data/useGroupRelationsByClass';
import useGroupArrayOfObjectsByKey from '@/composables/transform-data/useGroupArrayOfObjectsByKey';
import useGetCollectionFromModel from '@/composables/utils/useGetCollectionFromModel';
import useConstructDocIDFromParams from '@/composables/utils/useConstructDocIDFromParams';
// component imports
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue';
import entityVisualisationSection from '@/components/entity-components/entity-vis/entityVisualisationSection.vue';

const props = defineProps({
  object_id: String,
  model: String,
});

const data: Ref<object> = ref({}); // TODO: make more clear distinction between metada and relations-data
const relations: Ref<object> = ref({});
const showInformation: Ref<boolean> = ref(false); // TODO: get rid of this
const collection = useGetCollectionFromModel(props.model);
const doc_id = useConstructDocIDFromParams(props.model, props.object_id);
const labels = ref({});

useTypesenseAsyncRetrieval(collection.value, doc_id, (response) => {
  data.value = response;
});

// TODO: make the two data fetching functions failsafe and work together.
// onBeforeMount(() => {
//     function process_results(response) {
//     const docs = useExtractHitsFromResults(response);
//     const transformedRelations = useGroupRelationsByClass(docs);
//     labels.value = useGroupArrayOfObjectsByKey(data.value.labels, "label_type")
//     // TODO: consider moving grouping logic into meta views of specific classes (Person, Institution)

//     data.value["grouped_labels"] = labels.value
//     data.value['relations'] = transformedRelations;
//     relations.value = transformedRelations;
//   }

//   useTypesenseAsyncQuery(
//     'Relations',
//     props.object_id,
//     'source.object_id, target.object_id',
//     process_results
//     // { filter_by: '', sort_by: '', per_page: 200, num_typos: 0 },
//   );
// });
//onMounted(() => {
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
//});
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
      <entityVisualisationSection :ent_type="model"></entityVisualisationSection>
    </div>

    <!-- TODO: add proper :key attribs for all v-for loops here -->
    <div class="mx-40 bg-blue-200 min-h-screen pt-4" id="tables-section">
      <TabGroup>
        <TabList>
          <Tab class="tab-standard">JSON</Tab>
          <Tab class="tab-standard">RelationsData</Tab>
          <Tab v-for="(rels, model) in relations" class="tab-standard" :key="model + '_tablist'"
            >{{ model + ' - Relations' }}
          </Tab>
        </TabList>
        <TabPanels>
          <!-- TODO: implement correct loading logic for all components in a reusable fashion -->
          <TabPanel class="tab-panel-standard">
            {{ data ? data : 'loading' }}
            <div
              class="bg-black text-white w-20 h-20 pt-7 text-center"
              :class="showInformation ? 'visible' : 'hidden'"
            >
              I
            </div>
          </TabPanel>
          <TabPanel class="tab-panel-standard">
            <div v-for="(values, model) in relations" :key="model + '_relation'">
              <h3 class="text-xl">{{ model + '-Relations' }}</h3>
              <ul>
                <li v-for="val in values" :key="val + '_val'">
                  {{ val }}
                </li>
              </ul>
            </div>
          </TabPanel>
          <TabPanel
            v-for="(rels, model) in relations"
            class="tab-panel-standard"
            :key="model + '_rel2'"
          >
            <div class="flex-col">
              <!-- <p v-for="rel in rels" :key="rel + '_rel_el'">{{ rel }}</p> -->
              <genericTable
                :headers="['object_id', 'relation_type', 'target.name', 'start', 'end']"
                :data="rels"
              ></genericTable>
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
