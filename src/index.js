import './styles.css';
// import { promesaLenta, promesaMedia, promesaRapida } from './js/Promesas';
import { buscarHeroe,buscarHeroeAsync } from './js/Promesas';
import { obtenerHeroesArr, obtenerHeroeAwait } from './js/await';
// promesaLenta.then(console.log);
// promesaMedia.then(console.log);
// promesaRapida.then(console.log);

// Promise.race([ promesaLenta, promesaMedia, promesaRapida ])
//       .then( mensaje => console.log(mensaje) )
//       .catch( mensaje => console.log(mensaje) );

// buscarHeroe('capi')
//       .then( heroe => console.log(heroe) )
//       .catch(console.warn)

// buscarHeroeAsync('iron')
//       .then( heroe => console.log(heroe) )
//       .catch(console.warn);



obtenerHeroesArr().then( heroes => {
      console.table(heroes);
});

console.time('await');

obtenerHeroeAwait('capi2').then( heroe => {
      console.log(heroe);
      console.timeEnd('await');
}).catch ( console.warn );
