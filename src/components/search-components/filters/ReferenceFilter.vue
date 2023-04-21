<template>
  <h2>Ergebnisse Filtern:</h2>

  <div class="text-sm">
    <h4 class="mt-4 mb-2">nach Kurztitel</h4>
    <ais-refinement-list
      attribute="shortTitle"
      :show-more-limit="40"
      style="text-align: left; min-width: 300px"
      class="pl-6"
    />
    <h4 class="mt-4 mb-2">nach Belegter Entität</h4>
    <ais-refinement-list
      show-more      attribute="related_doc.name"
      :show-more-limit="40"
      style="text-align: left; min-width: 300px"
      class="pl-6"
    />
    <h4 class="mt-4 mb-2">nach Klasser der belegten Entität</h4>
    <ais-refinement-list
      attribute="related_doc.model"
      :show-more-limit="40"
      style="text-align: left; min-width: 300px"
      class="pl-6"
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
