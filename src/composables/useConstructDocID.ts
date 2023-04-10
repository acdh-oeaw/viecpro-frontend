export default function useConstructDocumentID(item: object) {
  return item.model + '_' + item.object_id;
}
