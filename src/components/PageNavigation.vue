// main navbar. navigates to pages, not within pages.

<script setup lang="ts">
import { RouterLink, useRoute } from 'vue-router';
import LocaleSelect from './LocaleSelect.vue';
import { ref, onMounted, computed } from 'vue';

const showLogo = ref(true);
const navBarHeight = ref('h-20');
const textSize = ref('text-lg');

const route = useRoute();
onMounted(() => {
  window.addEventListener('scroll', updateScrollPos);
});

const currPage = computed(() => {
  return route.name;
});

function updateScrollPos() {
  if (currPage.value != 'home') {
    if (window.scrollY > 80) {
      navBarHeight.value = 'h-10';
      showLogo.value = false;
      textSize.value = 'text-md';
    }

    if (window.scrollY < 10) {
      navBarHeight.value = 'h-20';
      textSize.value = 'text-lg';

      setTimeout(() => {
        if (window.scrollY < 10) {
          showLogo.value = true;
        }
      }, 150);
    }
  }
}
</script>

<template>
  <nav
    class="bg-primary-100 w-full flex-col md:flex text-white flex-wrap pr-16 pl-16 tracking-wider border-0 transition-all duration-250 ease-in-out"
    :class="[navBarHeight, textSize]"
  >
    <div v-if="showLogo" class="px-20 justify-center md:justify-start md:items-center md:max-w-1/4">
      <img
        class="h-20 hover:cursor-pointer mx-auto md:mx-0"
        src="/src/assets/logos/logo_white.png"
        alt="Logo of the viecpro-project, containing the sillouette of a male face within the letter c."
        @click="$router.push('/')"
      />
    </div>

    <div
      class="flex items-center flex-col md:flex-row md:justify-end md:flex-wrap md:items-center md:pr-20 md:space-x-4 md:h-full"
    >
      <RouterLink
        to="/"
        class="py-1 mx-4 px-2 text-gray-100 rounded hover:cursor-pointer hover:bg-primary-400 hover:text-white w-fit"
      >
        <div class="w-fit">
          <i class="fa-solid fa-house"></i>
        </div>
      </RouterLink>
      <RouterLink
        to="/search/Person"
        class="py-1 px-4 text-gray-100 rounded hover:cursor-pointer hover:bg-primary-400 hover:text-white w-fit"
      >
        <div class="w-fit">
          {{ $t('navigation.Database') }}
        </div>
      </RouterLink>
      <RouterLink
        to="/about"
        class="py-1 px-4 text-gray-100 rounded hover:cursor-pointer hover:bg-primary-400 hover:text-white w-fit"
      >
        <div class="w-fit">
          {{ $t('navigation.About') }}
        </div>
      </RouterLink>

      <!-- <LocaleSelect class="w-fit"></LocaleSelect> -->
      <!-- <div class="py-1 w-4 m-0">login</div> -->
    </div>
    <div class="flex basis-1/3 space-x-4 justify-center md:hidden">
      <button>Placeholder Hamburger</button>
    </div>
  </nav>
</template>

<style scoped></style>
