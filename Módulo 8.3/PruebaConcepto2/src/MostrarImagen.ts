
const imagenCarta = document.getElementById("Abeja")
const carta = document.getElementById("box")

const reverso: string = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/6.png"
let volteada: boolean = false;

// if (imagenCarta) imagenCarta.style.display = "none";

if (carta instanceof HTMLDivElement && imagenCarta instanceof HTMLImageElement) {
    carta.addEventListener("click", () => {
        if (volteada) {
            carta.style.backgroundColor = "#0b3f60ff"
            imagenCarta.src = '';
        }
        else {
            imagenCarta.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/6.png";
            carta.style.backgroundColor = "#0b3f60ff"
        }

        volteada = !volteada;
    })

}

