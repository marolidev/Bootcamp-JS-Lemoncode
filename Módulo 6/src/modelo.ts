//Modelo de datos
//Obtener puntuación a partir del número aleatorio y suma de puntuaciones


export let puntuacion: number = 0;

export const obtenerPuntosCarta = (carta: number) => {
    if (carta > 7) {
        return 0.5;
    }
    return carta;
}

// Sumar puntuación
export const sumaPuntuacion = (punto: number) => {
    return puntuacion + punto;
}

export const actualizarPuntuacion = (puntosNuevos: number) => {
    puntuacion = puntosNuevos;
}

export const obtenerNumeroAleatorio = (): number => Math.floor(Math.random() * 10 + 1)


export const obtenerNumeroCarta = (numero: number) => {
    if (numero > 7) {
        return numero + 2;
    }
    return numero;
}



