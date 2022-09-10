const heros = {
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

const buscarHeroe = (id, callback) => {

      const heroe = heroes[id];
      callback(heroe);

}