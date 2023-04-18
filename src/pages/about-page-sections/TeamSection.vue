<script setup lang="ts">
import { ref, watch, onBeforeMount, onMounted } from "vue";

const props = defineProps([]);
const tB = ref("pages.about-page.team.");
</script>
<template>
	<h1>{{ $t(tB + "header") }}</h1>
	<p>{{ $t(tB + "t1") }}</p>
	<p>{{ $t(tB + "mail") }}</p>
	<h3>{{ $t(tB + "sh1") }}</h3>
	<div class="ul-wrapper">
		<ul>
			<li>{{ $t(tB + "h1-l1") }}</li>
			<li>{{ $t(tB + "h1-l2") }}</li>
			<li>{{ $t(tB + "h1-l3") }}</li>
			<li>{{ $t(tB + "h1-l4") }}</li>
		</ul>
	</div>
	<h3>{{ $t(tB + "sh2") }}</h3>
	<div class="ul-wrapper">
		<ul>
			<li>{{ $t(tB + "h2-l1") }}</li>
			<li>{{ $t(tB + "h2-l2") }}</li>
			<li>{{ $t(tB + "h2-l3") }}</li>
		</ul>
	</div>

	<h3>{{ $t(tB + "sh3") }}</h3>
	<div class="ul-wrapper">
		<ul>
			<li>{{ $t(tB + "h3-l1") }}</li>
			<li>{{ $t(tB + "h3-l2") }}</li>
			<li>{{ $t(tB + "h3-l3") }}</li>
		</ul>
	</div>
	<p>{{ $t(tB + "t2") }}</p>
	<div class="ul-wrapper">
		<ul>
			<li>{{ $t(tB + "t2-l1") }}</li>
			<li>{{ $t(tB + "t2-l2") }}</li>
			<li>{{ $t(tB + "t2-l3") }}</li>
			<li>{{ $t(tB + "t2-l4") }}</li>
			<li>{{ $t(tB + "t2-l5") }}</li>
			<li>{{ $t(tB + "t2-l6") }}</li>
		</ul>
	</div>
</template>
<style scoped>
.ul-wrapper {
	@apply pl-4;
}

ul {
	@apply pl-5;
}

h1,
h2,
h3 {
	@apply text-2xl my-8;
}

p {
	@apply py-2 pl-4;
}

li {
	@apply list-disc list-outside pl-4;
}

span {
	@apply block;
}
</style>
