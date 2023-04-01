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

const Relation = {
  components: {
    filter: null,
  },
  headers: [
    "source.name",
    "source_kind",
    "relation_type",
    "target.name",
    "target_kind",
    "start",
    "end",
  ],
  searchParams: "source.name, target.name, relation_type",
}

const collectionsLookup = {
  Person: {
    components: {
      filter: null,
    },
    headers: [
      "source.name",
      "source_kind",
      "relation_type",
      "target.name",
      "target_kind",
      "start",
      "end",
    ],
    searchParams: "source.name, target.name, relation_type",
  },
  Institution: {},
  Place: {},
  Work: {},
  Event: {},
  PersonPerson: Relation,
  PersonInstitution: {
    components: {
      filter: null,
    },
    headers: [
      "source.name",
      "source_kind",
      "relation_type",
      "target.name",
      "target_kind",
      "start",
      "end",
    ],
    searchParams: "source.name, target.name, relation_type",
  },
  PersonPlace: {},
  PersonEvent: {},
  PersonWork: {},
  WorkWork: {},
  WorkEvent: {},
  InstitutionInstitution: {},
  InstitutionPlace: {},
  InstitutionWork: {},
  InstitutionEvent: {},
  PlaceWork: {},
  PlaceEvent: {},
};

export { entityComponentLookup, collectionsLookup };
