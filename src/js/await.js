import { buscarHeroeAsync } from "./Promesas";

const heroesIds = [ 'capi', 'iron', 'spider'];


export const obtenerHeroesArr = async () => {
      const heroesArr = [];

      for ( const id of heroesIds ){
            const heroe = await buscarHeroeAsync(id);
            heroesArr.push(heroe);
      }
      setTimeout(() => {
            console.table(heroesArr)
      }, 1000);
      return heroesArr
}