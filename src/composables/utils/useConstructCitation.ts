export default function useConstructCitation(model: string, metaData: object) {
  console.log('construct citation called with', model, metaData);
  const date = new Date();
  // TODO: add correctly fomatted date here

  let citation: string;

  switch (model) {
    case 'Person':
      if (metaData.gender == 'female') {
        // TODO: add verheirateten namen
        citation = `${model}: ${metaData.name}, ${metaData.first_name} (ID: ${metaData.object_id}), in: VieCPro, hrsg. vom Institute for Habsburg and Balkan Studies der ÖAW, Wien. URL: 'https://viecpro.oeaw.ac.at/detail/${model}/${metaData.object_id}/'. (abgerufen am: DATUM)`;
      } else {
        citation = `${model}: ${metaData.name}, ${metaData.first_name} (ID: ${metaData.object_id}), in: VieCPro, hrsg. vom Institute for Habsburg and Balkan Studies der ÖAW, Wien. URL: 'https://viecpro.oeaw.ac.at/detail/${model}/${metaData.object_id}/'. (abgerufen am: DATUM)`;
      }
      break;
    case 'Institution':
      citation = `${model}: ${metaData.name} (ID: ${metaData.object_id}), in: VieCPro, hrsg. vom Institute for Habsburg and Balkan Studies der ÖAW, Wien. URL: 'https://viecpro.oeaw.ac.at/detail/${model}/${metaData.object_id}/'. (abgerufen am: DATUM)`;

      break;
    case 'Place':
      citation = `${model}: ${metaData.name} (ID: ${metaData.object_id}), in: VieCPro, hrsg. vom Institute for Habsburg and Balkan Studies der ÖAW, Wien. URL: 'https://viecpro.oeaw.ac.at/detail/${model}/${metaData.object_id}/'. (abgerufen am: DATUM)`;

      break;
    default:
      console.log('reached default in get citation ');
      citation = `${model}: ${metaData.name} (ID: ${metaData.object_id}), in: VieCPro, hrsg. vom Institute for Habsburg and Balkan Studies der ÖAW, Wien. URL: 'https://viecpro.oeaw.ac.at/detail/${model}/${metaData.object_id}/'. (abgerufen am: DATUM)`;
      break;
  }

  console.log(citation);
  return citation;
}
