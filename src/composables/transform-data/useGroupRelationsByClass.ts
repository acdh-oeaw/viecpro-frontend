import useReOrientedRelation from "./useReOrientRelations";
export default function useGroupRelationsByClass(relations, sourceObjectName) {
	// TODO: type this
	const temp_rels: object = {};

	relations.forEach((rel) => {
		if (Object.keys(temp_rels).includes(rel.model)) {
			temp_rels[rel.model].push(useReOrientedRelation(rel, sourceObjectName));
		} else {
			if (!rel.model.includes("Work")) {
				temp_rels[rel.model] = [useReOrientedRelation(rel, sourceObjectName)];
			}
		}
	});
	return temp_rels;
}
