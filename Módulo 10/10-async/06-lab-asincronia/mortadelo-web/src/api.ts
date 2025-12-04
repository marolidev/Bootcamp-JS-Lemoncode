import axios from "axios";
import { Personaje } from "./types";

const API_URL = "http://localhost:3000/personajes";

export const obtenerPersonajes = async (nombre?: string): Promise<Personaje[]> => {
  let url = API_URL;

  if (nombre !== undefined && nombre !== null && nombre.trim() !== "") {
    url += `?nombre_like=${nombre}`;
  }

  const response = await axios.get<Personaje[]>(url);
  return response.data;
};
