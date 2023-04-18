import type { ItemType } from "../types/deduplication_types";

import { inject } from "vue";

function useToggleItem(type: ItemType, id: number): void {
	/**
                  Generic callback when an item representing an entity (Single, Group, Group-Member) is clicked:
          
                  Calls the generic updateSelection function for that item and adds or removes it from the respective ref.
                  */
	console.log("reached toggle entity: ", type, id);

	const selectedGroups = inject("selectedGroups");

	switch (type) {
		case "single":
			updateSelection(selectedSingles, id);
			break;

		case "group":
			updateSelection(selectedGroups, id);
			break;

		case "member":
			updateSelection(selectedMembers, id);
			break;

		default:
			alert(`ERROR in toggleEnttiy: type matches no case ${type}`);
	}
}
