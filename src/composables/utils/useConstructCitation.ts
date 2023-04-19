

export default function useConstructCitation(model:string, metaData:object){

    console.log("construct citation called with", model, metaData)
    let date = new Date();
    // TODO: add correctly fomatted date here
const citation = `${model}: ${metaData.name}, ${metaData.first_name} (ID: ${metaData.object_id}), in: VieCPro, hrsg. vom Institute for Habsburg and Balkan Studies der ÖAW, Wien. URL: 'https://viecpro.oeaw.ac.at/detail/${model}/${metaData.object_id}/'. (abgerufen am: DATUM)`

console.log(citation)
return citation
}