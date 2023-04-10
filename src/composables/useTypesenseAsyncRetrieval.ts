export default function useTypesenseAsyncRetrieval(){

    function retrieveFromTypesense(ent_type: string, ent_id: string, ent_model: string, doc_id:string) {

       
        let module;

        if (["Person", "Work", "Institution", "Place", "Event"].includes(ent_model)){
            module = "entities"
        } else {
            module = "relations"
        }


        const route = `/${module}/${ent_model}/detail/${ent_id}/${doc_id}/`;
        router.push(route);
      }

      return redirectToEntity
}