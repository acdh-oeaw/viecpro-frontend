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

const collectionsLookup = {
  Person: {
    components: {
      filter: null,
      results: null,
    },
    searchParams: "",
  },
  Institution: {},
  Place: {},
  Work: {},
  Event: {},
  PersonPerson: {},
  PersonInstitution: {},
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
