//Reglas
import { partida } from "./modelo";

export const obtenerPuntosCarta = (carta: number) => {
    if (carta > 7) {
        return 0.5;
    }
    return carta;
}

// Sumar puntuación
export const sumaPuntuacion = (punto: number) => {
    return partida.puntuacion + punto;
}

export const obtenerNumeroAleatorio = (): number => Math.floor(Math.random() * 10 + 1)


export const obtenerNumeroCarta = (numero: number) => {
    if (numero > 7) {
        return numero + 2;
    }
    return numero;
}

export const gestionarEstadoPartida = () => {
    if (partida.puntuacion === 7.5) {
        partida.estadoPartida = 'Ganar';
    } else if (partida.puntuacion > 7.5) {
        partida.estadoPartida = 'Perder';
    }

    return partida.estadoPartida;
}