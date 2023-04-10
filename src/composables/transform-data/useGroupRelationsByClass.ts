export default function useGroupRelationsByClass(relations) {
  // TODO: type this
  const temp_rels: object = {};

  relations.forEach((rel) => {
    if (Object.keys(temp_rels).includes(rel.model)) {
      temp_rels[rel.model].push(rel);
    } else {
      temp_rels[rel.model] = [rel];
    }
  });
  return temp_rels;
}
