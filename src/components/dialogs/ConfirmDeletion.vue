<script setup lang="ts">
import { inject } from "vue";
import { DialogTitle, DialogDescription } from "@headlessui/vue";

const { isBlurred, toggleBlurred } = inject("bgBlurred");
</script>
<template></template>
<style scoped></style>
