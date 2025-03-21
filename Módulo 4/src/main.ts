import "./style.css";

 //Formatear el turno para que sea un número de 2 digitos
function formatTurno(num:number){
  return num.toString().padStart(2, "0")
};


//Elementos: botón siguiente, botón anterior, botón reset, display
 const siguiente = document.getElementById("next"); 
 const anterior = document.getElementById("prev");
 const reset = document.getElementById("reset");
 const display = document.querySelector(".numero-turno");
 const cambiar = document.getElementById("cambiar");
 const ingresar = document.getElementById("input-turno");

let turno: number = 1;

const actualizarDisplay = (): void => {
    if (display !== null && display !== undefined && display instanceof HTMLHeadingElement)  {
        display.textContent = formatTurno(turno);
    }
};
// Funciones para cambiar el turno: siguiente, anterior y reset
function siguienteTurno(){
  turno = turno + 1;
  actualizarDisplay();
};

function anteriorTurno(){
  if (turno > 0) {
      turno = turno - 1;
      actualizarDisplay();
  }
};

function resetTurno(){
  turno = 0;
  actualizarDisplay();
};

//Función para cambiar el turno con un input mmanualmente

function cambiarTurnoManual(){
  if (ingresar !== null && ingresar !== undefined && ingresar instanceof HTMLInputElement){
    const nuevoTurno = parseInt(ingresar.value, 10)
    if(!isNaN(nuevoTurno) && nuevoTurno >=1){
      turno = nuevoTurno;
      actualizarDisplay();
    }else{
      alert("Ingrese un número mayor o igual que 1")}
  }
}

// Agregar eventos a los botones si existen dentro de la función

const cargarAplicacion = () => {
if (siguiente !== null && siguiente !== undefined && siguiente instanceof HTMLButtonElement){
siguiente.addEventListener("click", siguienteTurno)};

if (anterior !== null && anterior !== undefined && anterior instanceof HTMLButtonElement){
anterior.addEventListener("click", anteriorTurno)};

if (reset !== null && reset !== undefined && reset instanceof HTMLButtonElement){
reset.addEventListener("click", resetTurno)};

if (cambiar !== null && cambiar!== undefined && cambiar instanceof HTMLButtonElement){
cambiar.addEventListener("click", cambiarTurnoManual);
}
actualizarDisplay();}
// Mostrar el turno inicial


// Llamar a la función para que se ejecute al tener cargado el HTML para que no de fallo
document.addEventListener('DOMContentLoaded', cargarAplicacion)
