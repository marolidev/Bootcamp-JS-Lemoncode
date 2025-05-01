//UI: interacción con html
import { puntuacion } from "./modelo"
import { pedirCarta, Plantarse, Nueva, queHabriaPasado } from "./motor"

export const muestraPuntuacion = () => {
    const elementoPuntuacion = document.getElementById("puntuacion")
    if (elementoPuntuacion !== undefined && elementoPuntuacion !== null) 
    {elementoPuntuacion.innerHTML = `${puntuacion}` } 
    else { 
        console.error("muestraPuntuacion: No se ha encontrado el elemento con id puntuacion") 
    }
    
    return elementoPuntuacion
}

//Mensaje mostrado
export const mostrarMensaje = (mensaje: string) => {
    const elementoMensaje = document.getElementById("mensaje");

    if (elementoMensaje && elementoMensaje instanceof HTMLParagraphElement) {
        elementoMensaje.textContent = mensaje;
    }
}

export const obtenerUrlCarta = (carta: number) => {
    switch (carta) {
        case 1:
            return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg";
        case 2:
            return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg";
        case 3:
            return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg";
        case 4:
            return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg";
        case 5:
            return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg";
        case 6:
            return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg";
        case 7:
            return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg";
        case 10:
            return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg";
        case 11:
            return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg";
        case 12:
            return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg";
        default:
            return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg";
    }
}

export const mostrarCarta = (urlCarta: string): void => {
    const cartaImagen = document.getElementById("cartaImagen");

    if (cartaImagen && cartaImagen instanceof HTMLImageElement) {
        cartaImagen.src = urlCarta;
    }
};
export const botonPedirCarta = document.getElementById("dameCarta");

export const botonNueva = document.getElementById("nueva");

export const botonQueHabriaPasado = document.getElementById("alternativa");

export const botonPlantarse = document.getElementById("plantarse")

export const deshabilitarBotonPedirCarta = (estaDeshabilitado: boolean) => {

    if (botonPedirCarta && botonPedirCarta instanceof HTMLButtonElement) {
        botonPedirCarta.disabled = estaDeshabilitado;
    }
}
export const deshabilitarBotonPlantarse = (estaDeshabilitado: boolean) => {

    if (botonPlantarse && botonPlantarse instanceof HTMLButtonElement) {
        botonPlantarse.disabled = estaDeshabilitado;
    }
}

if (botonPedirCarta && botonPedirCarta instanceof HTMLButtonElement) {
    botonPedirCarta.addEventListener("click", () => {
        pedirCarta();
    });
} else {
    console.error("No se encontró el botón dameCarta")
}


if (botonPlantarse && botonQueHabriaPasado && botonPlantarse instanceof HTMLButtonElement && botonQueHabriaPasado instanceof HTMLButtonElement) {
    botonPlantarse.addEventListener("click", () => {
        Plantarse()
    })

}

if (botonNueva && botonQueHabriaPasado && botonNueva instanceof HTMLButtonElement && botonQueHabriaPasado instanceof HTMLButtonElement) {
    botonNueva.addEventListener("click", () => {
        Nueva()
    })
}

if (botonQueHabriaPasado && botonQueHabriaPasado instanceof HTMLButtonElement) {
    botonQueHabriaPasado.addEventListener("click", () => {
        queHabriaPasado()
    })
}

