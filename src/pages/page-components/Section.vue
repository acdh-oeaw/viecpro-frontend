<script lang="ts">
import { ref, watch, onBeforeMount, onMounted } from "vue";

const props = defineProps([]);
</script>
<template>
	<div>
		<h1></h1>
		<!-- slot for additional content -->
		<slot></slot>
	</div>
</template>
<style scoped></style>
