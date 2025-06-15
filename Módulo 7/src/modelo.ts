//Modelo de datos
//Obtener puntuación a partir del número aleatorio y suma de puntuaciones
export type EstadoPartida = 'Ganar' | 'Perder' | 'seguir_jugando';

interface Partida {
    puntuacion: number;
    estadoPartida: EstadoPartida;
}

export const partida: Partida = {
    puntuacion: 0,
    estadoPartida: 'seguir_jugando',
};


export const actualizarPuntuacion = (puntosNuevos: number) => {
    partida.puntuacion = puntosNuevos;
}