
const imagenCarta = document.getElementById("Abeja")
const carta = document.getElementById("box")

const reverso: string = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/6.png"
let volteada: boolean = false;

if (imagenCarta) imagenCarta.style.display = "none";

if (carta instanceof HTMLDivElement && imagenCarta instanceof HTMLImageElement){
    carta.addEventListener("click", () => {
        if (volteada){
            imagenCarta.style.display = "block"
            carta.style.backgroundColor = "transparent"
        } 
        else{
            imagenCarta.style.display = "none";
            carta.style.backgroundColor = "#90D5FF"
        }
        volteada = !volteada

})

}

