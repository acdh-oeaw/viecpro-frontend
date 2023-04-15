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
import ActionsBox from '@/components/entity-components/ActionsBox.vue';

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

    if ('Konfession' in labels.value) {
      data.value['konfession'] = labels.value['Konfession'];
    }
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
    <div class="flex place-content-between pt-20 mx-40" id="meta-and-actions">
      <div class="flex-col" id="meta-section">
        <!-- TODO: change the v-if condition here, once the data is split into metadata and relations-data -->
        <EntityMetaBase :data="data" :model="model">
          <template v-slot:functions_and_titles>
            <component v-if="data.relations" :is="collection + 'Meta'" :data="data"> </component>
          </template>
        </EntityMetaBase>
      </div>
      <ActionsBox></ActionsBox>
    </div>
    <div class="mx-40" id="vis-section">
      <!-- Just a dummy at the moment. Needs to be generic and adapt to entity type.  -->
      <EntityVisualisationSection :ent_type="model"></EntityVisualisationSection>
    </div>

    <!-- TODO: add proper :key attribs for all v-for loops here -->
    <div class="mx-40 min-h-screen pt-4 mt-8" id="tables-section">
      <TabGroup v-if="data.relations" :defaultIndex="0">
        <TabList as="div" class="flex justify-start">
          <Tab
            v-for="(rels, rel_model) in relations"
            :key="rel_model + '_tablist'"
            as="div"
            v-slot="{ selected }"
            className="{ui-selected: outline-none border-none}"
            ><button
              :class="{
                'bg-gray-400 text-white border-0': selected,
                'text-gray-400': !selected,
              }"
              class="border-2 mr-1 rounded text-black px-4 py-2 bg-white"
            >
              {{ $t(`entity-detail.relations.${model}.${rel_model}`) }}
            </button>
          </Tab>
        </TabList>
        <TabPanels>
          <!-- TODO: implement correct loading logic for all components in a reusable fashion -->

          <TabPanel v-for="(rels, model) in relations" :key="model + '_rel2'">
            <div class="rounded flex-col w-fit p-8 border-2 mt-4 bg-white" style="min-width: 40rem">
              <!-- <p v-for="rel in rels" :key="rel + '_rel_el'">{{ rel }}</p> -->
              <GenericTable
                :headers="['source.name', 'relation_type', 'relation_reverse', 'target.name', 'start', 'end']"
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
