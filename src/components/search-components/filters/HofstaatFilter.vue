<template>
    <h2>{{  $t("filters-section.filter-results") }}</h2>
  
    <h4>{{  $t("filters-section.by kind") }}</h4>
    <ais-refinement-list attribute="" :show-more-limit="40" style="text-align: left; min-width: 300px" />
    <!-- <h4>by Kind</h4>
  <ais-refinement-list
    attribute="kind"
    show-more
    :show-more-limit="40"
    style="text-align: left; min-width: 300px"
  /> -->
  </template>
  <script setup lang="ts"></script>
  
  <style scoped></style>
  