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
import GenericDialog from '@/components/dialogs/GenericDialog.vue';
import useConstructCitation from '@/composables/utils/useConstructCitation';
import { useCustomConfirmation } from '@/composables/useCustomConfirmation';
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
const functions = ref([]);
const copyResult = ref('');
function processReferences(response) {
  console.log('REFERENCES RESPONSE', response);
  referencesAreReady.value = true;
  referencesData.value = useExtractHitsFromResults(response);
}

function confirmCopy(){
  confirm(true);
  copyResult.value= "";
}
async function copyToClipboard(m, data) {
  try {
    await navigator.clipboard.writeText(useConstructCitation(m, data));
    console.log('Page URL copied to clipboard');
    copyResult.value = 'Zitation ins Clipboard kopiert.';
  } catch (err) {
    console.error('Failed to copy: ', err);
    copyResult.value = 'Kopieren leider nicht möglich.';
  }
}
onBeforeMount(() => {
  console.log(collection.value, doc_id)
  useTypesenseAsyncRetrieval(collection.value, doc_id, (response) => {
    rawDocData.value = response;
  });
});

const { openDialog, isRevealed, confirm, cancel } = useCustomConfirmation();
function processRawData(response) {
  const docs = useExtractHitsFromResults(response);
  //console.log('DOCS', docs);
  const constructedMeta = { ...rawDocData.value };
  const groupedRelations = useGroupRelationsByClass(
    docs,
    rawDocData.value.fullname ? rawDocData.value.fullname : rawDocData.value.name
  );
  rawLabelData.value = useGroupArrayOfObjectsByKey(rawDocData.value.labels, 'label_type');
  // TODO: consider moving grouping logic into meta views of specific classes (Person, Institution)
  labelData.value = useGroupLabels(rawDocData.value.labels);
  //console.log('PARSED LABELS', labelData.value);
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

  if (groupedRelations.PersonInstitution) {
    let parsedFuncs = new Set(
      groupedRelations.PersonInstitution.map((el: object) => {
        //TODO: type this object.
        return el.relation_type;
      })
    );
    functions.value = Array.from(parsedFuncs);
    console.log('numfuncs: ', functions.value.length);
  }

  dataIsReady.value = true;
}

function myCallback(res) {
  console.log(res);
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
    <div id="container-above-split" class="w-full text-left mb-10">
      <h2 class="text-3xl font-light pt-16 mb-2 text-gray-400">
        Datenblatt <span class="">{{ '- ' }}{{ $t(`models.${model}`) }}</span>
      </h2>
      <h2 class="text-xl font-light mb-2 text-gray-400">
        <span v-if="metaData.kind && model != 'Hofstaat'" class="">{{ metaData.kind }}</span>
      </h2>
      <h1 class="text-4xl text-primary-100 font-medium">
        {{ metaData.fullname ? metaData.fullname : metaData.name }}
      </h1>
      <div class="mt-4">
        <span
          v-for="func in functions.slice(0, 3)"
          :key="func"
          class="rounded bg-gray-100 text-gray-500 px-2 py-1 mr-2"
        >
          {{ func.replace('[REVERSE]', '') }}</span
        >
        <span v-if="functions.length > 3" class="rounded bg-gray-100 text-gray-500 px-2 py-1 mr-2">
          +{{ functions.length - 3 }} weitere</span
        >
      </div>
    </div>
    <div id="container-split" class="py-10 xl:justify-between flex flex-col xl:flex-row">
      <div id="container-split-left" class="flex-col w-full xl:w-1/4 xl:mb-0 mb-10">
        <div id="container-meta" class="mb-10">
          <div v-if="dataIsReady">
            <component :is="null"></component>
            <div class="flex-col">
              <h1 class="text-gray-400 font-light text-2xl text-left pb-4">Stammdaten</h1>
              <div class="grid grid-cols-4 gap-4">
                <label class="col-span-1" for="">
                  {{ metaData.gender == 'female' ? 'Mädchenname' : 'Name' }}</label
                >
                <p class="col-span-3">{{ metaData.name }}</p>
                <label v-if="metaData.gender === 'female'" class="col-span-1" for=""
                  >Ehename:</label
                >
                <p v-if="metaData.gender === 'female'" class="col-span-3">
                  {{ labelData.first_marriage }}
                </p>
                <label class="col-span-1" for="">Vorname:</label>
                <p class="col-span-3">{{ metaData.first_name }}</p>
                <label class="col-span-1" for="">Geschlecht:</label>
                <p class="col-span-3">{{ $t(`globals.${metaData.gender}`) }}</p>
                <label for="" class="col-span-1">Titel:</label>
                <p class="col-span-3">
                  <span v-if="metaData - titles" v-for="title in metaData.titles">
                    {{ title.name }}</span
                  ><span v-else> - </span>
                </p>
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
              :is-collapsed="true"
            ></CollabsableLabelSection>

            <GenericCollapsableSection
              header="Adelsstand und Auszeichnungen"
              :data="['test']"
              :is-collapsed="true"
            >
              <div class="grid grid-cols-2">
                <h2>Test:</h2>
                <ul>
                  <li v-for="l in labelData.title_honor">{{ l.name }} {{ l.start_date }}</li>
                </ul>
                <h2>Titel:</h2>
                <ul>
                  <li v-for="title in metaData.titles">{{ title.name }}</li>
                </ul>

                <h2>Stand:</h2>
                <ul>
                  <li v-for="l in labelData.stand" :key="l.name">{{ l.name }}</li>
                </ul>
                <h2>Auszeichnungen:</h2>
                <ul>
                  <li v-for="l in labelData.awards">{{ l.name }}</li>
                </ul>
              </div>
            </GenericCollapsableSection>
            <CollabsableLabelSection
              header="Akademische Titel"
              :data="labelData.title_academic"
              :is-collapsed="true"
            ></CollabsableLabelSection>
            <GenericCollapsableSection
              header="Download und Zitierweise"
              :data="['test']"
              :is-collapsed="true"
            >
              <button @click="openDialog(myCallback)" class="hover:text-red-400">
                Vorgschlagene Zitierweise <i class="fa-solid fa-square-up-right"></i>
              </button>
            </GenericCollapsableSection>
            <GenericCollapsableSection
              header="Quellenbelege"
              :data="referencesData"
              :is-collapsed="true"
            >
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
            </GenericCollapsableSection>
            <component :is="null"></component>
          </div>
          <div v-else>Loading</div>
        </div>
      </div>
      <div id="container-split-right" class="flex-col xl:w-2/3 xl:mb-0 mb-10">
        <div id="container-relations" class="mb-10 w-full">
          <div v-if="dataIsReady" class="flex-col space-y-10">
            <h1 class="text-gray-400 font-light text-2xl text-left pb-4">
              Beziehungen am und zum Wiener Hof
            </h1>
            <!-- <h2>Funktionen am Hof</h2> -->
            <CollapsableRelationSection
              header="Funktionen am Hof"
              :data="relData.PersonInstitution"
              :is-collapsed="true"
            ></CollapsableRelationSection>
            <!-- <GenericListSection :data="relData.PersonInstitution"></GenericListSection> -->
            <CollapsableRelationSection
              header="Personenbeziehungen am Hof"
              :data="personRelData['Berufliche Beziehung']"
              :is-collapsed="true"
            ></CollapsableRelationSection>

            <!-- <h2>Teilnahme an Hofereignissen</h2> -->

            <CollabsableLabelSection
              header="Sonstige Beziehungen am Hof"
              :data="labelData.court_other"
            ></CollabsableLabelSection>

            <h2 class="text-gray-400 font-light text-2xl text-left pb-4">Sonstige Informationen</h2>
            <CollapsableRelationSection
              header="Verwandtschaftliche Beziehungen und Ehen"
              :data="personRelData['Verwandtschaftliche Beziehung']"
              :is-collapsed="true"
            ></CollapsableRelationSection>

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
        <div id="container-below-relations" class="mb-10"></div>
      </div>
    </div>
    <div id="container-below-split" class="">
      <!-- <label for=""> docData:</label>
      {{ referencesData }} -->
    </div>
  </div>
  <GenericDialog :confirm="confirm" :is-revealed="isRevealed" :cancel="cancel">
    <template v-slot:title> {{ copyResult ? copyResult : "Vorgeschlagene Zitierweise:" }}</template>
    <template v-slot:body>
      <div v-if="!copyResult">
        <p>{{ useConstructCitation(model, metaData) }}</p>

        <div class="flex justify-between mt-6 mb-2">
          <button class="btn-dummy bg-green-300" @click="copyToClipboard(model, metaData)">
            Kopieren
          </button>
          <button class="btn-dummy bg-green-300" @click="confirm(true)">Schließen</button>
        </div>
      </div>
      <div v-else>
        <div class="flex justify-end">
          <button class="btn-dummy bg-green-300 mt-4" @click="confirmCopy">Schließen</button>
        </div>
      </div>
    </template></GenericDialog
  >
</template>

<style scoped></style>
