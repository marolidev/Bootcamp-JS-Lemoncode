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

const obtenPacientesAsignadosAPediatria = (pacientes: Pacientes[]): Pacientes[] => {
   const div = document.getElementById("lista-pacientes");

  if (div instanceof HTMLDivElement){
   
   for (let i: number = 0; i < pacientes.length; i++) {
   if(pacientes[i].especialidad == "Pediatra"){
      const p = document.createElement("p")
      p.textContent = `ID- ${pacientes[i].id} - ${pacientes[i].nombre} ${pacientes[i].apellidos}`
      div.appendChild(p)
         }
      }
  }
 
  return pacientes
};
obtenPacientesAsignadosAPediatria(pacientes)

//b) Pacientes asignados a pediatría y con edad inferior a 10 años

const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = (pacientes: Pacientes[]): Pacientes[] => {
  const div = document.getElementById("lista-edad");

  if (div instanceof HTMLDivElement){

    for (let i: number = 0; i <pacientes.length; i++) {
    if (pacientes[i].especialidad == "Pediatra" && pacientes[i].edad < 10){
        const p = document.createElement("p")
        p.textContent = `ID ${pacientes[i].id} - ${pacientes[i].nombre} ${pacientes[i].apellidos}`
       div.appendChild(p)
      }

  }
}
   return pacientes
};
obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios(pacientes)

//Ritmo cardiaco > 100 y temperatura > 39
const activarProtocoloUrgencia = (pacientes: Pacientes[]): boolean => {
  const div = document.getElementById("urgencias")
  let activarProtocolo = false;
  if (div instanceof HTMLDivElement){

  for(let i: number = 0; i < pacientes.length; i++){
      if(pacientes[i].frecuenciaCardiaca > 100 && pacientes[i].temperatura > 39){ 
      activarProtocolo = true;}
      else {activarProtocolo = false}

      const protocolo = document.createElement('p')
      protocolo.textContent = `ID ${pacientes[i].id} - ${activarProtocolo}`
      div.appendChild(protocolo)
  }

}
  return activarProtocolo;
};
activarProtocoloUrgencia(pacientes)

//Reasignar pediatría

const reasignaPacientesAMedicoFamilia = (
  pacientes: Pacientes[]): Pacientes[] => {
    const div = document.getElementById("medico-familia")
    if (div instanceof HTMLDivElement) {
    for(let i:number = 0; i< pacientes.length; i++){
    if(pacientes[i].especialidad === "Pediatra"){
      pacientes[i].especialidad = "Medico de familia"
    }
    const medico = document.createElement("p")
    medico.textContent = `${pacientes[i].id} - ${pacientes[i].nombre} ${pacientes[i].apellidos}`
    div.appendChild(medico)
  }
    }

  return pacientes
};
reasignaPacientesAMedicoFamilia(pacientes)

//Mandar pediatra a casa
const HayPacientesDePediatria = (pacientes: Pacientes[]): boolean => {
  const div = document.getElementById("pediatra")
  let pacientesPediatria = false;
  if (div instanceof HTMLDivElement){
    const pediatra = document.createElement("p")
    for(let i: number = 0; i< pacientes.length; i++){
      if(pacientes[i].especialidad == "Pediatra"){
        pacientesPediatria = true
        pediatra.textContent = `${pacientes[i].id} - ${pacientes[i].nombre} ${pacientes[i].apellidos}`
        div.appendChild(pediatra)
      }else{pediatra.textContent = "No hay pacientes en pediatría"
        div.appendChild(pediatra)
      }
    }

  }
  return pacientesPediatria
};
HayPacientesDePediatria(pacientes)

//Opcional
interface NumeroPacientesPorEspecialidad {
  medicoDeFamilia: number;
  pediatria: number;
  cardiologia: number;
}

const cuentaPacientesPorEspecialidad = (pacientes: Pacientes[]): NumeroPacientesPorEspecialidad => {
  const resultado: NumeroPacientesPorEspecialidad = {
    medicoDeFamilia: 0,
    pediatria: 0,
    cardiologia: 0
  }
  const div = document.getElementById("especialidad")

  if(div instanceof HTMLDivElement){
    const p = document.createElement("p")
    for(let i: number = 0; i < pacientes.length; i++){
    if(pacientes[i].especialidad == "Medico de familia"){
      resultado.medicoDeFamilia++;}
    else if(pacientes[i].especialidad == "Pediatra"){
      resultado.pediatria++; }
    else if(pacientes[i].especialidad == "Cardiólogo"){
      resultado.cardiologia++}
    } 
    p.textContent = `Médico de Familia: ${resultado.medicoDeFamilia}, Pediatría: ${resultado.pediatria}, Cardiología: ${resultado.cardiologia}`
    div.appendChild(p)
  }
  
  return resultado
};

cuentaPacientesPorEspecialidad(pacientes)