
import { obtenerPersonajes } from "./api";
import { pintarPersonajes } from "./ui";
import { esFormulario, esInput, esValido } from "./utils";
import "./estilos.css";

const form = document.getElementById("formBusqueda");
const input = document.getElementById("txtNombre");
const listado = document.getElementById("listado");
const info = document.getElementById("infoBusqueda");

if (
  esFormulario(form) &&
  esInput(input) &&
  esValido(listado) &&
  listado instanceof HTMLDivElement &&
  esValido(info) &&
  info instanceof HTMLParagraphElement
) {

  // CARGAR TODOS AL INICIO
  const cargarTodo = async () => {
    try {
      const personajes = await obtenerPersonajes();
      pintarPersonajes(personajes, listado, info);
    } catch (error) {
      listado.innerHTML = "<p>Error al cargar los datos</p>";
    }
  };

  cargarTodo();

  // FILTRAR
  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const texto = input.value;

    try {
      const personajes = await obtenerPersonajes(texto);
      pintarPersonajes(personajes, listado, info, texto);
    } catch (error) {
      listado.innerHTML = "<p>Error en la búsqueda</p>";
    }
  });
}
