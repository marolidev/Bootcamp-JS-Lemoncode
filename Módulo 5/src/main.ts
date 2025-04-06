import "./style.css";

//Mostrar puntuación

let puntuacion: number = 0;
let mensaje = document.getElementById("mensaje") as HTMLParagraphElement

const muestraPuntuacion = () => {
  const elementoPuntuacion = document.getElementById("puntuacion")
  if(elementoPuntuacion != null && elementoPuntuacion != undefined)
  {elementoPuntuacion.innerHTML = `${puntuacion}`}else{console.error("muestraPuntuacion: No se ha encontrado el elemento con id puntuacion")}
  return elementoPuntuacion
}

document.addEventListener("DOMContentLoaded", muestraPuntuacion)

//Pedir carta
const dameCarta = ():number => Math.floor(Math.random()*10 +1)

//Mostrar carta
const cartaImagen = document.getElementById("cartaImagen") as HTMLImageElement;

const mostrarCarta = (carta: number): void => {
  
  let imagenSrc = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg";
  switch (carta) {
      case 1:
          imagenSrc = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg";
          break;
      case 2:
          imagenSrc = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg";
          break;
      case 3:
          imagenSrc = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg";
          break;
      case 4:
          imagenSrc = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg";
          break;
      case 5:
          imagenSrc = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg";
          break;
      case 6:
          imagenSrc = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg";
          break;
      case 7:
          imagenSrc = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg";
          break;
      case 10:
          imagenSrc = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg";
          break;
      case 11:
          imagenSrc = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg";
          break;
      case 12:
          imagenSrc = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg";
          break;
  }
  cartaImagen.src = imagenSrc;
};

const botonPedirCarta = document.getElementById("dameCarta") as HTMLButtonElement

// Sumar puntuación
const sumaPuntuacion = (carta:number) => {
    if (carta === 10 || carta === 11 || carta === 12){
        puntuacion += 0.5
    }else{puntuacion += carta}
    return carta
}

//Game over
function gameOver() {
    if (puntuacion > 7.5 && mensaje) {
        mensaje.innerText = "Game Over";
        mensaje.style.display = "block";
        if(botonPedirCarta && botonPedirCarta instanceof HTMLButtonElement){botonPedirCarta.disabled = true}
        if (botonPlantarse && botonPlantarse instanceof HTMLButtonElement) botonPlantarse.disabled = true;
    }
}

if (botonPedirCarta && botonPedirCarta instanceof HTMLButtonElement){
    botonPedirCarta.addEventListener("click", () => {
      let cartaRand:number = dameCarta()
      if(cartaRand > 7) {cartaRand +=2}
        sumaPuntuacion(cartaRand)
        mostrarCarta(cartaRand);
        muestraPuntuacion();
        gameOver();
    });
}else{console.error("No se encontró el botón dameCarta")
}

//Me planto
const botonNueva = document.getElementById("nueva") as HTMLButtonElement;
const botonQueHabriaPasado = document.getElementById("alternativa") as HTMLButtonElement;
const botonPlantarse = document.getElementById("plantarse") as HTMLButtonElement

if (botonPlantarse && botonPlantarse instanceof HTMLButtonElement){
    botonPlantarse.addEventListener("click", () => {
        let textoMensaje = "";
            if (puntuacion < 4) {
                textoMensaje = "Has sido muy conservador"}
            if (puntuacion === 5){
                textoMensaje = "Te ha entrado el canguelo eh?"}
            if (puntuacion === 6)
                {textoMensaje = "Casi casi..."}
            if (puntuacion === 7)
                {textoMensaje = "Casi casi..."}
            if (puntuacion === 7.5)
                {textoMensaje = "¡Lo has clavado!¡Enhorabuena!"}
        mensaje.innerText = textoMensaje;
        mensaje.style.display = "block";

        if (botonPedirCarta && botonPedirCarta instanceof HTMLButtonElement) botonPedirCarta.disabled = true;
        if (botonPlantarse && botonPlantarse instanceof HTMLButtonElement) botonPlantarse.disabled = true;
        botonQueHabriaPasado.style.display = "block";
    })
    
}
// Nueva partida

if (botonNueva && botonNueva instanceof HTMLButtonElement){
    botonNueva.addEventListener("click", () => {
        puntuacion = 0;
        muestraPuntuacion();
        mensaje.style.display = "none";
        botonPedirCarta.disabled = false;
        botonPlantarse.disabled = false;
        botonQueHabriaPasado.style.display = "none"
    })
}

if (botonQueHabriaPasado && botonQueHabriaPasado instanceof HTMLButtonElement){
    botonQueHabriaPasado.addEventListener("click", () => {
        let cartaRand = dameCarta()
        mensaje.innerText = `Si hubieras seguido, habría salido un ${cartaRand}`;
        mensaje.style.display = "block"
    })
}
muestraPuntuacion();