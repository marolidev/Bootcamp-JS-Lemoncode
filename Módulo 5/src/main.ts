import "./style.css";

//Mostrar puntuación

let puntuacion: number = 0;

const muestraPuntuacion = () => {
    const elementoPuntuacion = document.getElementById("puntuacion")
    if (elementoPuntuacion !== undefined && elementoPuntuacion !== null) 
    {elementoPuntuacion.innerHTML = `${puntuacion}` } 
    else { 
        console.error("muestraPuntuacion: No se ha encontrado el elemento con id puntuacion") 
    }
    
    return elementoPuntuacion
}
//Obtener puntuación a partir del número aleatorio y suma de puntuaciones
const obtenerPuntosCarta = (carta: number) => {
    if (carta > 7) {
        return 0.5;
    }
    return carta;
}

// Sumar puntuación
const sumaPuntuacion = (punto: number) => {
    return puntuacion + punto;
}

//Actualizar
const actualizarPuntuacion = (puntosNuevos: number) => {
    puntuacion = puntosNuevos;
}

//Mensaje mostrado
const mostrarMensaje = (mensaje: string) => {
    const elementoMensaje = document.getElementById("mensaje");

    if (elementoMensaje && elementoMensaje instanceof HTMLParagraphElement) {
        elementoMensaje.textContent = mensaje;
    }
}


//Pedir carta
const obtenerNumeroAleatorio = (): number => Math.floor(Math.random() * 10 + 1);

const obtenerNumeroCarta = (numero: number) => {
    if (numero > 7) {
        return numero + 2;
    }

    return numero;
}

//Mostrar carta
const obtenerUrlCarta = (carta: number) => {
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

const mostrarCarta = (urlCarta: string): void => {
    const cartaImagen = document.getElementById("cartaImagen");

    if (cartaImagen && cartaImagen instanceof HTMLImageElement) {
        cartaImagen.src = urlCarta;
    }
};

//botones
const botonPedirCarta = document.getElementById("dameCarta")

const botonNueva = document.getElementById("nueva");

const botonQueHabriaPasado = document.getElementById("alternativa");

const botonPlantarse = document.getElementById("plantarse")

const deshabilitarBotonPedirCarta = (estaDeshabilitado: boolean) => {

    if (botonPedirCarta && botonPedirCarta instanceof HTMLButtonElement) {
        botonPedirCarta.disabled = estaDeshabilitado;
    }
}
const deshabilitarBotonPlantarse = (estaDeshabilitado: boolean) => {

    if (botonPlantarse && botonPlantarse instanceof HTMLButtonElement) {
        botonPlantarse.disabled = estaDeshabilitado;
    }
}

//Game over
function gameOver() {
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

const pedirCarta = () => {
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

if (botonPedirCarta && botonPedirCarta instanceof HTMLButtonElement) {
    botonPedirCarta.addEventListener("click", () => {
        pedirCarta();
    });
} else {
    console.error("No se encontró el botón dameCarta")
}


const Plantarse = () => {   
    if (puntuacion < 4) {
    mostrarMensaje("Has sido muy conservador")}
    if (puntuacion === 5 || puntuacion === 5.5) {
    mostrarMensaje("Te ha entrado el canguelo eh?")}
    if (puntuacion === 6 || puntuacion === 6.5 || puntuacion === 7) { mostrarMensaje("Casi casi...") }
    if (puntuacion === 7.5) { mostrarMensaje("¡Lo has clavado!¡Enhorabuena!") 

    }

    deshabilitarBotonPedirCarta(true)
    deshabilitarBotonPlantarse(true)
    if (botonQueHabriaPasado && botonQueHabriaPasado instanceof HTMLButtonElement) {
        botonQueHabriaPasado.style.display = "block";
    }
}

if (botonPlantarse && botonQueHabriaPasado && botonPlantarse instanceof HTMLButtonElement && botonQueHabriaPasado instanceof HTMLButtonElement) {
    botonPlantarse.addEventListener("click", () => {
        Plantarse()
    })

}
// Nueva partida

const Nueva = () => {
    puntuacion = 0;
    muestraPuntuacion();
    deshabilitarBotonPedirCarta(false)
    deshabilitarBotonPlantarse(false)
    mostrarCarta("https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg")
    mostrarMensaje("")
    if(botonQueHabriaPasado && botonQueHabriaPasado instanceof HTMLButtonElement) {
        botonQueHabriaPasado.style.display = "none";
    }

}

if (botonNueva && botonQueHabriaPasado && botonNueva instanceof HTMLButtonElement && botonQueHabriaPasado instanceof HTMLButtonElement) {
    botonNueva.addEventListener("click", () => {
        Nueva()
    })
}

const queHabriaPasado = () => {
    let cartaRand = obtenerNumeroAleatorio()
         mostrarMensaje(`Si hubieras seguido, habría salido un ${cartaRand}`);
}

if (botonQueHabriaPasado && botonQueHabriaPasado instanceof HTMLButtonElement) {
    botonQueHabriaPasado.addEventListener("click", () => {
        queHabriaPasado()
    })
}

document.addEventListener("DOMContentLoaded", muestraPuntuacion)