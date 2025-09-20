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

// Helpers
const crearParrafo = (mensaje: string): HTMLParagraphElement => {
  const p = document.createElement("p");
  p.textContent = mensaje;
  return p;
};

const mostrarPantalla = (pacientes: Pacientes[], idElemento: string) => {
  const div = document.getElementById(idElemento);
  pacientes.forEach((paciente) => {
    const parrafoCreado = crearParrafo(
      `ID- ${paciente.id} - ${paciente.nombre} ${paciente.apellidos}`
    );
    if (div instanceof HTMLDivElement) {
      div.appendChild(parrafoCreado);
    }
  });
};

// a) Pacientes asignados a pediatría
const obtenPacientesAsignadosAPediatria = (pacientes: Pacientes[]): Pacientes[] => {
 return pacientes.filter(p => p.especialidad === "Pediatra");
}


const pacientesPorPediatria = obtenPacientesAsignadosAPediatria(pacientes);
mostrarPantalla(pacientesPorPediatria, "lista-pacientes");

// b) Pacientes pediatría menores de 10 años
const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = (pacientes: Pacientes[]): Pacientes[] =>
  pacientes.filter((p) => p.especialidad === "Pediatra" && p.edad < 10);

const pacientesMenorDiez = obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios(pacientes);
mostrarPantalla(pacientesMenorDiez, "lista-edad");

// Ritmo cardiaco > 100 y temperatura > 39
const mostrarPantalla1 = (estaActivo: boolean, idElemento: string) => {
  const div = document.getElementById(idElemento);
  const parrafoCreado = estaActivo
    ? crearParrafo("Tenemos que activar el protocolo")
    : crearParrafo("Tenemos que desactivar el protocolo");
  if (div instanceof HTMLDivElement) {
    div.appendChild(parrafoCreado);
  }
};

const activarProtocoloUrgencia = (pacientes: Pacientes[]): boolean =>
  pacientes.some((p) => p.frecuenciaCardiaca > 100 && p.temperatura > 39);

const estaActivo = activarProtocoloUrgencia(pacientes);
mostrarPantalla1(estaActivo, "urgencias");

// Reasignar pediatría
const reasignaPacientesAMedicoFamilia = (pacientes: Pacientes[]): Pacientes[] =>
  pacientes
    .filter((p) => p.especialidad === "Pediatra")
    .map((p) => ({ ...p, especialidad: "Medico de familia" as Especialidad }));

const reasignarPacientes = reasignaPacientesAMedicoFamilia(pacientes);
mostrarPantalla(reasignarPacientes, "medico-familia");

// Mandar pediatra a casa
const mostrarPantalla2 = (activarPediatria: boolean, idElemento: string) => {
  const div = document.getElementById(idElemento);
  const parrafoCreado = activarPediatria
    ? crearParrafo("Hay pacientes asignados a pediatría")
    : crearParrafo("No hay pacientes asignados a pediatría");
  if (div instanceof HTMLDivElement) {
    div.appendChild(parrafoCreado);
  }
};

const HayPacientesDePediatria = (pacientes: Pacientes[]): boolean =>
  pacientes.some((p) => p.especialidad === "Pediatra");

const activarPediatria = HayPacientesDePediatria(pacientes);
mostrarPantalla2(activarPediatria, "pediatra");

// Opcional: contar pacientes por especialidad
interface NumeroPacientesPorEspecialidad {
  medicoDeFamilia: number;
  pediatria: number;
  cardiologia: number;
}

const cuentaPacientesPorEspecialidad = (pacientes: Pacientes[]): NumeroPacientesPorEspecialidad =>
  pacientes.reduce(
    (acc, p) => {
      if (p.especialidad === "Medico de familia") acc.medicoDeFamilia++;
      else if (p.especialidad === "Pediatra") acc.pediatria++;
      else if (p.especialidad === "Cardiólogo") acc.cardiologia++;
      return acc;
    },
    { medicoDeFamilia: 0, pediatria: 0, cardiologia: 0 }
  );

const pintarResultado = (resultado: NumeroPacientesPorEspecialidad, idElemento: string) => {
  const div = document.getElementById(idElemento);
  const parrafoCreado = crearParrafo(
    `Médico de Familia: ${resultado.medicoDeFamilia}, Pediatría: ${resultado.pediatria}, Cardiología: ${resultado.cardiologia}`
  );
  if (div instanceof HTMLDivElement) {
    div.appendChild(parrafoCreado);
  }
};

const cuentaPacientes = cuentaPacientesPorEspecialidad(pacientes);
pintarResultado(cuentaPacientes, "especialidad");
