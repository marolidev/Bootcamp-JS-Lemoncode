import "./style.css";

 //Formatear el turno para que sea un número de 2 digitos
function formatTurno(num:number){
  return num.toString().padStart(2, "0")
};

function turno (){
//Elementos: botón siguiente, botón anterior, botón reset, display
 const siguiente = document.getElementById("next") as HTMLButtonElement; 
 const anterior = document.getElementById("prev") as HTMLButtonElement;
 const reset = document.getElementById("reset") as HTMLButtonElement;
 const display = document.querySelector(".numero-turno") as HTMLHeadingElement;
 const cambiar = document.getElementById("cambiar") as HTMLButtonElement;
 const ingresar = document.getElementById("input-turno") as HTMLInputElement;

let turno: number = 1;

const actualizarDisplay = (): void => {
    if (display !== null && display !== undefined)  {
        display.textContent = formatTurno(turno);
    }
};
// Función para cambiar el turno
function siguienteTurno(){
  turno = turno + 1;
  return actualizarDisplay();
};

function anteriorTurno(){
  if (turno > 0) {
      turno = turno - 1;
      return actualizarDisplay();
  }
};

function resetTurno(){
  turno = 0;
  return actualizarDisplay();
};

function cambiarTurnoManual(){
  if (ingresar !== null && ingresar !== undefined){
    const nuevoTurno = parseInt(ingresar.value, 10)
    if(!isNaN(nuevoTurno) && nuevoTurno >=1){
      turno = nuevoTurno;
      actualizarDisplay();
    }else{
      alert("Ingrese un número mayor o igual que 1")}
  }
  ingresar.value = "";
}

// Agregar eventos a los botones si existen
siguiente?.addEventListener("click", siguienteTurno);
anterior?.addEventListener("click", anteriorTurno);
reset?.addEventListener("click", resetTurno);
cambiar?.addEventListener("click", cambiarTurnoManual);

// Mostrar el turno inicial
actualizarDisplay();
}

// Llamar a la función para que se ejecute al cargar el script
turno();
