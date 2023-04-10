import { client } from './useBasicTypesenseClient.js';
import usePrefixedCollection from './usePrefixedCollection.js';
//const { client } = useBasicTypesenseClient();

function useTypesenseAsyncRetrieval(collection: string, doc_id: string, callback: Function) {
  collection = usePrefixedCollection(collection);

  client
    .collections(collection)
    .documents(doc_id)
    .retrieve()
    .then((response) => {
      //TODO: add error handling
      callback(response);
    });
}

export default useTypesenseAsyncRetrieval;
