import { client } from "./useBasicTypesenseClient.js";
import usePrefixedCollection from "./usePrefixedCollection.js";
//const { client } = useBasicTypesenseClient();

export default function useTypesenseAsyncRetrieval(
	collection: string,
	doc_id: string,
	callback: Function,
) {
	client
		.collections(usePrefixedCollection(collection))
		.documents(doc_id)
		.retrieve()
		.then((response) => {
			//TODO: add error handling
			callback(response);
		});
}
