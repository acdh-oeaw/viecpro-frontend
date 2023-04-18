<template>
	<h2>Filter Results</h2>

	<h4>nach Kurztitel</h4>
	<ais-refinement-list
		show-more
		attribute="shortTitle"
		:show-more-limit="40"
		style="text-align: left; min-width: 300px"
	/>
	<h4>nach Belegter Entität</h4>
	<ais-refinement-list
		show-more
		attribute="related_doc.name"
		:show-more-limit="40"
		style="text-align: left; min-width: 300px"
	/>
	<h4>nach Klasser der belegten Entität</h4>
	<ais-refinement-list
		show-more
		attribute="related_doc.model"
		:show-more-limit="40"
		style="text-align: left; min-width: 300px"
	/>
	No Filters
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
