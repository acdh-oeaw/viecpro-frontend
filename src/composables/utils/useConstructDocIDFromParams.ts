export default function useConstructDocIDFromParams(model: string, object_id: string): string {
	return model + "_" + object_id;
}
