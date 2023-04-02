
import router from "../router";

export default function useOpenDetail(){

    function redirectToEntity(ent_type: string, ent_id: string, ent_model: string) {

       
        let module;

        if (["Person", "Work", "Institution", "Place", "Event"].includes(ent_model)){
            module = "entities"
        } else {
            module = "relations"
        }


        const route = `/${module}/${ent_model}/detail/${ent_id}`;
        router.push(route);
      }

      return redirectToEntity
}