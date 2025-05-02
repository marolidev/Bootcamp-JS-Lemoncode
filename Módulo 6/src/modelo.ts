//Modelo de datos
//Obtener puntuación a partir del número aleatorio y suma de puntuaciones

interface Partida {
    puntuacion: number
}

export const partida: Partida = {
    puntuacion: 0,
};


export const actualizarPuntuacion = (puntosNuevos: number) => {
    partida.puntuacion = puntosNuevos;
}
