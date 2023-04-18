// UNUSED AT THE MOMENT

<script setup lang="ts">
const props = defineProps(["data"]);
const orderedKeys = ["relation_type", "target.name", "start_date", "end_date"];
</script>
<template>
	<ul>
		<li v-for="el in data" :key="el.id">
			<template v-for="key in orderedKeys" :key="el + '_' + key">
				<!-- TODO: make this grid -->
				<span v-if="key === 'target.name'" class="mx-2"> {{ el["target"]["name"] }}</span>
				<span v-else class="mx-2"> {{ el[key] }}</span>
			</template>
		</li>
	</ul>
</template>
<style scoped></style>
