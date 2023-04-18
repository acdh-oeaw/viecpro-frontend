// main navbar. navigates to pages, not within pages.

<script setup lang="ts">
import { RouterLink } from "vue-router";
import type { navlinkProp } from "../types/prop_types";
import LocaleSelect from "./LocaleSelect.vue";

// TODO: make links array of props and not slot content. To allow v-if for rendering links or all as hamburger menu items

const props = defineProps({ navLinks: Array<navlinkProp> });
</script>

<template>
	<nav class="bg-primary-100 h-20 flex lg:flex-row filter-blur text-white flex-nowrap">
		<div class="grow-0 px-20 justify-start items-center">
			<slot name="left">left</slot>
		</div>
		<div class="bg-primary-600 shrink flex justify-center items-center">
			<slot name="mid"> </slot>
		</div>
		<div class="hidden grow lg:flex space-x-4 justify-end pr-20 items-center">
			<RouterLink v-for="link in navLinks" :to="link.route" :key="link.name" class="navigation-link"
				>{{ $t("navigation." + link.name) }}
			</RouterLink>
			<div><LocaleSelect></LocaleSelect></div>
			<div>login</div>
		</div>
		<div class="flex lg:hidden basis-1/3 space-x-4 justify-center bg-primary-400 lg:hidden">
			<button>Placeholder Hamburger</button>
		</div>
	</nav>
</template>

<style scoped></style>
