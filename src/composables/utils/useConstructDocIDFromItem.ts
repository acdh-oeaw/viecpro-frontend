export default function useConstructDocumentIDFromItem(item: object) {
  return item.model + '_' + item.object_id;
}
