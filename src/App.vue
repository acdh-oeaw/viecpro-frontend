<template>
  <body class="w-screen min-h-screen">
    <header :class="{ 'blur-sm': isBlurred }">
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
    <main :class="{ 'blur-sm': isBlurred }">
      <Dialog
        :open="isBlurred"
        @close="toggleBlurred(false, 'aborted')"
        class="relative z-50"
      >
        <!-- The backdrop, rendered as a fixed sibling to the panel container -->
        <div class="fixed inset-0 bg-black/30" aria-hidden="true" />

        <!-- Full-screen container to center the panel -->
        <div class="fixed inset-0 flex items-center justify-center p-4">
          <!-- The actual dialog panel -->
          <DialogPanel class="w-full max-w-sm rounded bg-white py-4 px-10">
            <component :is="confirmDeletion"></component>
            <!-- ... -->
          </DialogPanel>
        </div>
      </Dialog>

      <!-- router section: "pages" from src/pages are displayed in here -->
      <RouterView />
    </main>
    <footer :class="{ 'blur-sm': isBlurred }">
      <!-- footer section with impressum, logos, etc. -->
      <footerBar> </footerBar>
    </footer>
  </body>
</template>

<script setup lang="ts">
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
  DialogDescription,
  DialogOverlay,
} from "@headlessui/vue";
import { RouterLink, RouterView } from "vue-router";
import { ref, provide } from "vue";
import pageNavigation from "./components/pageNavigation.vue";
import footerBar from "./components/footerBar.vue";
import navLink from "./components/navLink.vue";
import type { navlinkProp } from "./types/prop_types";
import confirmDeletion from "./components/dialogs/confirmDeletion.vue";

const isBlurred = ref(false);
const dialogResponse = ref("");




function toggleBlurred(value, selection, callback) {
  console.log(value, selection, callback)
  console.log("this", this)
  console.log(toggleBlurred.callback)
  isBlurred.value = value;
  dialogResponse.value = selection;
  console.log("dialogresponsevalue", dialogResponse.value)
  if (toggleBlurred.callback && dialogResponse.value != ""){
    console.log("callback was true")

    toggleBlurred.callback(dialogResponse.value)
  }

  if (callback != null) {
    callback(dialogResponse.value)
  }
}

const navLinks: navlinkProp[] = [
  { name: "Home", route: "/" },
  { name: "Database", route: "/search" },
  { name: "Deduplication", route: "/deduplication" },
  { name: "About", route: "/about" },
];

provide("bgBlurred", { isBlurred, toggleBlurred, dialogResponse });

</script>

<style scoped>
header {
  position: sticky;
  top: 0;
}
</style>
