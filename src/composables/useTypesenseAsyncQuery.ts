import { client } from './useBasicTypesenseClient.js';
import usePrefixedCollection from './usePrefixedCollection.js';

// TODO: consider passing query options as object with defaults
// consider making specialized functions on top of this to query relations
export default function useTypesenseAsyncQuery(
  collection: string,
  query: string,
  query_by: string,
  options: object = { filter_by: '', sort_by: '', per_page: 200, num_typos: 0 },
  callback: Function
) {
  collection = usePrefixedCollection(collection);
  client
    .collections(collection)
    .documents()
    .search({
      q: query,
      query_by: query_by,
      ...options,
    })
    .then((response) => {
      // TODO: add error and loading handling
      // run cleaning and primary transforms here
      const cleaned = response;
      return cleaned;
    })
    .then((cleanedData) => {
      callback(cleanedData);
    });
}
