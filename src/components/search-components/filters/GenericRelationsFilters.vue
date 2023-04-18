<template>
	<div class="text-sm">
		<h2 class="mb-4 text-base">{{ $t("words.filter results") }}:</h2>

		<!-- <h4>by Relation</h4> -->
		<!-- <ais-refinement-list attribute="model" :show-more-limit="40" style="text-align: left; min-width: 300px" class="pl-10" /> -->
		<!-- <h4>by Source Entity Type</h4> -->

		<!-- <ais-refinement-list attribute="source_kind" :show-more-limit="40" style="text-align: left; min-width: 300px" />
    <h4>by Target Entity Type</h4>
    <ais-refinement-list attribute="target_kind" :show-more-limit="40" style="text-align: left; min-width: 300px" /> -->
		<!-- <h4>{{ $t("words.by relation type") }}</h4> -->
		<h4 class="mb-2">Nach Klasse</h4>
		<ais-refinement-list
			attribute="model"
			show-more
			:show-more-limit="40"
			style="text-align: left; min-width: 300px"
			class="pl-6"
		>
			<template v-slot:showMoreLabel="{ isShowingMore }">
				{{ !isShowingMore ? $t("words.show more") : $t("words.show less") }}
			</template></ais-refinement-list
		>
		<h4 class="mt-4 mb-2">{{ $t("words.by relation type") }}</h4>
		<ais-refinement-list
			attribute="relation_type"
			show-more
			:show-more-limit="40"
			style="text-align: left; min-width: 300px"
			class="pl-6"
		>
			<template v-slot:showMoreLabel="{ isShowingMore }">
				{{ !isShowingMore ? $t("words.show more") : $t("words.show less") }}
			</template></ais-refinement-list
		>
	</div>
</template>
<script setup lang="ts"></script>

<style scoped></style>
