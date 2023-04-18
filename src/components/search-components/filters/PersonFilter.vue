<template>
	<h2>Filter Results</h2>

	<h4>by Nachname</h4>
	<ais-refinement-list
		attribute="name"
		show-more
		:show-more-limit="40"
		style="text-align: left; min-width: 300px"
	>
		<template v-slot:showMoreLabel="{ isShowingMore }">
			{{ !isShowingMore ? $t("words.show more") : $t("words.show less") }}
		</template></ais-refinement-list
	>
	<h4>nach Gender</h4>
	<ais-refinement-list attribute="gender" style="text-align: left; min-width: 300px" />
</template>
<script setup lang="ts"></script>

<style scoped></style>
