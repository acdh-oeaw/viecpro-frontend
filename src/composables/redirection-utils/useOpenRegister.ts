import router from "../../router";

export default function useOpenRegister(model: string, object_id: string) {
	// TODO: check if I need redirect to be able to handle either using object_id or doc_id.
	// if so, implement auto conversion here. Make fetching object_id the default.

	const route = `/register/${model}/${object_id}/`;
	router.push(route);
}
