
// TODO: test this, for displaying relations not as tables, but as list items grouped together under the same related_entityA
// show: relation_type, start_date, end_date, target_entity
// this component should render a single li, and work together with the entityList component.
<template>
    <div>
    <!-- TODO: finish splitting data into parts here -->
    <span>{{ data }}</span> <span></span> <span></span>
    </div>

</template>

<script setup lang="ts">

const props = defineProps({data:Object})
</script>
<style scoped></style>
