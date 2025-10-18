// ./src/ui.ts
import {
  tablero,
  Carta,
} from "./modelo";
import {
  iniciaPartida,
  sePuedeVoltearLaCarta,
  voltearLaCarta,
  sonPareja,
  parejaEncontrada,
  parejaNoEncontrada,
} from "./motor";

const contenedorCartas = document.querySelector("#tablero") as HTMLDivElement;
const botonIniciar = document.querySelector("#btn-iniciar") as HTMLButtonElement;
const botonReiniciar = document.querySelector("#btn-reiniciar") as HTMLButtonElement


const renderizarCartas = (cartas: Carta[]) => {
  contenedorCartas.innerHTML = "";
  cartas.forEach((carta, indice) => {
    const img = document.createElement("img");
    img.src = carta.estaVuelta || carta.encontrada ? carta.imagen: "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
    img.className = "carta";
    img.dataset.indiceArray = indice.toString();
    contenedorCartas.appendChild(img);
  });
};

const manejarClickCarta = (event: MouseEvent) => {
  const elemento = event.target as HTMLImageElement;
  const indice = Number(elemento.dataset.indiceArray);
  if (!sePuedeVoltearLaCarta(tablero, indice)) return;

  voltearLaCarta(tablero, indice);
  renderizarCartas(tablero.cartas);

  if (tablero.estadoPartida === "DosCartasLevantadas") {
    const { indiceCartaVolteadaA, indiceCartaVolteadaB } = tablero;
    if (sonPareja(indiceCartaVolteadaA!, indiceCartaVolteadaB!, tablero)) {
      setTimeout(() => {
        parejaEncontrada(tablero, indiceCartaVolteadaA!, indiceCartaVolteadaB!);
        renderizarCartas(tablero.cartas);
        if (tablero.estadoPartida === "PartidaCompleta") {
          alert("🎉 ¡Has ganado!")
          botonReiniciar.style.display = "inline-block";
        }
      }, 800);
    } else {
      setTimeout(() => {
        parejaNoEncontrada(tablero, indiceCartaVolteadaA!, indiceCartaVolteadaB!);
        renderizarCartas(tablero.cartas);
      }, 1000);
    }
  }
};

contenedorCartas.addEventListener("click", manejarClickCarta);

botonIniciar.addEventListener("click", () => {
  iniciaPartida(tablero);
  renderizarCartas(tablero.cartas);
});

botonReiniciar.addEventListener("click", () => {
  iniciaPartida(tablero);     // reiniciamos lógica
  renderizarCartas(tablero.cartas);  // volvemos a pintar
  botonReiniciar.style.display = "none"; // ocultamos otra vez
});

