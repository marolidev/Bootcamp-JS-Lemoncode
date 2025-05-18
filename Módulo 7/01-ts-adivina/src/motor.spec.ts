import { comprobarNumero } from "./motor";
import { Estado } from "./modelo";
describe("comprobarNumero", () => {
    it("Deberia devolver NO_ES_UN_NUMERO cuando el texto no es un número", () =>
    {
        //Arrange
        const texto:string = "esto no es un número";
        const resultadoEsperado: Estado = "NO_ES_UN_NUMERO"

        //Act
        const resultado: Estado = comprobarNumero(texto);

        //Assert
        expect(resultado).toBe(resultadoEsperado);
    })
})