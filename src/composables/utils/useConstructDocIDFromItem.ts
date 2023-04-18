export default function useConstructDocumentIDFromItem(item: object): string {
	return item.model + "_" + item.object_id;
}
