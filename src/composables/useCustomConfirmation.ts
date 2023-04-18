// uses vueUse useConfirmation
// should return an open function, with wihich you can trigger the dialog
//open function should also handle callback
//state of click should be handled in vueuse
import { useConfirmDialog } from "@vueuse/core";

// test the difference, pass callback here, will pass it when useCustomConfr.. is bound to const.
// defining it in openDialog, allows to pass it each time the dialog is opened.
export function useCustomConfirmation() {
	const { isRevealed, reveal, confirm, cancel } = useConfirmDialog();

	//const props = defineProps(["confirm", "reveal", "cancel", "isRevealed"]);

	const openDialog = async (callback: Function) => {
		console.log("clicked openDialog");
		const { data, isCanceled } = await reveal();
		if (!isCanceled) {
			//console.log(data);
			callback(data);
		}
	};

	return { openDialog, isRevealed, confirm, cancel };
}
