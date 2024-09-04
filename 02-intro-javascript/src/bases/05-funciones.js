
//Funciones en JS
//const saludar= function(nombre) {
//    return `Hola, ${nombre}`;
//}

//saludar = 30
const saludar2= (nombre) => {
    return `Hola, ${nombre}`;
}

const saludar3= (nombre) =>`Hola, ${nombre}`;
const saludar4= (nombre) =>`Hola Mundo`;

//console.log (saludar (´'Andersounzd) )

console.log (saludar2('Miguel') );
console.log (saludar2('Nicole') );
console.log (saludar4() );

const getUser = () => ({
    uid: 'ASDAF12',
    username: 'AngelFast97'
});

const user = getUser();
console.log(user);

//Tarea
// transformar  en una funcion de flecha
// tiene que retornar un objeto implicito
// pruebas
//function getUsuarioActivo(nombre){
  //  return {
    //    uid: 'AESFSF12',
      //  username: nombre
    //}
//};

const getUsuarioActivo = (nombre) => ({
        uid: 'AESFSF12',
        username: nombre
})

const usuarioActivo = getUsuarioActivo('Rafael');
console.log( usuarioActivo);


