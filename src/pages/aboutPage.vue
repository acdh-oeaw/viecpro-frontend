// the about page, with information on project, data, usage, team,
etc. // TODO:

<script setup lang="ts">
import genericDialog from "@/components/dialogs/genericDialog.vue";
import { useCustomConfirmation } from "@/composables/useCustomConfirmation";
import { ref, onBeforeMount, watch, reactive } from "vue";
import {
  TabGroup,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from "@headlessui/vue";

import projectSection from "./about-page-sections/projectSection.vue";
import dataSection from "./about-page-sections/dataSection.vue";
import teamSection from "./about-page-sections/teamSection.vue";
import technicalSection from "./about-page-sections/technicalSection.vue";

const baseKey = "pages.about-page.";

const { openDialog, isRevealed, confirm, cancel } =
  useCustomConfirmation();

const sections = ref({
  database: {},
  team: {},
  usage: {},
});

const tabs = {
  database: "database.tablink",
};

function myComputation(data) {
  console.log(data);
}
</script>

<template>
  <div class="flex min-h-screen justify-between mr-80 ml-40 text-left">
    <div class="min-h-screen my-20">
      <TabGroup vertical as="div" class="flex" :defaultIndex="0">
        <TabList
          class="min-w-40 py-20 border-r-2 px-10"
          id="about_navigation"
        >
          <Tab
            as="template"
            v-slot="{ selected }"
            class="focus:outline-none"
          >
            <div
              class="hover:cursor-pointer hover:bg-primary-900/40 hover:text-white px-2 py-1 rounded my-2"
              :class="{
                'bg-primary-900/70 text-white border-0': selected,
              }"
            >
              {{ $t(baseKey + "data.tablink") }}
            </div>
          </Tab>
          <Tab
            as="template"
            v-slot="{ selected }"
            class="focus:outline-none"
          >
            <div
              class="hover:cursor-pointer hover:bg-primary-900/40 hover:text-white px-2 py-1 rounded my-2"
              :class="{
                'bg-primary-900/70 text-white border-0': selected,
              }"
            >
              {{ $t(baseKey + "project.tablink") }}
            </div>
          </Tab>
          <Tab
            as="template"
            v-slot="{ selected }"
            class="focus:outline-none"
          >
            <div
              class="hover:cursor-pointer hover:bg-primary-900/40 hover:text-white px-2 py-1 rounded my-2"
              :class="{
                'bg-primary-900/70 text-white border-0': selected,
              }"
            >
              {{ $t(baseKey + "team.tablink") }}
            </div>
          </Tab>
          <Tab
            as="template"
            v-slot="{ selected }"
            class="focus:outline-none"
          >
            <div
              class="hover:cursor-pointer hover:bg-primary-900/40 hover:text-white px-2 py-1 rounded my-2"
              :class="{
                'bg-primary-900/70 text-white border-0': selected,
              }"
            >
              {{ $t(baseKey + "infrastructure.tablink") }}
            </div>
          </Tab>
        </TabList>
        <TabPanels
          class="flex-grow pl-20"
          id="about_content"
          as="div"
        >
          <TabPanel> <dataSection></dataSection> </TabPanel>
          <TabPanel> <projectSection></projectSection></TabPanel>
          <TabPanel> <teamSection></teamSection></TabPanel>
          <TabPanel> <technicalSection></technicalSection> </TabPanel>
        </TabPanels>
      </TabGroup>
      <!-- <TabGroup
        v-if="texts.pages"
        vertical
        as="div"
        class="flex"
        :defaultIndex="0"
      >
        <TabList class="min-w-40 py-20 border-r-2 px-10" id="about_navigation">
          <div
            class="indent"
            v-for="(value, key) in texts.pages['about-page']"
            :key="key"
          >
            <Tab as="template" v-slot="{ selected }" class="focus:outline-none">
              <div
                class="hover:cursor-pointer hover:bg-primary-900/40 hover:text-white px-2 py-1 rounded my-2"
                :class="{ 'bg-primary-900/70 text-white border-0': selected }"
              >
                {{ $t(`pages.about-page.${key}.header`) }}
              </div>
            </Tab>

            <div
              v-if="value.children"
              v-for="(_, nested_key) in texts.pages['about-page'][key].children"
              :key="nested_key"
              class="indent"
            >
              {{ $t(`pages.about-page.${key}.children.${nested_key}.header`) }}
            </div>
          </div>
        </TabList>
        <TabPanels class="flex-grow pl-20" id="about_content" as="div">
          <TabPanel
            v-if="texts.pages"
            v-for="(value, key) in texts.pages['about-page']"
            :key="key"
            as="div"
          >
            <h1>{{ $t(`pages.about-page.${key}.header`) }}</h1>
            <p>{{ $t(`pages.about-page.${key}.text`) }}</p>

            <div
              v-if="value.children"
              v-for="(_, nested_key) in texts.pages['about-page'][key].children"
              :key="nested_key"
            >
              <h2>
                {{
                  $t(`pages.about-page.${key}.children.${nested_key}.header`)
                }}
              </h2>
              <p class="">
                {{ $t(`pages.about-page.${key}.children.${nested_key}.text`) }}
              </p>
            </div>
          </TabPanel>
        </TabPanels>
      </TabGroup> -->
    </div>

    <!-- <div class="flex-grow pl-20" id="about_content">
      <button
        class="bg-primary-200 rounded px-4 py-2 text-white mt-4"
        @click="openDialog(myComputation)"
      >
        Test Dialog
      </button> 
    </div> -->
  </div>

  <genericDialog
    :confirm="confirm"
    :is-revealed="isRevealed"
    :cancel="cancel"
  ></genericDialog>
</template>

<style scoped>
.indent {
  @apply ml-6;
}

h1 {
  @apply text-4xl text-primary-600 mb-4;
}

p {
  @apply mb-5;
}
h2 {
  @apply text-2xl text-primary-600 mb-4;
}
</style>
