import { Carta, Tablero } from "./modelo"
/*
En el motor nos va a hacer falta un método para barajar cartas
*/
//Reordena el array de forma aleatoria
const barajarCartas = (cartas : Carta[]): Carta[] => {
  const copia = [...cartas];
  for (let i = copia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copia[i], copia[j]] = [copia[j], copia[i]];
  }
  return copia;
}

/*
  Una carta se puede voltear si no está encontrada y no está ya volteada, o no hay dos cartas ya volteadas
*/
//Comprueba que la carta se pueda girar si no está volteada y si no está encontrada
export const sePuedeVoltearLaCarta = (tablero: Tablero, indice: number ): boolean => {
  const carta = tablero.cartas[indice];
  return (
    !carta.encontrada &&
    !carta.estaVuelta &&
    tablero.estadoPartida !== "DosCartasLevantadas"
  );
}

export const voltearLaCarta = (tablero: Tablero, indice: number) : void => {
  const carta = tablero.cartas[indice];
  carta.estaVuelta = true;

  if (tablero.estadoPartida === "CeroCartasLevantadas") {
    tablero.indiceCartaVolteadaA = indice;
    tablero.estadoPartida = "UnaCartaLevantada";
  } else if (tablero.estadoPartida === "UnaCartaLevantada") {
    tablero.indiceCartaVolteadaB = indice;
    tablero.estadoPartida = "DosCartasLevantadas";
  }
};

/*
  Dos cartas son pareja si en el array de tablero de cada una tienen el mismo id
*/
export const sonPareja = (indiceA: number, indiceB: number, tablero: Tablero): boolean => {
  return tablero.cartas[indiceA].idFoto === tablero.cartas[indiceB].idFoto;
}

/*
  Aquí asumimos ya que son pareja, lo que hacemos es marcarlas como encontradas y comprobar si la partida esta completa.
*/
export const parejaEncontrada = (tablero: Tablero, indiceA: number, indiceB: number) : void => {
  tablero.cartas[indiceA].encontrada = true;
  tablero.cartas[indiceB].encontrada = true;
  tablero.estadoPartida = esPartidaCompleta(tablero)
    ? "PartidaCompleta"
    : "CeroCartasLevantadas";
  tablero.indiceCartaVolteadaA = undefined;
  tablero.indiceCartaVolteadaB = undefined;
}

/*
  Aquí asumimos que no son pareja y las volvemos a poner boca abajo
*/
export const parejaNoEncontrada = (tablero: Tablero, indiceA :number, indiceB : number) : void => {
  tablero.cartas[indiceA].estaVuelta = false;
  tablero.cartas[indiceB].estaVuelta = false;
  tablero.estadoPartida = "CeroCartasLevantadas";
  tablero.indiceCartaVolteadaA = undefined;
  tablero.indiceCartaVolteadaB = undefined;
}

/*
  Esto lo podemos comprobar o bien utilizando every, o bien utilizando un contador (cartasEncontradas)
*/
const esPartidaCompleta = (tablero: Tablero) : boolean => 
  tablero.cartas.every((carta) => carta.encontrada);

/*
Iniciar partida
*/

export const iniciaPartida = (tablero: Tablero): void => {
 tablero.cartas = barajarCartas(
    tablero.cartas.map((carta) => ({
      ...carta,
      estaVuelta: false,
      encontrada: false,
    }))
  );
  tablero.estadoPartida = "CeroCartasLevantadas";
  tablero.indiceCartaVolteadaA = undefined;
  tablero.indiceCartaVolteadaB = undefined;
};