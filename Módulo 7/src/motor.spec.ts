import { comprobarNumero } from "./motor";
import { Estado } from "./modelo";
import {vi} from 'vitest'
import { partida } from "./modelo";

describe("comprobarNumero", () => {
    it("Deberia devolver NO_ES_UN_NUMERO cuando el texto no es un número", () => {
        //Arrange
        const texto: string = "esto no es un número";
        const resultadoEsperado: Estado = "NO_ES_UN_NUMERO";

        //Act
        const resultado = comprobarNumero(texto);

        //Assert
        expect(resultado).toBe(resultadoEsperado);
    });

    it("Debería devolver ES_EL_NUMERO_SECRETO cuando texto es el numero a acertar", () => {
    //Arrange
    const resultadoEsperado: Estado = "ES_EL_NUMERO_SECRETO"
    const texto: string = "23";
    vi.spyOn(partida, "numeroParaAcertar", "get").mockReturnValue(23);
    //Act
    const resultado: Estado = comprobarNumero(texto)
    //Assert
    expect (resultado).toBe(resultadoEsperado)
    });

    it("Debería devolver EL_NUMERO_ES_MAYOR cuando texto es mayor que el número a acertar", () => {
    // Arrange
    const resultadoEsperado: Estado = "EL_NUMERO_ES_MAYOR";
    const texto: string = "25";
    vi.spyOn(partida, "numeroParaAcertar", "get").mockReturnValue(23);
    // Act
    const resultado = comprobarNumero(texto);
    // Assert
    expect(resultado).toBe(resultadoEsperado);
        });

    it("Debería devolver EL_NUMERO_ES_MENOR cuando texto es menor que el número a acertar", () => {

        //Arrange
        const resultadoEsperado: Estado = "EL_NUMERO_ES_MENOR"
        const texto: string = "4";
        vi.spyOn(partida, "numeroParaAcertar", "get").mockReturnValue(24);
        //Act
        const resultado = comprobarNumero(texto)
        //Assert
        expect(resultado).toBe(resultadoEsperado);
    })
    });