// TODO: this is a special case of useTypesenseAsyncQuery
// TODO: implement filter check against result docs to make sure no unwanted results are included (via typo tolerance)
import useTypesenseAsyncQuery from './useTypesenseAsyncQuery';
import usePrefixedCollection from './usePrefixedCollection';
function useQueryTypesenseByID(
  collection: string,
  id: string,
  options: object,
  query_by: string,
  callback: Function
) {
  collection = usePrefixedCollection(collection);
  function confirmQueryResults(results: any, id: string, callback: Function) {
    //run confirmation on results, then call initial callback function with cleaned results
    const confirmedResults = results;
    callback(confirmedResults);
  }

  useTypesenseAsyncQuery(collection, id, query_by, options, (results: any) => {
    confirmQueryResults(results, id, callback);
  });
}

export default useQueryTypesenseByID;
