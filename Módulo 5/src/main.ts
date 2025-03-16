import "./style.css";


const aleatorio = ():number => Math.floor(Math.random()*101);

const numeroParaAcertar:number = aleatorio();

type estado = 
| "NO_ES_UN_NUMERO"
| "EL_NUMERO_ES_MAYOR"
| "EL_NUMERO_ES_MENOR"
| "ES_EL_NUMERO_SECRETO"
| "GAME_OVER_MAXIMO_DE_INTENTOS"

const MAXIMO_INTENTOS: number = 5
let numeroDeIntentos:number = 0;

const hasSuperadoElMaximo = ():boolean => numeroDeIntentos >= MAXIMO_INTENTOS;

const muestraIntentos = () => {
  const elementoIntentos = document.getElementById("intentos")
  if (elementoIntentos!=null && elementoIntentos !=undefined){
    elementoIntentos.innerHTML = `${numeroDeIntentos} de ${MAXIMO_INTENTOS}`
  }else{console.error("muestraNumeroDeIntento: No se ha encontrado el elemento con id intentos")
  }
}

document.addEventListener("DOMContentLoaded", muestraIntentos)

const gestionarGameOver = (estado:estado) => {
  if (estado === "GAME_OVER_MAXIMO_DE_INTENTOS"){
    const comprobar = document.getElementById("comprobar")
    if(comprobar != null && comprobar != undefined && comprobar instanceof HTMLButtonElement){
      comprobar.disabled = true;
    }else{console.error("gestionarGameOver: No se ha encontrado el elemento con id comprobar")}
  }
}

const muestraMensajeComprobacion = (texto:string, estado:estado) => {
  let mensaje: string = "";
  switch (estado) {
  case "NO_ES_UN_NUMERO":
  mensaje = `"${texto}" no es un numero 🤨, prueba otra vez`;
  break;
  case "EL_NUMERO_ES_MAYOR":
  mensaje = `UUYYY ! El número ${texto} es MAYOR que el número secreto`;
  break;
  case "EL_NUMERO_ES_MENOR":
  mensaje = `UUYYY ! El número ${texto} es MENOR que el número secreto`;
  break;
  case "ES_EL_NUMERO_SECRETO":
  mensaje = `¡¡¡Enhorabuena, has acertado el número!!! 🎉🎉🎉`;
  break;
  case "GAME_OVER_MAXIMO_DE_INTENTOS":
  mensaje = `🪦 GAME OVER, has superado el número máximo de intentos`;
  break;
  default:
  mensaje = "No se que ha pasado, pero no deberías estar aquí";
  break;
  }
const elementoResultado = document.getElementById("resultado");
if(elementoResultado != null && elementoResultado != undefined){
  elementoResultado.innerHTML = mensaje;
}else{ console.error("muestraMensajeComprobacion: No se ha encontrado el elemento con id resultado")}
}

const comprobarNumero = (texto: string): estado => {
  const numero = parseInt(texto);
  const esUnNumero = !isNaN(numero);
  if (!esUnNumero) {
  return "NO_ES_UN_NUMERO";
  }
  if (numero === numeroParaAcertar) {
  return "ES_EL_NUMERO_SECRETO";
  }
  if (hasSuperadoElMaximo()) {
  return "GAME_OVER_MAXIMO_DE_INTENTOS";
  }
  return numero > numeroParaAcertar ? "EL_NUMERO_ES_MAYOR" : "EL_NUMERO_ES_MENOR";
  };

  const handleCompruebaClick = () => {
    let texto: string = "";
    const inputElement = document.getElementById("numero");

    if(inputElement && inputElement instanceof HTMLInputElement){texto = inputElement.value}
    
    const estado: estado = comprobarNumero(texto);

    muestraMensajeComprobacion(texto, estado);
    numeroDeIntentos++;
    muestraIntentos();
    gestionarGameOver(estado);
    };

const botonComprobar = document.getElementById("comprobar");
if(botonComprobar && botonComprobar instanceof HTMLButtonElement){
botonComprobar.addEventListener("click", handleCompruebaClick)
};