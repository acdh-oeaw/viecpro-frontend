<template>
  <h2 class="mb-4 text-base">{{ $t('words.filter results') }}:</h2>
  <div class="text-sm">
    <h4 class="mt-4 mb-2">{{ $t('filters-section.by kind') }}</h4>
    <ais-refinement-list
      class="pl-6"
      attribute="owner.name"
      :show-more-limit="40"
      style="text-align: left; min-width: 300px"
    />
  </div>
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
