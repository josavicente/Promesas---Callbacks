import './styles.css';
import { buscarHeroe as buscarHeroeCallback } from './js/callbacks';
import { buscarHeroe } from './js/Promesas';
const heroeID = 'capi';
const heroeID2 = 'iron';


// buscarHeroe(heroeID, ( err, heroe ) => {

//       if (err){  return console.error(err);  }
      
//       buscarHeroe(heroeID2, ( err, heroe2 ) => {

//             if (err){  return console.error(err);  }

//             console.log (`Envciando a ${heroe.nombre} y ${heroe2.nombre}`)
//       })

// buscarHeroe( heroeID ).then(heroe => {
//       // console.log(`Enviando a ${heroe}`);
//       buscarHeroe(heroeID2).then(heroe2 =>{
//             console.log(`Enviando a ${heroe} y ${heroe2}`);
//       });
// });
// });

Promise.all([buscarHeroe(heroeID), buscarHeroe(heroeID2)])
      .then ( ([heroe1, heroe2]) => {
            console.log(`Enviando a ${heroe1.nombre} y ${heroe2.nombre}`);
}).catch( err => {
      alert(err);
}).finally(() => {
      console.log('Se terminó el promise.all');
})
