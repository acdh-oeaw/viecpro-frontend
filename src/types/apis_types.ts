// collect apis types here, like Person, PersonInstitutionRelation, etc.

// TODO: create generic top-level types

export type EntityType = "person" | "institution" | "work" | "place" | "event";
export type RelationType = "placeholder";

export type VocabsType = "label_type" | "entity_type" | "relation_type" | "text_type"; // TODO: make this types, not strings

export type genderOptions = "Male" | "Female" | "Other" | "None" | "All";

export interface Label {
	label: string;
	id: number;
}

// TODO: add more types and build a decent structure.
