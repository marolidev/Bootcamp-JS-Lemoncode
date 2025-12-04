import { Personaje } from "./types";

export const pintarPersonajes = (
  personajes: Personaje[],
  contenedor: HTMLDivElement,
  info: HTMLParagraphElement,
  textoBusqueda?: string
): void => {

  contenedor.innerHTML = "";

  if (personajes.length === 0) {
    contenedor.innerHTML = "<p>No hay resultados</p>";
    return;
  }

  if (textoBusqueda !== undefined && textoBusqueda !== "") {
    info.textContent = `Resultados para: "${textoBusqueda}"`;
  } else {
    info.textContent = "Mostrando todos los personajes";
  }

  personajes.forEach((personaje) => {
    const imagenUrl = `http://localhost:3000/${personaje.imagen}`;

    const div = document.createElement("div");

    div.innerHTML = `
      <img src="${imagenUrl}" width="150" />
      <h3>${personaje.nombre}</h3>
      <p><strong>Apodo:</strong> ${personaje.apodo}</p>
      <p><strong>Especialidad:</strong> ${personaje.especialidad}</p>
      <p><strong>Habilidades:</strong> ${personaje.habilidades.join(", ")}</p>
    `;

    contenedor.appendChild(div);
  });
};
