<template>
  <h2>Filter Results</h2>

  <!-- <h4>by Relation</h4> -->
  <!-- <ais-refinement-list attribute="model" :show-more-limit="40" style="text-align: left; min-width: 300px" /> -->
  <!-- <h4>by Source Entity Type</h4> -->

  <!-- <ais-refinement-list attribute="source_kind" :show-more-limit="40" style="text-align: left; min-width: 300px" />
  <h4>by Target Entity Type</h4>
  <ais-refinement-list attribute="target_kind" :show-more-limit="40" style="text-align: left; min-width: 300px" /> -->
  <h4>by Relation Type</h4>
  <ais-refinement-list
    attribute="relation_type"
    show-more
    :show-more-limit="40"
    style="text-align: left; min-width: 300px"
  />
</template>
<script setup lang="ts"></script>

<style scoped>

</style>
