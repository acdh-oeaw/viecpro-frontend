<script setup lang="ts">
import { ref, onMounted } from "vue";
const props = defineProps(["data"]);
const functions = ref(new Set<string>());

onMounted(() => {
	if (props.data.relations.PersonInstitution) {
		let parsedFunctions: Set<string> | Array<string> = new Set(
			props.data.relations.PersonInstitution.map((el: object) => {
				//TODO: type this object.
				return el.relation_type;
			}),
		);
		console.log("object keys: ", Object.keys(props.data.relations));
		console.log(props.data.titles);
		//test = Array.from(test).filter((el) => el != "placeholder dummy");
		functions.value = parsedFunctions;
	}
});
</script>

<template>
	<div v-if="data.titles.length" class="mt-4">
		<span>
			<label class="mr-2">Titel:</label>
			<span v-for="val in data.titles" :key="val" class="rounded bg-gray-100 px-2 py-1">{{
				val.name
			}}</span>
		</span>
	</div>
	<div v-if="data.gender" class="mt-4">
		<span>
			<label>Gender: </label>
			<span class="rounded bg-gray-100 px-2 py-1"> {{ $t(`globals.${data.gender}`) }} </span></span
		>
	</div>
	<div v-if="data.konfession" class="mt-4">
		<span>
			<label>Konfession: </label>
			<span class="rounded bg-gray-100 px-2 py-1"> {{ data.konfession[0].name }} </span></span
		>
	</div>
	<div v-if="functions.size" style="max-width: 40rem" class="flex mt-4">
		<label class="mr-2"> Funktionen: </label>
		<div class="flex flex-wrap">
			<span
				v-for="func in functions"
				class="block mr-2 my-1 bg-gray-200 px-4 py-2 rounded text-gray-500 text-xs hover:bg-gray-300 hover:text-gray-700 hover:cursor-pointer"
				:key="func"
				>{{ func }}</span
			>
		</div>
	</div>

	<!-- </div> -->
</template>
<style scoped>
.mild_text {
	@apply text-gray-400;
}

.clickable {
	@apply hover:bg-gray-200 hover:text-black;
}
</style>
