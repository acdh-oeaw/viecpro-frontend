<template>
  <h2 class="mb-4 text-base">{{ $t("words.filter results") }}:</h2>

<div class="text-sm">

  <h4 class="mt-4 mb-2">nach Nachname</h4>
  <ais-refinement-list
    attribute="name"
    :show-more-limit="40"
    style="text-align: left; min-width: 300px"
    class="pl-6"

  >
    <template v-slot:showMoreLabel="{ isShowingMore }">
      {{
        !isShowingMore ? $t("words.show more") : $t("words.show less")
      }}
    </template></ais-refinement-list
  >
  <h4 class="mt-4 mb-2">nach Geschlecht</h4>
  <ais-refinement-list
    attribute="gender"
    style="text-align: left; min-width: 300px"
    class="pl-6"
  />
</div>

</template>
<script setup lang="ts"></script>

<style scoped></style>
