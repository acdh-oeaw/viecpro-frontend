// Generic detail page for all entities // maped to a dynamic route // generic
sections are coded as external components /* TODO: at the moment, this same view
deals with entities and relations display (i.e. you can view a single relation
instance as the base entity. This needs to be split into two different generic
components - if we want to show detail views of relations at all.) */

<script setup lang="ts">
// utitily imports
import { ref, onBeforeMount, reactive } from "vue";
import type { Ref } from "vue";
import genericTable from "@/components/genericTable.vue";
// component imports
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";
import entityVisualisationSection from "@/components/entity-components/entityVisualisationSection.vue";
import { Switch } from "@headlessui/vue";

const entityType: Ref<string> = ref("");
const data: Ref<object> = ref({});
const functions: Ref<Array<string>> = ref([]);
const relations: Ref<object> = ref({});
const converted_model: Ref<string> = ref("");
const showInformation: Ref<boolean> = ref(false);
//const model_type: Ref<String> = ref("")

const props = defineProps({
  ent_type: String,
  ent_id: String,
  ent_model: String,
  model_type: String,
});

// TODO: make this a composable
// TODO: delegetae the responsibility for processing the received data to the views that use the composable
// TODO: write reusable processing functions for formatting the fetched data
onBeforeMount(() => {
  const etype = props.ent_type == "entities" ? "person" : "relation";

  // work around for the current editor only implementation of splitting Persons into viecpro specific types. maps those types back to "person"
  // will be removed later
  if (["Vorfin", "Single", "Dublette"].includes(props.ent_model as string)) {
    converted_model.value = "person";
  } else {
    converted_model.value = props.ent_model as string;
  }

  const url =
    import.meta.env.VITE_APIS_INSTANCE_BASE_URL +
    `apis/api/${props.ent_type}/${converted_model.value.toLowerCase()}/${
      props.ent_id
    }/?format=json`;

  let temp_rels: object = {};
  fetch(url, {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      Authorization: import.meta.env.VITE_APIS_API_AUTHORIZATION,
      accept: "*/*",
    },
  })
    .then((d) => d.json())
    .then((json_data) => {
      data.value = json_data;
      let test: Set<string> | Array<string> = new Set(
        json_data.relations.map((el) => {
          if (el.related_entity.type == "Institution") {
            return el.relation_type.label;
          } else {
            return "placeholder dummy";
          }
        })
      );
      test = Array.from(test).filter((el) => el != "placeholder dummy");

      functions.value = test;
      json_data.relations.forEach((el) => {
        // transform relations array into object with key: related_entity, values: array of relations
        if (Object.keys(temp_rels).includes(el.related_entity.type)) {
          temp_rels[el.related_entity.type].push(el);
        } else {
          temp_rels[el.related_entity.type] = [el];
        }
      });
      relations.value = temp_rels;
    });
});
</script>
<template>
  <div id="main-container flex" class="bg-white">
    <!-- TODO: make this a composable also -->
    <div class="w-screen bg-transparent flex place-content-end sticky top-20">
      <div
        class="bg-red-300 flex place-content-center mr-80 py-5 w-40 sticky top-20"
      >
        <label for="information-switch" class="mr-4 sticky top-20">{{
          showInformation ? "Infos:" : "Infos: "
        }}</label>
        <Switch
          v-model="showInformation"
          as="template"
          v-slot="{ checked }"
          id="information-switch"
          class=""
        >
          <button
            class="inline-flex h-6 w-11 items-center rounded-full"
            :class="checked ? 'bg-blue-600' : 'bg-gray-200'"
          >
            <span class="sr-only">Enable information</span>
            <span
              :class="checked ? 'translate-x-6' : 'translate-x-1'"
              class="inline-block h-4 w-4 transform rounded-full bg-white transition"
            />
          </button>
        </Switch>
      </div>
    </div>
    <div class="flex place-content-between mx-40 pt-20" id="meta-and-actions">
      <div class="flex-col" id="meta-section">
        <EntityMetaBase :data="data" :model="ent_model"
          ><component
            v-if="data.relations"
            :is="ent_model + 'Meta'"
            :data="data"
          >
          </component
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
      <entityVisualisationSection
        :ent_type="converted_model"
      ></entityVisualisationSection>
    </div>

    <!-- TODO: add proper :key attribs for all v-for loops here -->
    <div class="mx-40 bg-blue-200 min-h-screen pt-4" id="tables-section">
      <TabGroup>
        <TabList>
          <Tab class="tab-standard">JSON</Tab>
          <Tab class="tab-standard">RelationsData</Tab>
          <Tab
            v-for="(rels, model) in relations"
            class="tab-standard"
            :key="model + '_tablist'"
            >{{ model + " - Relations" }}
          </Tab>
        </TabList>
        <TabPanels>
          <!-- TODO: implement correct loading logic for all components in a reusable fashion -->
          <TabPanel class="tab-panel-standard">
            {{ data ? data : "loading" }}
            <div
              class="bg-black text-white w-20 h-20 pt-7 text-center"
              :class="showInformation ? 'visible' : 'hidden'"
            >
              I
            </div>
          </TabPanel>
          <TabPanel class="tab-panel-standard">
            <div
              v-for="(values, model) in relations"
              :key="model + '_relation'"
            >
              <h3 class="text-xl">{{ model + "-Relations" }}</h3>
              <ul>
                <li v-for="val in values" :key="val + '_val'">{{ val }}</li>
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
                :headers="['id', 'relation_type', 'related_entity']"
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
