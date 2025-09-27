
interface Carta {
    idFoto: number;
    imagen: string;
}


const cartasIni: Carta[] = [{idFoto: 1,imagen: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/1.png"},
{idFoto: 2, imagen: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/2.png"},
{idFoto: 3, imagen: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/3.png"},
{idFoto: 1,imagen: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/1.png"},
{idFoto: 2, imagen: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/2.png"},
{idFoto: 3, imagen: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/3.png"},
]

const cartas: Carta[] = [...cartasIni, ...cartasIni]


const cartaDivs = document.getElementsByClassName("carta")

let volteada = false;

Array.from(cartaDivs).forEach((div) => {
    div.addEventListener("click", () => {
        const img = div.querySelector("img") as HTMLImageElement;
        if(volteada){
            img.style.display = "none"
        }else {
            img.style.display = "block";
            img.style.backgroundColor = "transparent"
        }
        volteada = !volteada
    })

})