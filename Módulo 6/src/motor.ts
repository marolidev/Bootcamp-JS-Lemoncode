//Reglas
import {puntuacion, actualizarPuntuacion, obtenerNumeroAleatorio, obtenerNumeroCarta, obtenerPuntosCarta, sumaPuntuacion} from "./modelo";
import {muestraPuntuacion, mostrarCarta, mostrarMensaje, obtenerUrlCarta} from "./ui";
import {botonQueHabriaPasado, deshabilitarBotonPedirCarta,deshabilitarBotonPlantarse } from "./ui";

export const pedirCarta = () => {
    let numeroAleatorio: number = obtenerNumeroAleatorio();
    const carta = obtenerNumeroCarta(numeroAleatorio);
    const urlCarta = obtenerUrlCarta(carta);
    mostrarCarta(urlCarta);

    const puntosCarta = obtenerPuntosCarta(carta);
    const puntosSumados = sumaPuntuacion(puntosCarta);
    actualizarPuntuacion(puntosSumados);
    muestraPuntuacion();
    gameOver();
}

export const Plantarse = () => {   
    if (puntuacion < 4) {
        mostrarMensaje("Has sido muy conservador")}
    if (puntuacion === 5 || puntuacion === 5.5) {
        mostrarMensaje("Te ha entrado el canguelo eh?")}
    if (puntuacion === 6 || puntuacion === 6.5 || puntuacion === 7) { 
        mostrarMensaje("Casi casi...") }
    if (puntuacion === 7.5) { 
        mostrarMensaje("¡Lo has clavado!¡Enhorabuena!") 
    }

    deshabilitarBotonPedirCarta(true)
    deshabilitarBotonPlantarse(true)
    if (botonQueHabriaPasado && botonQueHabriaPasado instanceof HTMLButtonElement) {
        botonQueHabriaPasado.style.display = "block";
    }
}

export const Nueva = () => {
    puntuacion;
    muestraPuntuacion();
    deshabilitarBotonPedirCarta(false)
    deshabilitarBotonPlantarse(false)
    mostrarCarta("https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg")
    mostrarMensaje("")
    if(botonQueHabriaPasado && botonQueHabriaPasado instanceof HTMLButtonElement) {
        botonQueHabriaPasado.style.display = "none";
    }

}


export const queHabriaPasado = () => {
    let cartaRand = obtenerNumeroAleatorio()
         mostrarMensaje(`Si hubieras seguido, habría salido un ${cartaRand}`);
}

//Game over
export function gameOver() {
    if (puntuacion > 7.5) {
        mostrarMensaje('Game Over');
        deshabilitarBotonPedirCarta(true);
        deshabilitarBotonPlantarse(true);
    }

    else if (puntuacion === 7.5) {
        mostrarMensaje('Has ganado');
        deshabilitarBotonPedirCarta(true);
    }
}