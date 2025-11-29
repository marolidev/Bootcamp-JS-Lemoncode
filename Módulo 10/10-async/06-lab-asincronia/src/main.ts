import { Personaje } from "./types";

const API_URL = "http://localhost:3000/personajes";

const form = document.getElementById("formBusqueda") as HTMLFormElement;
const input = document.getElementById("txtNombre") as HTMLInputElement;
const listado = document.getElementById("listado") as HTMLDivElement;
const infoBusqueda = document.getElementById("infoBusqueda") as HTMLParagraphElement;

//Leer personajes
const leerPersonajes = async (nombre?: string): Promise<Personaje[]> => {
  let url = API_URL;

  if (nombre && nombre.trim() !== "") {
    url += `?nombre_like=${nombre}`;
  }

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Error al obtener los personajes");
  }

  const data: Personaje[] = await response.json();
  return data;
};

//Pintar personajes en el DOM
const pintarPersonajes = (personajes: Personaje[]) => {
  listado.innerHTML = "";

  if (personajes.length === 0) {
    listado.innerHTML = "<p>No se encontraron personajes.</p>";
    return;
  }

  personajes.forEach((personaje) => {
    const imagenUrl = `http://localhost:3000/${personaje.imagen}`;

    const div = document.createElement("div");
    div.className = "card";

    div.innerHTML = `
      <img src="${imagenUrl}" alt="${personaje.nombre}" width="150" />
      <h3>${personaje.nombre}</h3>
      <p><strong>Apodo:</strong> ${personaje.apodo}</p>
      <p><strong>Especialidad:</strong> ${personaje.especialidad}</p>
      <p><strong>Habilidades:</strong> ${personaje.habilidades.join(", ")}</p>
    `;

    listado.appendChild(div);
  });
};

//Cargar al iniciar la página 
const cargarTodos = async () => {
  try {
    const personajes = await leerPersonajes();
    infoBusqueda.textContent = "Mostrando todos los personajes";
    pintarPersonajes(personajes);
  } catch (error) {
    listado.innerHTML = "<p>Error al cargar los personajes</p>";
  }
};

cargarTodos();

//Filtrar al enviar el formulario 
form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const texto = input.value;

  try {
    const personajes = await leerPersonajes(texto);
    infoBusqueda.textContent = `Personajes que contienen "${texto}"`;
    pintarPersonajes(personajes);
  } catch (error) {
    listado.innerHTML = "<p>Error en la búsqueda</p>";
  }
});
