<template>
  <h2>{{ $t('words.filter results') }}</h2>

  <!-- <h4>by Relation</h4> -->
  <!-- <ais-refinement-list attribute="model" :show-more-limit="40" style="text-align: left; min-width: 300px" /> -->
  <!-- <h4>by Source Entity Type</h4> -->

  <!-- <ais-refinement-list attribute="source_kind" :show-more-limit="40" style="text-align: left; min-width: 300px" />
    <h4>by Target Entity Type</h4>
    <ais-refinement-list attribute="target_kind" :show-more-limit="40" style="text-align: left; min-width: 300px" /> -->
  <h4>{{ $t('words.by relation type') }}</h4>
  <ais-refinement-list
    attribute="relation_type"
    show-more
    :show-more-limit="40"
    style="text-align: left; min-width: 300px"
  >
    <template v-slot:showMoreLabel="{ isShowingMore }">
      {{ !isShowingMore ? $t('words.show more') : $t('words.show less') }}
    </template></ais-refinement-list
  >
</template>
<script setup lang="ts"></script>

<style scoped></style>
