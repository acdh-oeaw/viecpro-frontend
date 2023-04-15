import RelationsFilters from '@/components/search-components/filters/RelationsFilters.vue';
import PersonMeta from '@/components/entity-components/entity-meta/PersonMeta.vue';
import PlaceMeta from './components/entity-components/entity-meta/PlaceMeta.vue';
import PersonFilter from './components/search-components/filters/PersonFilter.vue';
import InstitutionMeta from '@/components/entity-components/entity-meta/InstitutionMeta.vue';
import GenericRelationsFilters from '@/components/search-components/filters/GenericRelationsFilters.vue';
import GenericEntityFilters from './components/search-components/filters/GenericEntityFilters.vue';
import ReferenceFilter from '@/components/search-components/filters/ReferenceFilter.vue';

// TODO: needs cleanup and refactor, quite outdated currently.

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
    filter: GenericEntityFilters,
  },
  headers: ['name', 'kind', 'start', 'end'],
  searchParams: 'name, kind',
};

const Relation = {
  components: {
    filter: RelationsFilters,
    //meta: genericRelationsMeta,
  },
  headers: ['source.name', 'relation_type', 'target.name', 'start', 'end'],
  searchParams: 'source.name, target.name, relation_type',
};

const collectionsLookup = {
  Reference: {
    components: {
      filter: ReferenceFilter, // ReferenceFilter,
      meta: null, //ReferenceMeta,
    },
    headers: ['folio', 'title', 'shortTitle', 'kind'],
    searchParams: 'title, shortTitle, kind, folio',
  },
  Person: {
    components: {
      filter: PersonFilter,
      meta: PersonMeta,
    },
    headers: ['first_name', 'name', 'start', 'end'],
    searchParams: 'first_name, name',
  },
  Institution: Entity,
  Place: {
    components: {
      filter: GenericEntityFilters,
      meta: PlaceMeta,
    },
    headers: ['name', 'kind', 'start', 'end', 'lat', 'long'],
    searchParams: 'name, kind, lat, long',
  },
  Work: Entity,
  Event: Entity,
  // PersonPerson: Relation,
  // PersonInstitution: Relation,
  // PersonPlace: Relation,
  // PersonEvent: Relation,
  // PersonWork: Relation,
  // WorkWork: Relation,
  // WorkEvent: Relation,
  // InstitutionInstitution: Relation,
  // InstitutionPlace: Relation,
  // InstitutionWork: Relation,
  // InstitutionEvent: Relation,
  // PlaceWork: Relation,
  // PlaceEvent: Relation,
  Relations: {
    components: {
      filter: GenericRelationsFilters,
      //meta: genericRelationsMeta,
    },
    headers: ['model', 'source.name', 'relation_type', 'target.name', 'start', 'end'],
    searchParams: 'source.name, target.name, relation_type, model',
  },
};

export { entityComponentLookup, collectionsLookup };
