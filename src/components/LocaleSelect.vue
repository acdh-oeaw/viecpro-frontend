<script setup lang="ts"></script>
<template>
  <!-- <label class="mr-2" for="locale">Locale: </label> -->
  <select v-model="$i18n.locale" id="locale" class="text-black rounded-sm px-2">
    <option v-for="locale in $i18n.availableLocales" :value="locale">
      {{ locale }}
    </option>
  </select>
</template>

<style scoped>
select {
  height: 25px;
}
</style>
