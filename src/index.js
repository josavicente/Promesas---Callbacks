import './styles.css';
import { buscarHeroe } from './js/callbacks';
const heroeID = 'capi';


buscarHeroe(heroeId, ( heroe ) => {
      console.log(heroe);
});