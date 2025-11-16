export const commonPasswords: string[] = [
  "password",
  "123456",
  "qwerty",
  "admin",
  "letmein",
  "welcome",
  "monkey",
  "sunshine",
  "password1",
  "123456789",
  "football",
  "iloveyou",
  "1234567",
  "123123",
  "12345678",
  "abc123",
  "qwerty123",
  "1q2w3e4r",
  "baseball",
  "password123",
  "superman",
  "987654321",
  "mypass",
  "trustno1",
  "hello123",
  "dragon",
  "1234",
  "555555",
  "loveme",
  "hello",
  "hockey",
  "letmein123",
  "welcome123",
  "mustang",
  "shadow",
  "12345",
  "passw0rd",
  "abcdef",
  "123abc",
  "football123",
  "master",
  "jordan23",
  "access",
  "flower",
  "qwertyuiop",
  "admin123",
  "iloveyou123",
  "welcome1",
  "monkey123",
  "sunshine1",
  "password12",
  "1234567890",
];

//Interfaz de validación
interface ValidacionClave {
  esValida: boolean;
  error?: string;
}


//Análisis de las condiciones
//1. Debe tener mayúsculas y minúsculas
export const tieneMayusculasYMinusculas = (clave: string): ValidacionClave => {
 if (!/[A-Z]/.test(clave) || !/[a-z]/.test(clave)){
  return{esValida: false, error: "La clave debe tener mayúsculas y minúsculas"}
 }
 return{esValida:true}
};
//2. Debe tener números
export const tieneNumeros = (clave: string): ValidacionClave => {
  if(!/\d/.test(clave)){
    return{esValida:false, error: "La clave debe tener números"}
  }
  return{esValida: true}
};
//3. Debe tener caracteres especiales
export const tieneCaracteresEspeciales = (clave: string): ValidacionClave => {
  const caracteres = /[!@#$%^&*(),.?":{}|<>_\-+=]/
  if (caracteres.test(clave)){
    return {esValida: true}
  }
  return{esValida: false, error: "La clave debe tener caracteres especiales"}
};
//4. Debe tener longitud mínima de 8 caracteres
export const tieneLongitudMinima = (clave: string): ValidacionClave => {
    if (clave.length < 8) {
    return { esValida: false, error: "La clave debe tener una longitud mínima de 8 caracteres" };
  }
  return { esValida: true };
};
//5. No debe tener el nombre del usuario
export const tieneNombreUsuario = (nombreUsuario: string, clave: string,): ValidacionClave => {
 if(clave.toLowerCase().includes(nombreUsuario.toLowerCase())){
  return {esValida: false, error: "La clave no debe tener el nombre del usuario"}
}
  return {esValida: true}

};
//6. No debe contener palabras comunes (array de comunes)
export const tienePalabrasComunes = (clave: string, commonPasswords: string[]): ValidacionClave => {
 const claveLower = clave.toLowerCase();
 if(commonPasswords.some(p => claveLower.includes(p.toLowerCase()))){
  return {esValida:false, error: "La clave no debe contener palabras comunes"}
 }
 return {esValida: true}
};
//Función validar clave

export const validarClave = (
  nombreUsuario: string,
  clave: string,
  commonPasswords: string[]
): ValidacionClave => {
  const validaciones = [

  tieneMayusculasYMinusculas(clave),
  tieneNumeros(clave),
  tieneCaracteresEspeciales(clave),
  tieneLongitudMinima(clave),
  tieneNombreUsuario(nombreUsuario,clave),
  tienePalabrasComunes(clave,commonPasswords)
]

for (const v of validaciones){
  if(!v.esValida) return v
}
return {esValida: true}
}
