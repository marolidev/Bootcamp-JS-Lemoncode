import {
  validarClave, 
  tieneMayusculasYMinusculas, 
  tieneNumeros, 
  tieneCaracteresEspeciales, 
  tieneLongitudMinima, 
  tieneNombreUsuario, 
  tienePalabrasComunes 
} from "./main";

const commonPasswords = ['password', '123456', "admin", "qwerty"]

//Análisis de las condiciones
//1. Debe tener mayúsculas y minúsculas
describe("Validaciones individuales", () => {

  it("tieneMayusculasYMinusculas debe fallar si no hay mayúsculas", () => {
    // Arrange
    const clave = "password";
    // Act
    const resultado = tieneMayusculasYMinusculas(clave);
    // Assert
    expect(resultado.esValida).toBe(false);
    expect(resultado.error).toBe("La clave debe tener mayúsculas y minúsculas");
  });
//2. Debe tener números
it("tieneNumeros debe fallar si no hay números", () => {
    // Arrange
    const clave = "Password!";
    // Act
    const resultado = tieneNumeros(clave);
    // Assert
    expect(resultado.esValida).toBe(false);
    expect(resultado.error).toBe("La clave debe tener números");
  });
//3. Debe tener caracteres especiales
 it("tieneCaracteresEspeciales debe fallar si no hay caracteres especiales", () => {
    // Arrange
    const clave = "Password12";
    // Act
    const resultado = tieneCaracteresEspeciales(clave);
    // Assert
    expect(resultado.esValida).toBe(false);
    expect(resultado.error).toBe("La clave debe tener caracteres especiales");
  });
//4. Debe tener longitud mínima de 8 caracteres
  it("tieneLongitudMinima debe fallar si la longitud es menor a 8", () => {
    // Arrange
    const clave = "Pass1!";
    // Act
    const resultado = tieneLongitudMinima(clave);
    // Assert
    expect(resultado.esValida).toBe(false);
    expect(resultado.error).toBe("La clave debe tener una longitud mínima de 8 caracteres");
  });
//5. No debe tener el nombre del usuario
  it("tieneNombreUsuario debe fallar si incluye el nombre de usuario", () => {
    // Arrange
    const nombreUsuario = "juan";
    const clave = "Juan123!";
    // Act
    const resultado = tieneNombreUsuario(nombreUsuario, clave);
    // Assert
    expect(resultado.esValida).toBe(false);
    expect(resultado.error).toBe("La clave no debe tener el nombre del usuario");
  });
//6. No debe contener palabras comunes (array de comunes)
  it("tienePalabrasComunes debe fallar si incluye una palabra común", () => {
    // Arrange
    const clave = "qwerty";
    // Act
    const resultado = tienePalabrasComunes(clave, commonPasswords);
    // Assert
    expect(resultado.esValida).toBe(false);
    expect(resultado.error).toBe("La clave no debe contener palabras comunes");
  });
})
//Función validar clave

describe("Validación completa", () => {
  it("Debe retornar error si la clave es débil", () => {
    // Arrange
    const nombreUsuario = "maria";
    const clave = "qwerty";
    // Act
    const resultado = validarClave(nombreUsuario, clave, commonPasswords);
    // Assert
    expect(resultado.esValida).toBe(false);
    expect(resultado.error).toBe("La clave debe tener mayúsculas y minúsculas");
  });

  it("Debe pasar si la clave es fuerte", () => {
    // Arrange
    const nombreUsuario = "carlos";
    const clave = "Str0ng_P@ssword!";
    // Act
    const resultado = validarClave(nombreUsuario, clave, commonPasswords);
    // Assert
    expect(resultado.esValida).toBe(true);
    expect(resultado.error).toBeUndefined();
  });
});