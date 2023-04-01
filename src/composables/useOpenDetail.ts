
import router from "../router";

export default function useOpenDetail(){

    function redirectToEntity(ent_type: string, ent_id: string, ent_model: string) {
        const route = `/${ent_type}/${ent_model}/detail/${ent_id}`;
        router.push(route);
      }

      return redirectToEntity
}