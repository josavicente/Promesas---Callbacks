import { buscarHeroeAsync, buscarHeroe } from "./Promesas";

const heroesIds = [ 'capi', 'iron', 'spider'];


export const obtenerHeroesArr = async () => {

      return await Promise.all(heroesIds.map( buscarHeroe ));
};

export const obtenerHeroeAwait = async ( id ) => {

      try {
            const heroes = await buscarHeroeAsync(id);
            return heroes;
      } catch (error) {
            console.log("🚀 ~ file: await.js ~ line 17 ~ obtenerHeroeAwait ~ error", error)
            return {
                  nombre: 'Sin nbombre',
                  poder: 'Sin poder'
            }
            // throw error;
      }
}