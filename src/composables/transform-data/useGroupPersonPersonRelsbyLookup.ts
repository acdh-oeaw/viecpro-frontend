import { personRelationLookup as lookup } from "../../lookups";

export default function useGroupPersonPersonRelsByLookup(relData: object[]) {
	console.log(relData);

	//const res = { other: [] };
	const res = {};
	let controlCounter = 0;

	console.log("REL DATA WAS", relData);
	if (relData.length != undefined) {
		relData.forEach((rel) => {
			for (const key of lookup) {
				if (rel.relation_type_hierarchy.includes(key)) {
					console.log("is included", key);
					if (Object.keys(res).includes(key)) {
						res[key].push(rel);
						controlCounter += 1;
					} else {
						res[key] = [rel];
						controlCounter += 1;
					}
				} else {
					console.log("not included", key, rel);
					//res.other.push(rel);
				}
			}
		});

		if (controlCounter != relData.length) {
			console.log("Counter WRONG");
		} else {
			console.log("COUNTER MATCHES");
		}
	}

	return res;
}
