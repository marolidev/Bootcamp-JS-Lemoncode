//import "./style.css";

function sumar(){
    const sumando1 = (document.getElementById("sumando1") as HTMLInputElement).value;
    const sumando2 = (document.getElementById("sumando2") as HTMLInputElement).value;
    
    //Sumar los dos números
    const resultado = parseInt(sumando1) + parseInt(sumando2);
    //Mostrar el resultado
    const resultadoElement = document.getElementById("resultado");

    if (resultadoElement !== null && resultadoElement !== undefined){
    resultadoElement.innerHTML = resultado.toString();
    }
}

const botonSumar = document.getElementById("sumar");

if (botonSumar !== null && botonSumar !==undefined){
  botonSumar.addEventListener("click", sumar);
}
