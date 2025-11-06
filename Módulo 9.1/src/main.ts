//Interfaz para cada producto

type TipoIVA =
  | "general"
  | "reducido"
  | "superreducidoA"
  | "superreducidoB"
  | "superreducidoC"
  | "sinIva";

interface Producto {
  nombre: string;
  precio: number;
  tipoIva: TipoIVA;
}

//Interfaz línea de ticket

export interface LineaTicket {
  producto: Producto;
  cantidad: number;
}

const productos: LineaTicket[] = [
  {
    producto: {
      nombre: "Legumbres",
      precio: 2,
      tipoIva: "general",
    },
    cantidad: 2,
  },
  {
    producto: {
      nombre: "Perfume",
      precio: 20,
      tipoIva: "general",
    },
    cantidad: 3,
  },
  {
    producto: {
      nombre: "Leche",
      precio: 1,
      tipoIva: "superreducidoC",
    },
    cantidad: 6,
  },
  {
    producto: {
      nombre: "Lasaña",
      precio: 5,
      tipoIva: "superreducidoA",
    },
    cantidad: 1,
  },
];

export interface ResultadoLineaTicket {
  nombre: string;
  cantidad: number;
  precioSinIva: number;
  tipoIva: TipoIVA;
  precioConIva: number;
}

interface ResultadoTotalTicket {
  totalSinIva: number;
  totalConIva: number;
  totalIva: number;
}

interface TotalPorTipoIva {
  tipoIva: TipoIVA;
  cuantia : number;
}

interface TicketFinal {
  lineas: ResultadoLineaTicket[];
  total: ResultadoTotalTicket;
  desgloseIva: TotalPorTipoIva[];
}
//Redondear a 2 decimales
const redondear = (valor: number) => Number(valor.toFixed(2));

// Porcentaje de IVA
export const calcularPorcentajeIva = (tipoIva: TipoIVA): number => {
  const porcentajes: Record<TipoIVA, number> = {
    general: 21,
    reducido: 10,
    superreducidoA: 5,
    superreducidoB: 4,
    superreducidoC: 0,
    sinIva: 0,
  };
  return porcentajes[tipoIva];
};

//Calcular totales generales
export const calcularTotalesGenerales = (lineas: ResultadoLineaTicket[]): ResultadoTotalTicket => {
  let totalSinIva = 0;
  let totalConIva = 0;

  for (const linea of lineas) {
    totalSinIva += linea.precioSinIva;
    totalConIva += linea.precioConIva;
  }

  return {
    totalSinIva: redondear(totalSinIva),
    totalConIva: redondear(totalConIva),
    totalIva: redondear(totalConIva - totalSinIva),
  };
};

//Calcular desglose de IVA por tipo
export const calcularDesgloseIva = (lineas: ResultadoLineaTicket[]): TotalPorTipoIva[] => {
  const desgloseMap = new Map<TipoIVA, number>();

  for (const linea of lineas) {
    const iva = calcularPorcentajeIva(linea.tipoIva);
    const ivaLinea = (linea.precioSinIva * iva) / 100;
    desgloseMap.set(linea.tipoIva, (desgloseMap.get(linea.tipoIva) || 0) + ivaLinea);
  }

  return Array.from(desgloseMap.entries()).map(([tipoIva, cuantia]) => ({
    tipoIva,
    cuantia: redondear(cuantia),
  }));
};

//Función principal
export const calculaTicket = (lineasTicket: LineaTicket[]): TicketFinal => {
  const lineas: ResultadoLineaTicket[] = [];

  for (let i = 0; i < lineasTicket.length; i++) {
    const { producto, cantidad } = lineasTicket[i];
    const iva = calcularPorcentajeIva(producto.tipoIva);
    const precioSinIva = producto.precio * cantidad;
    const precioConIva = precioSinIva * (1 + iva / 100);

    lineas.push({
      nombre: producto.nombre,
      cantidad,
      precioSinIva: redondear(precioSinIva),
      tipoIva: producto.tipoIva,
      precioConIva: redondear(precioConIva),
    });
  }

  const total = calcularTotalesGenerales(lineas);
  const desgloseIva = calcularDesgloseIva(lineas);

  return { lineas, total, desgloseIva };
};

console.log(calculaTicket(productos))

