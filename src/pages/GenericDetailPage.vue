<script setup lang="ts">
// define props as entry point

// fetch additional data

// prepare data for all sub-views (name them accordingly)
</script>
<template>
  <!-- GENERAL LAYOUT -->
  <div id="container-main" class="flex-col text-center min-h-screen bg-gray-200">
    <div id="container-above-split" class="bg-yellow-100">Above Container</div>
    <div id="container-split" class="bg-red-50 p-10 xl:justify-between flex flex-col xl:flex-row">
      <div id="container-split-left" class="flex-col w-full xl:w-1/4 bg-red-200 xl:mb-0 mb-10">
        <div id="container-meta" class="bg-gray-300 mb-10 h-60 w-full">Meta Section</div>
        <div id="container-below-meta" class="bg-gray-300 h-40 mb-10 w-full">Below Meta</div>
      </div>
      <div id="container-split-right" class="flex-col xl:w-2/3 bg-red-200  xl:mb-0 mb-10">
        <div id="container-relations" class="bg-gray-300 mb-10 h-60 w-full">Relations</div>
        <div id="container-below-relations" class="bg-gray-300 h-40 mb-10">Below Relations</div>
      </div>
    </div>
    <div id="container-below-split" class="bg-green-100">Below Container</div>
  </div>
</template>

<style scoped></style>
