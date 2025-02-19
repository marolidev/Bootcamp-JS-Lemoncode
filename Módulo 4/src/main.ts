import "./style.css";


interface Grupo {
    nombre: string;
    año: number;
    activo: boolean;
    genero: string;
}


const beatles: Grupo = {
    nombre: "The Beatles",
    año: 1960,
    activo: true,
    genero: "🎵 Pop Rock"
}

const queen: Grupo = {
    nombre: "Queen",
    año: 1970,
    activo: false,
    genero: "🎸 Rock"
}

const ACDC: Grupo = {
    nombre: "AC DC",
    año: 1973,
    activo: true,
    genero: "🤘 Hard Rock"
}

const beethoven: Grupo = {
    nombre: "Ludwig van Beethoven",
    año: 1770,
    activo: false,
    genero: "🎼 Clásica"
}

const rolling: Grupo = {
    nombre: "The Rolling Stones",
    año: 1962,
    activo: true,
    genero: "🎸 Rock"
}

const color = "background-color: green; font-size: 18px; font-weight: bold"


console.log("%c" + beatles.nombre, color);
console.log(beatles)

console.log("%c" + queen.nombre, color);
console.log(queen)

console.log("%c" + ACDC.nombre, color);
console.log(ACDC)

console.log("%c" + beethoven.nombre, color);
console.log(beethoven)

console.log("%c" + rolling.nombre, color);
console.log(rolling)