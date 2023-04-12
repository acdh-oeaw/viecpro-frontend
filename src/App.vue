<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import { ref, provide } from 'vue';
import PageNavigation from './components/PageNavigation.vue';
import FooterSection from './components/FooterSection.vue';
import NavLink from './components/NavLink.vue';
import type { navlinkProp } from './types/prop_types';

const navLinks: navlinkProp[] = [
  { name: 'Home', route: '/' },
  { name: 'Database', route: '/search' },
  // { name: "Deduplication", route: "/deduplication" }, // TODO: removed for now, as not needed yet and not completet
  { name: 'About', route: '/about' },
];
</script>

<template>
  <body class="flex-col w-full min-h-screen">
    <header>
      <!-- main top navbar -->
      <PageNavigation :nav-links="navLinks">
        <template v-slot:left>
          <div class="flex grow lg:place-content-start place-content-center">
            <img
              class="h-20 hover:cursor-pointer"
              src="./assets/logos/logo_white.png"
              alt="Logo of the viecpro-project, containing the sillouette of a male face within the letter c."
              @click="$router.push('/')"
            />
          </div>
        </template>
      </PageNavigation>
    </header>
    <main>
      <!-- router section: "pages" from src/pages are displayed in here -->
      <RouterView />
    </main>
    <footer>
      <!-- footer section with impressum, logos, etc. -->
      <FooterSection>
        <template v-slot:left>
          <div class="flex text-black justify-start">
            <img
              src="./assets/logos/footer/Logo_ihb_kurzform_CMYK.svg"
              alt="Logo des
              IHB."
              class="max-h-full py-4 mx-4"
            />
            <div class="flex-col my-4 mx-4 text-sm">
              <div class="">
                <p>Österreichische Akademie der Wissenschaften</p>
                <p>Institute for Habsburg and Balkan Studies (IHB)</p>
                <p>Hollandstraße 11-13</p>
                <p>1020 Wien</p>
              </div>
              <p><strong>Email:</strong> viecpro@oeaw.ac.at</p>
              <p>
                <a class="hover:bg-blue-200" href="">Kontakt Team</a>
              </p>
            </div>
          </div>
        </template>
        <template v-slot:middle>
          <div class="flex justify-between">
            <img
              src="./assets/logos/footer/fwf-logo-invers-transparent-var2.gif"
              alt="Logo des
              FWF."
              class="box max-h-full py-10 mx-4 invert"
            />

            <img
              src="./assets/logos/footer/OEAW_Logo_cmyk.jpg"
              alt="Logo der
              ÖAW."
              class="box max-h-full py-10 mx-4"
            /></div
        ></template>

        <template v-slot:right></template>

        ></FooterSection
      >
    </footer>
  </body>
</template>

<style scoped>
header {
  position: sticky;
  top: 0;
}
</style>
