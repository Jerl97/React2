//console.log('Hola mundo');


const nombre = 'Juan';
const apellido = 'Rocha';

// const nombreCompleto = nombre + '' + apellido;
const nombreCompleto = `${ nombre} ${apellido}`;


console.log( nombreCompleto); 


function getSaludo(nombre) {
    return 'Hola ' + nombre;
}

console.log( `Este es un texto: ${ getSaludo ( nombre )}`);