type Especialidad = "Medico de familia" | "Pediatra" | "Cardiólogo";

interface Pacientes {
  id: number;
  nombre: string;
  apellidos: string;
  sexo: string;
  temperatura: number;
  frecuenciaCardiaca: number;
  especialidad: Especialidad;
  edad: number;
}

const pacientes: Pacientes[] = [
  {
    id: 1,
    nombre: "John",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 80,
    especialidad: "Medico de familia",
    edad: 44,
  },
  {
    id: 2,
    nombre: "Jane",
    apellidos: "Doe",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 70,
    especialidad: "Medico de familia",
    edad: 43,
  },
  {
    id: 3,
    nombre: "Junior",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 90,
    especialidad: "Pediatra",
    edad: 8,
  },
  {
    id: 4,
    nombre: "Mary",
    apellidos: "Wien",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 120,
    especialidad: "Medico de familia",
    edad: 20,
  },
  {
    id: 5,
    nombre: "Scarlett",
    apellidos: "Somez",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 110,
    especialidad: "Cardiólogo",
    edad: 30,
  },
  {
    id: 6,
    nombre: "Brian",
    apellidos: "Kid",
    sexo: "Male",
    temperatura: 39.8,
    frecuenciaCardiaca: 80,
    especialidad: "Pediatra",
    edad: 11,
  },
];

// a) Pacientes asignados a pediatría

const crearParrafo = (mensaje: string): HTMLParagraphElement => {
  const p = document.createElement("p");
  p.textContent = mensaje;

  return p;
}

const mostrarPantalla = (pacientes: Pacientes[], idElemento: string) => {
  const div = document.getElementById(idElemento);
  for (let i: number = 0; i < pacientes.length; i++) {
    const parrafoCreado = crearParrafo(`ID- ${pacientes[i].id} - ${pacientes[i].nombre} ${pacientes[i].apellidos}`);
    if (div instanceof HTMLDivElement) {
      div.appendChild(parrafoCreado)
    }
  }
}

const obtenPacientesAsignadosAPediatria = (pacientes: Pacientes[]): Pacientes[] => {
  let pacientesPediatria = [];
  for (let i: number = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad == "Pediatra") {
      pacientesPediatria.push(pacientes[i]);
    }
  }

  return pacientesPediatria;
};

const pacientesPorPediatria = obtenPacientesAsignadosAPediatria(pacientes);
mostrarPantalla(pacientesPorPediatria, "lista-pacientes");

//b) Pacientes asignados a pediatría menores a 10 años

const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = (pacientes: Pacientes[]): Pacientes[] => {
  let pacientesMenorDiez = [];
  for (let i: number = 0; i < pacientes.length; i++){
     if (pacientes[i].especialidad == "Pediatra" && pacientes[i].edad < 10){
      pacientesMenorDiez.push(pacientes[i])
     }
  } 
  return pacientesMenorDiez
};

const pacientesMenorDiez = obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios(pacientes)
mostrarPantalla(pacientesMenorDiez, "lista-edad")


//Ritmo cardiaco > 100 y temperatura > 39

const mostrarPantalla1 = (estaActivo: boolean, idElemento: string) => {
  const div = document.getElementById(idElemento);
  const parrafoCreado = estaActivo ? crearParrafo('Tenemos que activar el protocolo') : crearParrafo('Tenemos que desactivar el protocolo')
  if (div instanceof HTMLDivElement) {
    div.appendChild(parrafoCreado)
  }
}

const mostrarPantalla2 = (activarPediatria: boolean, idElemento: string) => {
  const div = document.getElementById(idElemento);
  const parrafoCreado = activarPediatria ? crearParrafo('Hay pacientes asignados a pediatría') : crearParrafo('No hay pacientes asignados a pediatría')
  if (div instanceof HTMLDivElement) {
    div.appendChild(parrafoCreado)
  }
}

const activarProtocoloUrgencia = (pacientes: Pacientes[]): boolean => {

  let activarProtocolo = false;
  for (let i: number = 0; i < pacientes.length; i++) {
    if (pacientes[i].frecuenciaCardiaca > 100 && pacientes[i].temperatura > 39) {
      activarProtocolo = true;
      return activarProtocolo;
    }
  }
  return activarProtocolo;
};

const estaActivo = activarProtocoloUrgencia(pacientes);
mostrarPantalla1(estaActivo, "urgencias");

//Reasignar pediatría

const reasignaPacientesAMedicoFamilia = (
  pacientes: Pacientes[]): Pacientes[] => {
    let pacientesMedicoFamilia = [];
    for (let i: number = 0; i < pacientes.length; i++) {
      if(pacientes[i].especialidad === "Pediatra"){
        pacientes[i].especialidad = "Medico de familia"
        pacientesMedicoFamilia.push(pacientes[i]);
      }
    }  
    return pacientesMedicoFamilia
};


const reasignarPacientes = reasignaPacientesAMedicoFamilia(pacientes)
mostrarPantalla(reasignarPacientes, "medico-familia")

//Mandar pediatra a casa
const HayPacientesDePediatria = (pacientes: Pacientes[]): boolean => {

  let pacientesPediatria = false;
  for (let i: number = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad == "Pediatra") {
      pacientesPediatria = true;
      return pacientesPediatria;
    }
  }
  return pacientesPediatria;
};

const activarPediatria = HayPacientesDePediatria(pacientes);
mostrarPantalla2(activarPediatria, "pediatra");



//Opcional
interface NumeroPacientesPorEspecialidad {
  medicoDeFamilia: number;
  pediatria: number;
  cardiologia: number;
}


const cuentaPacientesPorEspecialidad = (pacientes: Pacientes[]): NumeroPacientesPorEspecialidad => {
  let cuentaPaciente = []

  let resultado: NumeroPacientesPorEspecialidad = {
    medicoDeFamilia: 0,
    pediatria: 0,
    cardiologia: 0

}
  for(let i: number = 0; i < pacientes.length; i++) {
    cuentaPaciente.push(pacientes[i])
    if(cuentaPaciente[i].especialidad == "Medico de familia"){
      resultado.medicoDeFamilia++
    }
    else if(cuentaPaciente[i].especialidad == "Pediatra"){
      resultado.pediatria++
    }
    else if (cuentaPaciente[i].especialidad == "Cardiólogo"){
      resultado.cardiologia++

    }
  }
return resultado
}

const pintarResultado = (resultado: NumeroPacientesPorEspecialidad, idElemento: string) => {
  const div = document.getElementById(idElemento);
    const parrafoCreado = crearParrafo(`Médico de Familia: ${resultado.medicoDeFamilia}, Pediatría: ${resultado.pediatria}, Cardiología: ${resultado.cardiologia}`)
    if (div instanceof HTMLDivElement) {
    div.appendChild(parrafoCreado)
    }
}

const cuentaPacientes = cuentaPacientesPorEspecialidad(pacientes)
pintarResultado(cuentaPacientes, 'especialidad')
