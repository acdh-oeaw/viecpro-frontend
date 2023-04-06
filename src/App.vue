<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import { ref, provide } from "vue";
import pageNavigation from "./components/pageNavigation.vue";
import footerBar from "./components/footerBar.vue";
import navLink from "./components/navLink.vue";
import type { navlinkProp } from "./types/prop_types";

// function toggleBlurred(value, selection, callback) {
//   console.log(value, selection, callback)
//   console.log("this", this)
//   console.log(toggleBlurred.callback)
//   isBlurred.value = value;
//   dialogResponse.value = selection;
//   console.log("dialogresponsevalue", dialogResponse.value)
//   if (toggleBlurred.callback && dialogResponse.value != ""){
//     console.log("callback was true")

//     toggleBlurred.callback(dialogResponse.value)
//   }

//   if (callback != null) {
//     callback(dialogResponse.value)
//   }
// }

const navLinks: navlinkProp[] = [
  { name: "Home", route: "/" },
  { name: "Database", route: "/search" },
  // { name: "Deduplication", route: "/deduplication" }, // TODO: removed for now, as not needed yet and not completet
  { name: "About", route: "/about" },
];

// provide("bgBlurred", { isBlurred, toggleBlurred, dialogResponse });
</script>

<template>
  <body class="flex-col w-full min-h-screen">
    <header>
      <!-- :class="{ 'blur-sm': isBlurred }" this was a test on the header -->
      <!-- main top navbar -->
      <pageNavigation :nav-links="navLinks">
        <template v-slot:left>
          <!-- <div class="w-20 h-5 bg-highlight-300 text-center">LOGO</div> -->
          <div class="flex grow lg:place-content-start place-content-center">
            <img
              class="h-20 hover:cursor-pointer"
              src="./assets/logos/logo_white.png"
              alt="Logo of the viecpro-project, containing the sillouette of a male face within the letter c."
              @click="$router.push('/')"
            />
          </div>
        </template>
      </pageNavigation>
    </header>
    <main>
      <!-- <Dialog
        :open="isBlurred"
        @close="toggleBlurred(false, 'aborted')"
        class="relative z-50"
      >
        <div class="fixed inset-0 bg-black/30" aria-hidden="true" />

        <div class="fixed inset-0 flex items-center justify-center">
          <DialogPanel class="w-full max-w-sm rounded bg-white py-4 px-10">
            <component :is="confirmDeletion"></component>
          </DialogPanel>
        </div>
      </Dialog> -->

      <!-- router section: "pages" from src/pages are displayed in here -->
      <RouterView />
    </main>
    <footer>
      <!-- footer section with impressum, logos, etc. -->
      <footerBar>
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
              <p><a class="hover:bg-blue-200" href="">Kontakt Team</a></p>
            </div>
          </div>
        </template>
        <template v-slot:middle>
          <div class="flex justify-between">
            <!-- <div>
              <img
                v-for="logo in [
                  './assets/logos/footer/fwf-logo-invers-transparent-var2.gif',
                  './assets/logos/footer/OEAW_Logo_Kurzform_white.tif',
                  './assets/logos/footer/Logo_ihb_kurzform_CMYK.svg',
                ]"
                :key="logo"
                :src="logo"
                alt="Logo des
              FWF."
                class="max-h-full py-10"
              />
            </div> -->
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

        ></footerBar
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
