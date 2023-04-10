const colPrefix: string = import.meta.env.VITE_TYPESENSE_COLLECTION_PREFIX;

// this prefixes all collections with the default project prefix if prefix is not present
export default (collection: string) => {
  return collection.startsWith(colPrefix) ? collection : colPrefix + collection;
};
