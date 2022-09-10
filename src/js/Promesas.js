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

export const buscarHeroe = (id) => {
      const heroe = heroes[id];

      return new Promise( (resolve, reject) => {
            if (heroe){
                  resolve(heroe);
            }else{
                  reject('el heroe no llegó');
            }
      });

}

export const buscarHeroeAsync = async (id) => {
      const heroe = heroes[id];

            if (heroe){
                  return heroe;
            }else{
                  throw Error('el heroe no llegó');
            }
}


const promesaLenta = new Promise( (resolve, reject) => {
      setTimeout(() => {
            resolve('Promesa lenta')
      }, 3000);
})

const promesaMedia = new Promise( (resolve, reject) => {
      setTimeout(() => {
            resolve('Promesa media')
      }, 2000);
})

const promesaRapida = new Promise( (resolve, reject) => {
      setTimeout(() => {
            resolve('Promesa rápida')
      }, 1000);
})

export {
      promesaLenta,
      promesaMedia,
      promesaRapida
}