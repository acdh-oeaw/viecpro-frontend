// main navbar. navigates to pages, not within pages.

<script setup lang="ts">
import { RouterLink } from 'vue-router';
import type { navlinkProp } from '../types/prop_types';
import LocaleSelect from './LocaleSelect.vue';

// TODO: make links array of props and not slot content. To allow v-if for rendering links or all as hamburger menu items

const props = defineProps({ navLinks: Array<navlinkProp> });
</script>

<template>
  <nav class="bg-primary-100 h-20 w-full flex-col md:flex text-white flex-wrap">
    <div class="px-20 justify-center md:justify-start md:items-center md:max-w-1/4">
      <slot name="left">left</slot>
    </div>
    <!-- <div class="bg-primary-600 flex justify-center shrink items-center h-full">
      <slot name="mid"> mid </slot>
    </div> -->
    <div
      class="flex items-center bg-primary-100 flex-col md:flex-row md:justify-end md:flex-wrap md:items-center md:pr-20 md:space-x-4 md:h-full"
    >
      <RouterLink
        v-for="link in navLinks"
        :to="link.route"
        :key="link.name"
        class="py-1 px-2 text-gray-100 rounded hover:cursor-pointer hover:bg-primary-400 hover:text-white w-fit"
      >
        <div class="w-fit">
          {{ $t('navigation.' + link.name) }}
        </div>
      </RouterLink>

      <LocaleSelect class="w-fit"></LocaleSelect>
      <!-- <div class="py-1 w-4 m-0">login</div> -->
    </div>
    <div class="flex basis-1/3 space-x-4 justify-center bg-primary-400 md:hidden">
      <button>Placeholder Hamburger</button>
    </div>
  </nav>
</template>

<style scoped></style>
