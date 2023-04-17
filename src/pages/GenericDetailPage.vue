<script setup lang="ts">
import { ref, onBeforeMount, watch } from 'vue';
import useConstructDocIDFromParams from '@/composables/utils/useConstructDocIDFromParams';
import useTypesenseAsyncRetrieval from '@/composables/useTypesenseAsyncRetrieval';
import useGetCollectionFromModel from '@/composables/utils/useGetCollectionFromModel';
import useTypesenseAsyncQuery from '@/composables/useTypesenseAsyncQuery';
import useExtractHitsFromResults from '@/composables/transform-data/useExtractHitsFromResults';
import useGroupArrayOfObjectsByKey from '@/composables/transform-data/useGroupArrayOfObjectsByKey';
import useGroupRelationsByClass from '@/composables/transform-data/useGroupRelationsByClass';
import useGroupPersonPersonRelsByLookup from '@/composables/transform-data/useGroupPersonPersonRelsByLookup';

// define props as entry point
const props = defineProps(['model', 'object_id']);
const collection = useGetCollectionFromModel(props.model);
const doc_id = useConstructDocIDFromParams(props.model, props.object_id);
const rawDocData = ref({});
// const rawRelData = ref({});
const rawLabelData = ref({});
const metaData = ref({});
const relData = ref({});
const sortedPPRels = ref({});

const PersonPersonKindLookup = {
  'Berufliche Beziehung': '',
  'Doubletten Beziehung': '',
  'Verwandtschaftliche Beziehung': '',
  'Kirchl. Amtsbeziehung': '',
  'Dynastische Beziehung': '',
};

useTypesenseAsyncRetrieval(collection.value, doc_id, (response) => {
  rawDocData.value = response;
});

function processRawData(response) {
  const docs = useExtractHitsFromResults(response);
  const groupedRelations = useGroupRelationsByClass(
    docs,
    rawDocData.value.fullname ? rawDocData.value.fullname : rawDocData.value.name
  );
  rawLabelData.value = useGroupArrayOfObjectsByKey(rawDocData.value.labels, 'label_type');
  // TODO: consider moving grouping logic into meta views of specific classes (Person, Institution)

  console.log('LABELS', rawLabelData.value);
  if ('Konfession' in rawLabelData.value) {
    metaData.value['konfession'] = rawLabelData.value['Konfession'];
  }
  rawDocData.value['grouped_labels'] = rawLabelData.value;
  //rawDocData.value['relations'] = transformedRelations;

  relData.value = groupedRelations;
  sortedPPRels.value = useGroupPersonPersonRelsByLookup(groupedRelations.PersonPerson);
}

// fetch additional data
watch(rawDocData, () => {
  useTypesenseAsyncQuery(
    'Relations',
    props.object_id,
    'source.object_id, target.object_id',
    processRawData
    // { filter_by: '', sort_by: '', per_page: 200, num_typos: 0 },
  );
});
// prepare data for all sub-views (name them accordingly)
</script>
<template>
  <div id="container-main" class="flex-col min-h-screen">
    <div id="container-above-split" class="w-full">Above Container</div>
    <div id="container-split" class="p-10 xl:justify-between flex flex-col xl:flex-row">
      <div id="container-split-left" class="flex-col w-full xl:w-1/4 xl:mb-0 mb-10">
        <div id="container-meta" class="mb-10 w- bg-red-100">
          <component :is="null"></component> Meta {{ model }} - {{ object_id }}
        </div>
        <div id="container-below-meta" class="mb-10 w-full">
          <component :is="null"></component>
        </div>
      </div>
      <div id="container-split-right" class="flex-col xl:w-2/3 xl:mb-0 mb-10">
        <div id="container-relations" class="mb-10 w-full bg-red-100">
          <component :is="null"></component> relations {{ relData }}
        </div>
        <div id="container-below-relations" class="mb-10">
          <template v-for="(val, key) in sortedPPRels" :key="key">
            <h1 class="mt-2">{{ key }}</h1>
            <ul>
              <li v-for="v in val" :key="v.id" class="py-2">
                {{ v.relation_type_hierarchy }}{{ v }}
              </li>
            </ul>
          </template>
        </div>
      </div>
    </div>
    <div id="container-below-split" class="">
      <label for=""> docData:</label>
      {{ rawDocData }}
    </div>
  </div>
</template>

<style scoped></style>
