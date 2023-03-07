

<template>
    <div class="bg-black text-white h-20"> Visualisation Section {{ props.ent_type }}</div>
</template>

<script setup lang="ts">

import { defineProps, ref } from "vue";

const props = defineProps({ ent_type: String })
</script>
<style scoped></style>
