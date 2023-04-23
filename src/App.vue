<script setup lang="ts">
import {  RouterView } from 'vue-router';


</script>

<template>
  <body class="flex-col w-full min-h-screen">
 
    <main>
      <!-- router section: "pages" from src/pages are displayed in here -->
      <!-- <transition name="fade"> -->
        <RouterView :key="$route.path"> </RouterView>
      <!-- </transition> -->
    </main>
   
  </body>
</template>

<style scoped>
/* header {
  position: sticky;
  top: 0;
} */

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
