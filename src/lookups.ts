
import PersonFilter from './components/search-components/filters/PersonFilter.vue';
import GenericRelationsFilters from '@/components/search-components/filters/GenericRelationsFilters.vue';
import GenericEntityFilters from './components/search-components/filters/GenericEntityFilters.vue';
import ReferenceFilter from '@/components/search-components/filters/ReferenceFilter.vue';
import RelationsFilters from '@/components/search-components/filters/RelationsFilters.vue';
import HofstaatFilter from '@/components/search-components/filters/HofstaatFilter.vue';

// TODO: needs cleanup and refactor, quite outdated currently.

const personRelationLookup = [
  'Berufliche Beziehung',
  'Berufliche Beziehung >> Tätigkeiten für ausländische Höfe',
  'Doubletten Beziehung',
  'Verwandtschaftliche Beziehung',
  'Kirchl. Amtsbeziehung',
  'Dynastische Beziehung',
]

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
  Person: {
    components: {
      filter: PersonFilter,
    },
    headers: ['first_name', 'name', 'start', 'end', 'gender'],
    searchParams: 'first_name, name',
  },
  Hofstaat: {
    components: {
      filter: HofstaatFilter,
    },
    headers: ['name', 'owner', 'start', 'end'],
    searchParams: 'name, kind, owner',
  },
  Relations: {
    components: {
      filter: GenericRelationsFilters,
      //meta: genericRelationsMeta,
    },
    headers: ['model', 'source.name', 'relation_type', 'target.name', 'start', 'end'],
    searchParams: 'source.name, target.name, relation_type, model',
  },
  Institution: Entity,
  Place: {
    components: {
      filter: GenericEntityFilters,
    },
    headers: ['name', 'kind', 'start', 'end', 'lat', 'long'],
    searchParams: 'name, kind, lat, long',
  },
  Event: Entity,

  Reference: {
    components: {
      filter: ReferenceFilter, // ReferenceFilter,
      meta: null, //ReferenceMeta,
    },
    headers: ['related_doc.name', 'folio', 'shortTitle', 'title'],
    searchParams: 'related_doc.name, title, shortTitle, folio',
  },
};

export { entityComponentLookup, collectionsLookup, personRelationLookup };
