export default function useExtractHitsFromResults(results) {
  return results.hits.map((hit) => {
    return hit.document;
  });
}
