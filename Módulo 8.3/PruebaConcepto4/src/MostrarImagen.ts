
const imagenAbeja = document.getElementById("Abeja")
const carta = document.getElementById("box")

const imagenBuho = document.getElementById("Buho")
const cartaBuho = document.getElementById("box2")

if (imagenAbeja) imagenAbeja.style.display = "none";
if (imagenBuho) imagenBuho.style.display = "none";

let volteadaAbeja: boolean = false; //false = fondo azul, true = imagen
let volteadaBuho: boolean = false;

if (carta instanceof HTMLDivElement && imagenAbeja instanceof HTMLImageElement){
    carta.addEventListener("click", () => {
        if (volteadaAbeja){
             carta.style.backgroundColor = "#90D5FF"
             imagenAbeja.style.display = "none";  
        } 
        else{
           imagenAbeja.style.display = "block"
           carta.style.background = "lavender"
        }
        volteadaAbeja = !volteadaAbeja

})

}

if(cartaBuho instanceof HTMLDivElement && imagenBuho instanceof HTMLImageElement){

    cartaBuho.addEventListener("click", () => {
        if (volteadaBuho){
            cartaBuho.style.backgroundColor = "#90D5FF"
           imagenBuho.style.display = "none";
        } 
        else{
            
             imagenBuho.style.display = "block"
            cartaBuho.style.background = "lavender"
        }
        volteadaBuho = !volteadaBuho

})
}