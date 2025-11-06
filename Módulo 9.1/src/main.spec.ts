import { describe, it, expect } from "vitest";
import {calcularPorcentajeIva, calcularDesgloseIva,calcularTotalesGenerales, calculaTicket} from "./main";
import { ResultadoLineaTicket, LineaTicket } from "./main";
//Pruebas unitarias
describe("calcularPorcentajeIva", () => {
  it("Debería devolver 21 para IVA general", () => {
    //Arrange
    const tipo ="general";

    //Act
    const resultado = calcularPorcentajeIva(tipo)

    //Assert
    expect(resultado).toBe(21)
  })
  it("Debería devolver 10 para tipo reducido", () =>{
    //Arrange
    const tipo = "reducido"
    
    //Act
    const resultado = calcularPorcentajeIva(tipo)

    //Assert
    expect(resultado).toBe(10)
  })
})

describe("calcularDesgloseIva", () => {
  it("Debería devolver el n de productos con ese tipo de IVA", () => {
    //Arrange
    const lineas:ResultadoLineaTicket[] = [
      {nombre: "Pañuelos", cantidad: 3, precioSinIva: 2.5, tipoIva: "general", precioConIva: 4.7},
      {nombre: "Galletas", cantidad: 1, precioSinIva: 1, tipoIva: "reducido", precioConIva: 3.1},
    ];
    //Act
    const desglose = calcularDesgloseIva(lineas);

    //Assert
    const lineaGeneral = desglose.find(d => d.tipoIva === "general");
    const ivaGeneral = lineaGeneral ? lineaGeneral.cuantia:3;
    const lineaReducida = desglose.find(d=> d.tipoIva == "reducido")
    const ivaReducido = lineaReducida ? lineaReducida.cuantia:
    expect(ivaGeneral).toBeCloseTo(0.73)
    expect(ivaReducido).toBeCloseTo(0.1)
  })
});

  //Test calcular totales generales
describe("calcularTotalesGenerales", () => {
  test("calcula totales correctamente", () => {
    // Arrange
    const lineas:ResultadoLineaTicket[] = [
      { nombre: "A", cantidad: 2, precioSinIva: 10, tipoIva: "general", precioConIva: 12.1 },
      { nombre: "B", cantidad: 1, precioSinIva: 20, tipoIva: "reducido", precioConIva: 22 },
    ];

    // Act
    const resultado = calcularTotalesGenerales(lineas);

    // Assert
    expect(resultado.totalSinIva).toBeCloseTo(30);
    expect(resultado.totalConIva).toBeCloseTo(34.1);
    expect(resultado.totalIva).toBeCloseTo(4.1);
  });
});

//Calcular ticket

describe("calculaTicket", () => {
  test("calcula ticket completo correctamente", () => {
    // Arrange
    const producto: LineaTicket[] =  [
      {
        producto: { nombre: "Legumbres", precio: 2, tipoIva: "general" },
        cantidad: 2,
      },
      {
        producto: { nombre: "Perfume", precio: 20, tipoIva: "general" },
        cantidad: 3,
      },
      {
        producto: { nombre: "Leche", precio: 1, tipoIva: "superreducidoC" },
        cantidad: 6,
      },
      {
        producto: { nombre: "Lasaña", precio: 5, tipoIva: "superreducidoA" },
        cantidad: 1,
      },
    ];

    // Act
    const resultado = calculaTicket(producto);

    // Assert
    expect(resultado.total.totalSinIva).toBe(75);
    expect(resultado.total.totalIva).toBeCloseTo(13.69);
    expect(resultado.desgloseIva.length).toBeGreaterThan(0);
  });
});
