const entityComponentLookup = {
  person: {
    detail: null,
    card: null,

    component: null,
  },
  place: {
    component: null,
  },
  event: {
    component: null,
  },
  work: {
    component: null,
  },
  institution: {
    component: null,
  },
  relation: {
    component: null,
  },
};

const Entity = {
  components: {
    filter: null,
  },
  headers: ["name", "kind", "start", "end"],
  searchParams: "name, kind",
};

const Relation = {
  components: {
    filter: "relationsFilters",
  },
  headers: ["source.name", "relation_type", "target.name", "start", "end"],
  searchParams: "source.name, target.name, relation_type",
};

const collectionsLookup = {
  Person: {
    components: {
      filter: null,
    },
    headers: ["first_name", "name", "start", "end"],
    searchParams: "first_name, name",
  },
  Institution: Entity,
  Place: {
    components: {
      filter: null,
    },
    headers: ["name", "kind", "start", "end", "lat", "long"],
    searchParams: "name, kind, lat, long",
  },
  Work: Entity,
  Event: Entity,
  PersonPerson: Relation,
  PersonInstitution: Relation,
  PersonPlace: Relation,
  PersonEvent: Relation,
  PersonWork: Relation,
  WorkWork: Relation,
  WorkEvent: Relation,
  InstitutionInstitution: Relation,
  InstitutionPlace: Relation,
  InstitutionWork: Relation,
  InstitutionEvent: Relation,
  PlaceWork: Relation,
  PlaceEvent: Relation,
};

export { entityComponentLookup, collectionsLookup };
