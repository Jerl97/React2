

const persona = {
    nombre: 'Rider',
    apellido: 'Andrade',
    edad: 45,
    direccion: {
        ciudad: 'Muisne',
        zip: 23242434,
        lat: 14.4444,
        lng: 34.444232
    }
};

//console.log( {
  //  persona:persona
//} );
//console.table( persona );

const persona2 = {...persona};
persona2.nombre = 'Nicole';

console.log( persona );
console.log( persona2 );