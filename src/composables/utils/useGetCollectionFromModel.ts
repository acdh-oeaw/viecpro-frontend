import { computed } from "vue";

export default function useGetCollectionFromModel(model: string) {
	return computed(() => {
		return ["Person", "Work", "Event", "Place", "Institution"].includes(model)
			? model
			: "Relations";
	});
}
