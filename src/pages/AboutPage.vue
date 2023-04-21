// the about page, with information on project, data, usage, team, etc. // TODO:

<script setup lang="ts">
import GenericDialog from '@/components/dialogs/GenericDialog.vue';
import { useCustomConfirmation } from '@/composables/useCustomConfirmation';
import { ref, onBeforeMount, watch, reactive, toRefs } from 'vue';
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue';
import StyledMarkdownSection from './about-page-sections/StyledMarkdownSection.vue';
import ProjectSection from './about-page-sections/ProjectSection.vue';
import DataSection from './about-page-sections/DataSection.vue';
import TeamSection from './about-page-sections/TeamSection.vue';
import TechnicalSection from './about-page-sections/TechnicalSection.vue';
import MaterialsSection from './about-page-sections/MaterialsSection.vue';
import PartnersSection from './about-page-sections/PartnersSection.vue';
import useParseMarkdown from '@/composables/utils/useParseMarkdown';

import test from '/src/assets/test.md';
const baseKey = 'pages.about-page.';

const { openDialog, isRevealed, confirm, cancel } = useCustomConfirmation();

const sections = ref({
  database: {},
  team: {},
  usage: {},
});

const testMarked = ref('');

const pageFiles = reactive({
  dataSection: 'Daten.md',
  materialSection: 'Materialien.md',
  partnerSection: 'Kooperationspartner.md',
  projectSection: 'Projekt.md',
  teamSection: 'Team.md',
  technicalSection: 'Forschungsinfrastruktur.md',
});

const {
  dataSection,
  materialSection,
  partnerSection,
  projectSection,
  teamSection,
  technicalSection,
} = toRefs(pageFiles);

const basePath = '/src/assets/markdown/';
onBeforeMount(() => {
  [
    dataSection,
    materialSection,
    partnerSection,
    projectSection,
    teamSection,
    technicalSection,
  ].forEach((section) => {
    useParseMarkdown(basePath + section.value, section);
  });
});

const tabs = {
  database: 'database.tablink',
};
</script>

<template>
  <div class="flex min-h-screen justify-between mr-80 ml-40 text-left">
    <div class="min-h-screen my-20">
      <TabGroup vertical as="div" class="flex" :defaultIndex="0">
        <TabList class="min-w-40 py-20 border-r-2 px-10" id="about_navigation">
          <Tab as="template" v-slot="{ selected }" class="focus:outline-none">
            <div
              class="hover:cursor-pointer hover:bg-primary-900/40 hover:text-white px-2 py-1 rounded my-2"
              :class="{
                'bg-primary-900/70 text-white border-0': selected,
              }"
            >
              {{ $t(baseKey + 'project.tablink') }}
            </div>
          </Tab>
          <Tab as="template" v-slot="{ selected }" class="focus:outline-none">
            <div
              class="hover:cursor-pointer hover:bg-primary-900/40 hover:text-white px-2 py-1 rounded my-2"
              :class="{
                'bg-primary-900/70 text-white border-0': selected,
              }"
            >
              {{ $t(baseKey + 'data.tablink') }}
            </div>
          </Tab>

          <Tab as="template" v-slot="{ selected }" class="focus:outline-none">
            <div
              class="hover:cursor-pointer hover:bg-primary-900/40 hover:text-white px-2 py-1 rounded my-2"
              :class="{
                'bg-primary-900/70 text-white border-0': selected,
              }"
            >
              {{ $t(baseKey + 'team.tablink') }}
            </div>
          </Tab>
          <Tab as="template" v-slot="{ selected }" class="focus:outline-none">
            <div
              class="hover:cursor-pointer hover:bg-primary-900/40 hover:text-white px-2 py-1 rounded my-2"
              :class="{
                'bg-primary-900/70 text-white border-0': selected,
              }"
            >
              {{ $t(baseKey + 'technical.tablink') }}
            </div>
          </Tab>
          <Tab as="template" v-slot="{ selected }" class="focus:outline-none">
            <div
              class="hover:cursor-pointer hover:bg-primary-900/40 hover:text-white px-2 py-1 rounded my-2"
              :class="{
                'bg-primary-900/70 text-white border-0': selected,
              }"
            >
              {{ $t(baseKey + 'materials.tablink') }}
            </div>
          </Tab>
          <Tab as="template" v-slot="{ selected }" class="focus:outline-none">
            <div
              class="hover:cursor-pointer hover:bg-primary-900/40 hover:text-white px-2 py-1 rounded my-2"
              :class="{
                'bg-primary-900/70 text-white border-0': selected,
              }"
            >
              {{ $t(baseKey + 'partners.tablink') }}
            </div>
          </Tab>
          <!-- <Tab as="template" v-slot="{ selected }" class="focus:outline-none">
            <div
              class="hover:cursor-pointer hover:bg-primary-900/40 hover:text-white px-2 py-1 rounded my-2"
              :class="{
                'bg-primary-900/70 text-white border-0': selected,
              }"
            >
              Test Markdown
            </div>
          </Tab> -->
        </TabList>
        <TabPanels class="flex-grow pl-20" id="about_content" as="div">
          <!-- <TabPanel> <ProjectSection></ProjectSection></TabPanel>
          <TabPanel> <DataSection></DataSection> </TabPanel>
          <TabPanel> <TeamSection></TeamSection></TabPanel>
          <TabPanel> <TechnicalSection></TechnicalSection> </TabPanel>
          <TabPanel> <MaterialsSection></MaterialsSection> </TabPanel>
          <TabPanel> <PartnersSection></PartnersSection> </TabPanel> -->

          <TabPanel>
            <StyledMarkdownSection :parsedMarkdown="projectSection"></StyledMarkdownSection>
          </TabPanel>
          <TabPanel>
            <StyledMarkdownSection :parsedMarkdown="dataSection"></StyledMarkdownSection>
          </TabPanel>
          <TabPanel>
            <StyledMarkdownSection :parsedMarkdown="teamSection"></StyledMarkdownSection>
          </TabPanel>
          <TabPanel>
            <StyledMarkdownSection :parsedMarkdown="technicalSection"></StyledMarkdownSection>
          </TabPanel>
          <TabPanel>
            <StyledMarkdownSection :parsedMarkdown="materialSection"></StyledMarkdownSection>
          </TabPanel>
          <TabPanel>
            <StyledMarkdownSection :parsedMarkdown="partnerSection"></StyledMarkdownSection>
          </TabPanel>

          <!-- <TabPanel>
            <div v-html="testMarked"></div>
            {{ testMarked }}
            <div>
              <h1>Markdown component example</h1>
              <Markdown :source="testMarked"></Markdown></div
          ></TabPanel> -->
        </TabPanels>
      </TabGroup>
    </div>
  </div>

  <GenericDialog :confirm="confirm" :is-revealed="isRevealed" :cancel="cancel"></GenericDialog>
</template>

<style scoped>

.indent {
  @apply ml-6;
}

/* h1 {
  @apply text-4xl text-primary-600 mb-4;
} */

p {
  @apply mb-5;
}
h2 {
  @apply text-2xl text-primary-600 mb-4;
}
</style>
