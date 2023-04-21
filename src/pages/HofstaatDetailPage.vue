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
import useGroupLabelsInstitution from '@/composables/transform-data/useGroupLabelsInstitution';
// import GenericListSection from './detail-page-sections/GenericListSection.vue';
import CollapsableRelationSection from './detail-page-sections/CollapsableRelationSection.vue';
import CollapsableLabelSection from './detail-page-sections/CollapsableLabelSection.vue';
import CollapsableMixedSection from './detail-page-sections/CollapsableMixedSection.vue';
import GenericCollapsableSection from './detail-page-sections/GenericCollapsableSection.vue';
import GenericDialog from '@/components/dialogs/GenericDialog.vue';
import useConstructCitation from '@/composables/utils/useConstructCitation';
import useOpenDetail from '@/composables/useOpenDetail';
import { useCustomConfirmation } from '@/composables/useCustomConfirmation';
// define props as entry point
const props = defineProps(['object_id']);
const model = 'Hofstaat';
const collection = useGetCollectionFromModel(model);
const doc_id = useConstructDocIDFromParams(model, props.object_id);
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
const standorte = ref([]);
const copyResult = ref('');
const hofstaat = ref([]);
const birthplace = ref({});
const deathplace = ref({});
function processReferences(response) {
  console.log('REFERENCES RESPONSE', response);
  referencesAreReady.value = true;
  referencesData.value = useExtractHitsFromResults(response);
}

function confirmCopy() {
  confirm(true);
  copyResult.value = '';
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
  console.log(collection.value, doc_id);
  useTypesenseAsyncRetrieval(collection.value, doc_id, (response) => {
    rawDocData.value = response;
  });
});

const { openDialog, isRevealed, confirm, cancel } = useCustomConfirmation();
function processRawData(response) {
  const docs = useExtractHitsFromResults(response);
  console.log('DOCS', rawDocData.value);
  const constructedMeta = { ...rawDocData.value };
  const groupedRelations = useGroupRelationsByClass(
    docs,
    rawDocData.value.fullname ? rawDocData.value.fullname : rawDocData.value.name
  );
  rawLabelData.value = useGroupArrayOfObjectsByKey(rawDocData.value.labels, 'label_type');
  // TODO: consider moving grouping logic into meta views of specific classes (Person, Institution)
  labelData.value = useGroupLabelsInstitution(rawDocData.value.labels);
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

  if (groupedRelations.InstitutionPlace) {
    let parsedStandorte = new Set(
      groupedRelations.InstitutionPlace.map((el: object) => {
        //TODO: type this object.
        return;
      })
    );
    standorte.value = Array.from(parsedStandorte);
    console.log('numfuncs: ', standorte.value.length);

    // hofstaat.value = groupedRelations.PersonInstitution.filter((rel) => {
    //   return rel.relation_type == 'hatte den Hofstaat';
    // });
  }

  if (groupedRelations.PersonPlace) {
    const place_of_birth = groupedRelations.PersonPlace.filter((rel) => {
      return rel.relation_type == 'ist geboren in';
    });

    if (place_of_birth.length) {
      birthplace.value = place_of_birth[0];
    }

    const place_of_death = groupedRelations.PersonPlace.filter((rel) => {
      return rel.relation_type == 'ist gestorben in';
    });
    if (place_of_death.length) {
      deathplace.value = place_of_death[0];
    }
  }
  console.log('HOFSTAATEN', hofstaat.value);
  console.log(groupedRelations.PersonInstitution);
  console.log('LabelData', labelData.value);
  console.log('groupedRels', groupedRelations);
  console.log('DOCS', rawDocData.value);

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
  // TODO: guess I need to add object_id for institutions here
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
        <span v-if="metaData.kind " class="">{{ metaData.kind }}</span> <span v-if="labelData.kategorie"> {{ " | "+ labelData.kategorie }}</span>
      </h2>
      <h1 class="text-4xl text-primary-100 font-medium">
        {{ metaData.fullname ? metaData.fullname : metaData.name }}
      </h1>
      <!-- <div class="mt-4">
        <span
          v-for="func in functions.slice(0, 3)"
          :key="func"
          class="rounded bg-gray-100 text-gray-500 px-2 py-1 mr-2"
        >
          {{
            func
              .replace('[REVERSE]', '')
              .replace(
                'hatte den Hofstaat',
                metaData.gender == 'female' ? 'Hofstaatsinhaberin' : 'Hofstaatsinhaber'
              )
          }}</span
        >
        <span v-if="functions.length > 3" class="rounded bg-gray-100 text-gray-500 px-2 py-1 mr-2">
          +{{ functions.length - 3 }} weitere</span
        > 
      </div>  -->
    </div>
    <div id="container-split" class="py-10 xl:justify-between flex flex-col xl:flex-row">
      <div id="container-split-left" class="flex-col w-full xl:w-1/3 xl:mb-0 mb-10">
        <div id="container-meta" class="mb-10">
          <div v-if="dataIsReady">
            <div class="flex-col align-baseline">
              <h1 class="text-gray-400 font-light text-2xl text-left pb-4">
                <span
                  class="text-gray-400 hover:text-gray-600 w-fit p-0 transition-all ease-in duration-500"
                  >Stammdaten</span
                >
              </h1>
              <div class="grid grid-cols-4 gap-4">
                <label class="col-span-1" for=""> Name: </label>
                <p class="col-span-3">
                  {{ metaData.name }}
                </p>
                
                <label class="col-span-1" for=""> Auflösung: </label>
                <p class="col-span-3">
                  <span v-if="labelData.resolution">{{ labelData.resolution }}</span
                  ><span v-else> - </span>
                </p>
                <label class="col-span-1" for=""> Kategorie: </label>
                <p class="col-span-3">
                  <span v-if="labelData.kategorie"> {{ labelData.kategorie }} </span>
                  <span v-else> - </span>
                </p>
                <label class="col-span-1" for=""> Laufzeit: </label>
                <p class="col-span-3">
                  <span v-if="metaData.start_date"> {{ metaData.start_date }}</span>
                  <span v-else> {{ '?' }}</span>
                  <span>
                    <span>{{ '-' }} </span></span
                  ><span v-if="metaData.end_date"> {{ metaData.end_date }} </span>
                  <span v-else> ? </span>
                </p>
                <!--
                <label class="col-span-1" for=""> Auflösung: </label>
                <p class="col-span-3">
                  {{ metaData.name }}
                </p>
                <label class="col-span-1" for=""> Standorte: </label>
                <div class="col-span-3 flex-col justify-start">
                <span v-for="stand in standorte" :key="stand"> {{ stand  }}</span>
                  {{ metaData.name }}
                </div> -->
                <label class="col-span-1" for=""> VieCPro ID: </label>
                <p>{{ metaData.object_id }}</p>

                <!-- <label class="col-span-1" for="">
                  {{ metaData.gender === 'female' ? 'Geburtsname' : 'Name' }}</label
                >
                <p class="col-span-3">{{ metaData.name }}</p>
                <label v-if="metaData.gender === 'female'" class="col-span-1" for=""
                  >Ehename:</label
                > -->
                <!-- <p v-if="metaData.gender === 'female'" class="col-span-3">
                  {{ labelData.first_marriage }}
                </p>
                <label class="col-span-1" for="">Vorname/n:</label>
                <p class="col-span-3">{{ metaData.first_name }}</p> -->
                <!-- <label for="" class="col-span-1">Titel:</label>
                <p class="col-span-3">
                  <span v-if="labelData.title_honor.length" v-for="title in labelData.title_honor">
                    {{ title.name }}</span
                  ><span v-else> - </span> 
                </p>-->
                <!-- <label class="col-span-1" for="">Geboren:</label>
                <p class="col-span-3"> {{ metaData.start_date ? metaData.start_date : "-"}}  <span v-if="birthplace.target" class="px-2"> in </span><span v-if="birthplace.target" class="clickable-data-span" @click="useOpenDetail('Place', birthplace.target.object_id)"> {{ birthplace.target.name }}</span> <span v-else>  </span></p>
                <label class="col-span-1" for="">Gestorben:</label>
                <p class="col-span-3"> {{ metaData.end_date ? metaData.end_date : "-"}} <span v-if="deathplace.target" class="px-2"> in </span> <span v-if="deathplace.target" class="clickable-data-span" @click="useOpenDetail('Place', deathplace.target.object_id)">  {{ deathplace.target.name }}</span><span v-else>  </span></p>
            
                <label class="col-span-1" for="">Geschlecht:</label>
                <p class="col-span-3">{{ $t(`globals.${metaData.gender}`) }}</p>

                <label class="col-span-1" v-if="hofstaat.length"> Hofstaate:</label>
                <p class="col-span-3" v-if="hofstaat.length">
                  <p class="rounded bg-gray-100 text-gray-500 py-1 px-2 mr-2 text-sm w-fit mb-2 hover:cursor-pointer hover:bg-primary-100 hover:text-white"
                    v-for="hof in hofstaat"
                    @click="useOpenDetail('Hofstaat', hof.target.object_id)"
                    :key="hof"
                  >
                    {{ hof.target.name }}</p
                  >
                </p> -->
              </div>
            </div>
          </div>
          <div v-else>Loading</div>
        </div>
        <div id="container-below-meta" class="mb-10 w-full">
          <div v-if="dataIsReady" class="flex-col space-y-8">
            <!-- <CollapsableRelationSection
              header="Potentielle Dubletten"
              :data="personRelData['Doubletten Beziehung']"
              :is-collapsed="true"
            ></CollapsableRelationSection> -->
            <CollapsableLabelSection
              header="Alternative Bezeichnungen"
              :data="labelData.alt_names"
              :is-collapsed="true"
            ></CollapsableLabelSection>
            <!--
            <CollapsableLabelSection
              header="Adelsstand und Auszeichnungen"
              :data="labelData.collected_titles"
              :is-collapsed="true"
            ></CollapsableLabelSection>
    
            <CollapsableLabelSection
              header="Akademische Titel"
              :data="labelData.title_academic"
              :is-collapsed="true"
            ></CollapsableLabelSection> -->
            <GenericCollapsableSection
              header="Download und Zitierweise"
              :data="['test']"
              :is-collapsed="true"
            >
              <button @click="openDialog(myCallback)" class="hover:text-red-400">
                Vorgeschlagene Zitierweise <i class="fa-solid fa-square-up-right"></i>
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
          </div>
          <div v-else>Loading</div>
        </div>
      </div>
      <div id="container-split-right" class="flex-col xl:w-2/3 xl:pl-40 xl:mb-0 mb-10">
        <div id="container-relations" class="mb-10 w-full">
          <div v-if="dataIsReady" class="flex-col space-y-10">
            <h1 class="text-gray-400 font-light text-2xl text-left mb-2 pl-2 pt-2">
              <span
                class="text-gray-400 hover:text-gray-600 w-fit p-0 transition-all ease-in duration-500"
                >Relationen</span
              >
            </h1>
            <!-- <h2>Funktionen am Hof</h2> -->
            <CollapsableRelationSection
              header="Inhaber*innen"
              :data=" relData.PersonInstitution ? relData.PersonInstitution.filter((el)=>{ return ['war Hofstaat von [REVERSE]', 'gehörte'].includes(el.relation_type) }) : relData.PersonInstitution"
              :is-collapsed="true"
              :headers="['Relation', 'Ziel', 'Von', 'Bis']"
            ></CollapsableRelationSection>
            <CollapsableRelationSection
              header="Personalliste"
              :data="relData.PersonInstitution.length ? relData.PersonInstitution.filter((el)=>{ return !['war Hofstaat von [REVERSE]', 'gehörte'].includes(el.relation_type) }): []"
              :is-collapsed="true"
              :headers="['Relation', 'Ziel', 'Von', 'Bis']"
            ></CollapsableRelationSection>
            <!-- <GenericListSection :data="relData.PersonInstitution"></GenericListSection> -->
            <CollapsableRelationSection
              header="Standorte"
              :data="relData.InstitutionPlace"
              :headers="['Relation', 'Ziel', 'Von', 'Bis']"
              :is-collapsed="true"
            ></CollapsableRelationSection>
            <CollapsableRelationSection
              header="Hierarchie"
              :data="relData.InstitutionInstitution"
              :headers="['Relation', 'Ziel', 'Von', 'Bis']"
              :is-collapsed="true"
            ></CollapsableRelationSection>
            <!-- <h2>Teilnahme an Hofereignissen</h2> -->
            <!-- 
            <CollapsableLabelSection
              header="Sonstiger Bezug zum Hof"
              :data="labelData.court_other"
              :is-collapsed="true"
            ></CollapsableLabelSection>

            <h2 class="text-gray-400 font-light text-2xl text-left mb-2 pt-8 pl-2"> <span class="text-gray-400 hover:text-gray-600 w-fit p-0 transition-all ease-in duration-500">Weitere Informationen  </span>
</h2>
            <CollapsableRelationSection
              header="Ehe- und Verwandtschaftsverhältnisse"
              :data="personRelData['Verwandtschaftliche Beziehung']"
              :is-collapsed="true"
            ></CollapsableRelationSection>

            <CollapsableMixedSection
              header="Bezug zu Kirche und Orden"
              :relationData="
                relData['Kirchl. Amtsbeziehung'] ? relData['Kirchl. Amtsbeziehung'] : []
              "
              :labelData="labelData.church_and_o"
              :is-collapsed="true"
            ></CollapsableMixedSection>
            <CollapsableMixedSection
              header="Sonstige Tätigkeiten"
              :relationData="[]"
              :labelData="labelData.other_jobs"
              :is-collapsed="true"
            ></CollapsableMixedSection> -->
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
    <template v-slot:title> {{ copyResult ? copyResult : 'Vorgeschlagene Zitierweise:' }}</template>
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

<style>
.clickable-data-span {
  @apply rounded bg-gray-100 text-gray-500 py-1 px-2 mr-2 text-sm w-fit mb-2 hover:cursor-pointer hover:bg-primary-100 hover:text-white;
}
.non-clickable-data-span {
  @apply rounded bg-gray-100 text-gray-500 py-1 px-2 mr-2 text-sm w-fit mb-2;
}
</style>
