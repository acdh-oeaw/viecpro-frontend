<script setup lang="ts">
import { ref, onBeforeMount, watch, unref } from 'vue';
import useConstructDocIDFromParams from '@/composables/utils/useConstructDocIDFromParams';
import useTypesenseAsyncRetrieval from '@/composables/useTypesenseAsyncRetrieval';
import useGetCollectionFromModel from '@/composables/utils/useGetCollectionFromModel';
import useTypesenseAsyncQuery from '@/composables/useTypesenseAsyncQuery';
import useExtractHitsFromResults from '@/composables/transform-data/useExtractHitsFromResults';
import useGroupArrayOfObjectsByKey from '@/composables/transform-data/useGroupArrayOfObjectsByKey';
import useGroupRelationsByClass from '@/composables/transform-data/useGroupRelationsByClass';
import useGroupPersonPersonRelsByLookup from '@/composables/transform-data/useGroupPersonPersonRelsByLookup';
import useGroupLabels from '@/composables/transform-data/useGroupLabels';
// import GenericListSection from './detail-page-sections/GenericListSection.vue';
import CollapsableRelationSection from './detail-page-sections/CollapsableRelationSection.vue';
import CollabsableLabelSection from './detail-page-sections/CollabsableLabelSection.vue';
import CollabsableMixedSection from './detail-page-sections/CollabsableMixedSection.vue';
import GenericCollapsableSection from './detail-page-sections/GenericCollapsableSection.vue';

// define props as entry point
const props = defineProps(['model', 'object_id']);
const collection = useGetCollectionFromModel(props.model);
const doc_id = useConstructDocIDFromParams(props.model, props.object_id);
const rawDocData = ref({});
// const rawRelData = ref({});
const rawLabelData = ref({});
const metaData = ref({});
const relData = ref({});
const personRelData = ref({});
const labelData = ref({});
const dataIsReady = ref(false);
const referencesAreReady = ref(false);
const referencesData = ref([]);

function processReferences(response) {
  console.log('REFERENCES RESPONSE', response);
  referencesAreReady.value = true;
  referencesData.value = useExtractHitsFromResults(response);
}
onBeforeMount(() => {
  useTypesenseAsyncRetrieval(collection.value, doc_id, (response) => {
    rawDocData.value = response;
  });
});

function processRawData(response) {
  const docs = useExtractHitsFromResults(response);
  console.log('DOCS', docs);
  const constructedMeta = { ...rawDocData.value };
  const groupedRelations = useGroupRelationsByClass(
    docs,
    rawDocData.value.fullname ? rawDocData.value.fullname : rawDocData.value.name
  );
  rawLabelData.value = useGroupArrayOfObjectsByKey(rawDocData.value.labels, 'label_type');
  // TODO: consider moving grouping logic into meta views of specific classes (Person, Institution)
  labelData.value = useGroupLabels(rawDocData.value.labels);
  console.log('PARSED LABELS', labelData.value);
  console.log('LABELS', rawLabelData.value);
  constructedMeta.religion = labelData.value.religion;

  // is read from labelData !
  //   if ('Konfession' in rawLabelData.value) {
  //     metaData.value['konfession'] = rawLabelData.value['Konfession'][0];
  //   }
  rawDocData.value['grouped_labels'] = rawLabelData.value;
  //rawDocData.value['relations'] = transformedRelations;

  metaData.value = constructedMeta;
  console.log('METADATA', metaData.value);
  relData.value = groupedRelations;

  // TODO: this should be unneccessary now!
  personRelData.value = groupedRelations.PersonPerson
    ? useGroupPersonPersonRelsByLookup(groupedRelations.PersonPerson)
    : {};

  dataIsReady.value = true;
}

// fetch additional data
watch(rawDocData, () => {
  useTypesenseAsyncQuery(
    'Relations',
    props.object_id,
    'source.object_id, target.object_id',
    processRawData,
    { filter_by: '', sort_by: '', per_page: 250, num_typos: 0 }
  );
  useTypesenseAsyncQuery('Reference', props.object_id, 'related_doc.object_id', processReferences);
});
// prepare data for all sub-views (name them accordingly)
</script>
<template>
  <div id="container-main" class="flex-col min-h-screen mx-40">
    <div id="container-above-split" class="w-full text-left">
      <h2 class="text-3xl font-light pt-16 mb-2 text-gray-400">Datenblatt - {{ model }}</h2>

      <h1 class="text-4xl text-primary-100 font-medium">
        {{ metaData.fullname ? metaData.fullname : metaData.name }}
      </h1>
    </div>
    <div id="container-split" class="py-10 xl:justify-between flex flex-col xl:flex-row">
      <div id="container-split-left" class="flex-col w-full xl:w-1/4 xl:mb-0 mb-10">
        <div id="container-meta" class="mb-10">
          <div v-if="dataIsReady">
            <component :is="null"></component>
            <div class="flex-col">
              <h1 class="text-gray-400 font-light text-2xl text-left pb-4">Stammdaten</h1>
              <div class="grid grid-cols-4 gap-4">
                <label class="col-span-1" for="">Name:</label>
                <p class="col-span-3">test1</p>
                <label class="col-span-1" for="">Vorname:</label>
                <p class="col-span-3">test2</p>
                <label class="col-span-1" for="">Gender:</label>
                <p class="col-span-3">test3</p>
                <label for="" class="col-span-1">Titel:</label>
                <p class="col-span-3">test4</p>
                <label for="" class="col-span-1">Funktionen:</label>
                <p class="col-span-3">test5</p>
              </div>
            </div>
          </div>
          <div v-else>Loading</div>
        </div>
        <div id="container-below-meta" class="mb-10 w-full">
          <div v-if="dataIsReady" class="flex-col space-y-8">
            <CollapsableRelationSection
              header="Potentielle Dubletten"
              :data="personRelData['Doubletten Beziehung']"
              :is-collapsed="true"
            ></CollapsableRelationSection>
            <CollabsableLabelSection
              header="Alternative Namenschreibweisen"
              :data="labelData.alt_names"
            ></CollabsableLabelSection>
            <CollapsableRelationSection
              header="Verwandtschaftliche Beziehungen"
              :data="personRelData['Verwandtschaftliche Beziehung']"
              :is-collapsed="false"
            ></CollapsableRelationSection>
            <CollabsableLabelSection
              header="Akademische Titel"
              :data="labelData.title_academic"
              :is-collapsed="false"
            ></CollabsableLabelSection>
            <GenericCollapsableSection
              header="Download und Zitierweise"
              :data="['test']"
              :is-collapsed="false"
            ></GenericCollapsableSection>
            <GenericCollapsableSection header="Quellenbelege" :data="referencesData">
              <template v-slot:collapsable-content>
                <ul>
                  <template v-for="el in referencesData" :key="el.id">
                    <li
                      v-if="el.folio.includes('https://')"
                      class="flex flex-wrap items-center justify-start"
                    >
                      <span class="mr-4">{{ el.shortTitle }}: </span>
                      <a :href="el.folio" class="rounded px-2 py-1 text-white bg-gray-300">
                        {{ '-> Eintrag' }}
                      </a>
                    </li>
                    <li v-else>{{ el.shortTitle }}, {{ el.folio }}.</li>
                  </template>
                </ul>
              </template>
            </GenericCollapsableSection>
            <component :is="null"></component>
          </div>
          <div v-else>Loading</div>
        </div>
      </div>
      <div id="container-split-right" class="flex-col xl:w-2/3 xl:mb-0 mb-10">
        <div id="container-relations" class="mb-10 w-full">
          <div v-if="dataIsReady" class="flex-col space-y-10">
            <h1 class="text-2xl font-light font-">Beziehungen zum Wiener Hof</h1>
            <!-- <h2>Funktionen am Hof</h2> -->
            <CollapsableRelationSection
              header="Funktionen am Hof"
              :data="relData.PersonInstitution"
              :is-collapsed="false"
            ></CollapsableRelationSection>
            <!-- <GenericListSection :data="relData.PersonInstitution"></GenericListSection> -->
            <CollapsableRelationSection
              header="Personenbeziehungen am Hof"
              :data="personRelData['Berufliche Beziehung']"
              :is-collapsed="false"
            ></CollapsableRelationSection>

            <!-- <h2>Teilnahme an Hofereignissen</h2> -->

            <CollabsableLabelSection
              header="Sonstige Beziehungen am Hof"
              :data="labelData.court_other"
            ></CollabsableLabelSection>
            <CollabsableMixedSection
              header="Beziehungen zu Kirche und Orden"
              :relationData="
                relData['Kirchl. Amtsbeziehung'] ? relData['Kirchl. Amtsbeziehung'] : []
              "
              :labelData="labelData.church_and_o"
            ></CollabsableMixedSection>
            <CollabsableMixedSection
              header="Sonstige Beziehungen und Tätigkeiten"
              :relationData="[]"
              :labelData="labelData.other_jobs"
            ></CollabsableMixedSection>
            <component :is="null"></component>
          </div>
          <div v-else>Loading</div>
        </div>
        <div id="container-below-relations" class="mb-10">
          <template v-for="(val, key) in personRelData" :key="key">
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
      <!-- <label for=""> docData:</label>
      {{ referencesData }} -->
    </div>
  </div>
</template>

<style scoped></style>
