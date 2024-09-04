
//desestructuracion
//asignacion desestructurante
const persona = {
  nombre: "Tony",
  edad: "28",
  clave:"Ironman",
  rango: 'Soldado'
};

const UseContext = ({clave, nombre, edad, rango= "Capitan"}) => {

  return {
      nombreClave: clave,
      anios: edad
  }
}

const { nombreClave, anios } = UseContext(persona);
//console.log(avenger.nombreClave)
console.log(nombreClave, anios);


