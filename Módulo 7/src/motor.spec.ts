// Partida --> modelo
//numero aleatorio --> motor, obtener puntos --> motor, suma, obtener carta
import { vi } from 'vitest'
import { EstadoPartida, partida } from './modelo';
import { obtenerNumeroAleatorio, obtenerNumeroCarta, obtenerPuntosCarta, gestionarEstadoPartida } from "./motor";

describe('gestionarEstadoPartida', () => {
    it('Debería devolver seguir_jugando, cuando la puntuación sea menor a 7.5', () => {
        // Arrange
        const resultadoEsperado: EstadoPartida = 'seguir_jugando';
        vi.spyOn(partida, 'puntuacion', 'get').mockReturnValue(2);
        // Act
        const resultado = gestionarEstadoPartida();

        // Assert
        expect(resultadoEsperado).toBe(resultado);
    })

    it('Debería devolver Ganar, cuando la puntuación sea igual a 7.5', () => {
        // Arrange
        const resultadoEsperado: EstadoPartida = 'Ganar';
        vi.spyOn(partida, 'puntuacion', 'get').mockReturnValue(7.5);
        // Act
        const resultado = gestionarEstadoPartida();

        // Assert
        expect(resultadoEsperado).toBe(resultado);
    })

    it('Debería devolver Perder, cuando la puntuación sea mayor a 7.5', () => {
        // Arrange
        const resultadoEsperado: EstadoPartida = 'Perder';
        vi.spyOn(partida, 'puntuacion', 'get').mockReturnValue(10);
        // Act
        const resultado = gestionarEstadoPartida();

        // Assert
        expect(resultadoEsperado).toBe(resultado);
    })
})


//Número aleatorio, si es >7 suma 2 al resultado final

describe("numeroAleatorio", () => {
    it("El número aleatorio es 1", () => {

        //Arrange
        const numeroEsperado: number = 4;
        vi.spyOn(global.Math, "random").mockReturnValue(0.3)
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

     it("Si el número aleatorio es menor que 7, devuelve el valor del número", () => {
        //Arrange
        const numeroEsperado: number = 5;
        //Act
        const resultado = obtenerNumeroCarta(5)
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
    it("Si la carta es menor que 7, debería devolver su valor", () => {
        //Arrange
        const carta: number = 4
        //Act
        const resultado = obtenerPuntosCarta(4)
        //Assert
        expect(resultado).toBe(carta)
    })
})

