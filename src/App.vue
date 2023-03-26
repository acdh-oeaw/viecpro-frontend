<template>
  <body class="w-screen min-h-screen">
    <header>
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
      <!-- router section: "pages" from src/pages are displayed in here -->
      <RouterView />
    </main>
    <footer>
      <!-- footer section with impressum, logos, etc. -->
      <footerBar> </footerBar>
    </footer>
  </body>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import pageNavigation from "./components/pageNavigation.vue";
import footerBar from "./components/footerBar.vue";
import navLink from "./components/navLink.vue";
import type { navlinkProp } from "./types/prop_types";

const navLinks: navlinkProp[] = [
  { name: "Home", route: "/" },
  { name: "Database", route: "/search" },
  { name: "About", route: "/about" },
];
</script>

<style scoped>
header {
  position: sticky;
  top: 0;
}
</style>
