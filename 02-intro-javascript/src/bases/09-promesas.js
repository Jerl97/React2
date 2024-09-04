// PROMESAS

import { getHeroeById } from "./bases/08-imp-exp";


// const promesa = new Promise( ( resolve, reject) => {

//     setTimeout(()=> {
//         // console.log('2 segundos después')
//         //resolve();
//         const p1 = getHeroeById(2);
//         resolve ( p1);
//         // reject( 'No se pudo encontar el héroe');
//     }, 2000)
// });

// promesa.then( (heroe) => {
//     console.log('heroe', heroe)
// })
// .catch( err => console.warm(err));

const getHeroeByIdAsync = (id) => {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            // console.log('2 segundos después')
            //resolve();
            const p1 = getHeroeById(id);
            //console.log(p1);
            if (p1){
                resolve(p1);

            } else {
                reject( 'No se pudo encontar el héroe');
            }
        }, 2000)
    });
}

getHeroeByIdAsync(2)
    // .then(heroe => console.log('heroe', heroe))
    .then(console.log)
    .catch (console.warn);
