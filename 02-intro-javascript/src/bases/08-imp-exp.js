// import {heroes} from './data/heroes'
//import { heroes } from "./data/heroes";

//console.log(heroes);

//import heroes, {owners} from "../data/heroes";
import heroes from "../data/heroes";
//console.log( owners);

// const getHeroById = (id) => {
//   return heroes.find((heroe) =>  heroe.id == id);
// }

export const getHeroeById = (id) => heroes.find((heroe) =>heroe.id === id);

//console.log( getHeroById (2));


export const getHeroByOwner = (owner) => heroes.filter((heroe) =>heroe.owner ===  owner);

//console.log( getHeroByOwner ('DC'));


