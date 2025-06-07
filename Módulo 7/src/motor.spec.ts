// Partida --> modelo
//numero aleatorio --> motor, obtener puntos --> motor, suma, obtener carta
import {vi} from 'vitest'
import { obtenerNumeroAleatorio, obtenerNumeroCarta, obtenerPuntosCarta, sumaPuntuacion} from "./motor";


describe("condicionVictoria", () => {
    it("El jugador gana si el resultado es 7.5", () => {
        //Arrange
        const resultadoEsperado:number = 7.5;
        //Act
        const resultado = sumaPuntuacion(7.5)
        //Assert
        expect(resultado).toBe(resultadoEsperado)

    })
    it("El jugador pierde si el resultado es mayor a 7.5", () => {
        //Arrange
        const resultadoEsperado: number = 9;
        //Act
        const resultado = sumaPuntuacion(9)
        //Assert
        expect(resultado).toBe(resultadoEsperado)


    })
})

//Número aleatorio, si es >7 suma 2 al resultado final

describe ("numeroAleatorio", () => {
    it("El número aleatorio es 0", () => {

        //Arrange
        const numeroEsperado: number = 0;
        vi.spyOn(global.Math, "random").mockReturnValue(0)
        //Act
        const numero = obtenerNumeroAleatorio();
        //Assert
        expect(numero).toBe(numeroEsperado)

    })

    it("Si el número aleatorio es mayor que 7 se suma 2 al resultado final", () => {
        //Arrange
        const numeroEsperado: number = 10;
        //Act
        const resultado = obtenerNumeroCarta(8)
        //Assert
        expect(resultado).toBe(numeroEsperado)
    })
}
)

//Si la carta es mayor a 7, devuelve 0.5
describe("cartaFiguras", () => {
    it("Si la carta es mayor a 7, debería devolver 0.5", () => {
        //Arrange
        const cartaConvertida: number = 0.5
        //Act
        const resultado = obtenerPuntosCarta(11)
        //Assert
        expect(resultado).toBe(cartaConvertida)

    })
})



