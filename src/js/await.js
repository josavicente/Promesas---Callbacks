import { buscarHeroeAsync, buscarHeroe } from "./Promesas";

const heroesIds = [ 'capi', 'iron', 'spider'];
const heroesPromesas = heroesIds.map ( id => buscarHeroe(id) );
// Equivalente a lo anterior const heroesPromesas = heroesIds.map ( buscarHeroe );

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

export const heroesCiclo = async () => {
      console.time('heroes-ciclo');

      for await (const heroe of heroesPromesas) {
            console.log(heroe);
      }

      // const heroes = await Promise.all ( heroesPromesas );
      // heroes.forEach( console.log );


      console.timeEnd('heroes-ciclo');
};

export const heroesIf = async (id) => {
      if ( (await buscarHeroeAsync(id)).nombre ==='Iron Man' ){
            console.log('El mejor')
      }else{
            console.log('No es el mejor')
      }
}