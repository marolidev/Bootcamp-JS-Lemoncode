interface InfoCarta {
    idFoto: number;
    imagen: string;
}

const cartasIni: InfoCarta[] = [
    { idFoto: 1, imagen: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/1.png" },
    { idFoto: 2, imagen: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/2.png" },
    { idFoto: 3, imagen: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/3.png" }
]

const cartas: InfoCarta[] = [...cartasIni, ...cartasIni]


// const cartaDivs = document.getElementsByClassName("carta")

// let volteada = false;

// Array.from(cartaDivs).forEach((div) => {
//     div.addEventListener("click", () => {
//         const img = div.querySelector("img") as HTMLImageElement;
//         if (volteada) {
//             img.style.display = "none"
//         } else {
//             img.style.display = "block";
//             img.style.backgroundColor = "transparent"
//         }
//         volteada = !volteada
//     })

// })

const mapearDivsCartas = () => {
    for (let indice = 0; indice < cartas.length; indice++) {
        const elementoDiv = document.querySelector(`div[data-indice-id="${indice}"]`);

        if (elementoDiv instanceof HTMLDivElement) {
            elementoDiv.addEventListener('click', () => {
                const elementoImage = document.querySelector(`img[data-indice-id="${indice}"]`);

                if (elementoImage instanceof HTMLImageElement) {
                    elementoImage.src = cartas[indice].imagen
                }
            })
        }
    }
}

document.addEventListener('DOMContentLoaded', mapearDivsCartas)