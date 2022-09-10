const heroes = {
      capi: {
            nombre: 'Capitan América',
            poder: 'Aguantar inyecciones sin morir'
      },
      iron: {
            nombre: 'Iron Man',
            poder: 'Absurda cantidad de dinero'
      },
      spider: {
            nombre: 'SpiderMan',
            poder: 'La mejor reacción alérgica a las picaduras de araña'
      }
}

export const buscarHeroe = (id, callback) => {

      const heroe = heroes[id];
      if (heroe){
            callback(null, heroe);
      }else{
            callback('el heroe no llegó');
      }
      

}