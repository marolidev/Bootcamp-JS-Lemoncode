interface Reserva {
  tipoHabitacion: "standard" | "suite";
  pax: number;
  noches: number;
}

const reservas = [
  {
    tipoHabitacion: "standard",
    pax: 1,
    noches: 3,
  },
  {
    tipoHabitacion: "standard",
    pax: 1,
    noches: 4,
  },
  {
    tipoHabitacion: "suite",
    pax: 2,
    noches: 1,
  },
];

//Caso 1
class HotelCliente {
  reservas: Reserva[];
  iva: number = 0.21;

  constructor(reservas: Reserva[]) {
    this.reservas = reservas;
  }

  // 👉 Precio de UNA reserva
  calcularPrecioReserva(reserva: Reserva): number {
    let precioNoche = 0;

    // Precio base
    if (reserva.tipoHabitacion === "standard") {
      precioNoche = 100;
    } else {
      precioNoche = 150;
    }

    // Personas adicionales
    if (reserva.pax > 1) {
      precioNoche += (reserva.pax - 1) * 40;
    }

    return precioNoche * reserva.noches;
  }

  // 👉 Subtotal usando el método anterior
  calcularSubtotal(): number {
    let subtotal = 0;

    for (const reserva of this.reservas) {
      subtotal += this.calcularPrecioReserva(reserva);
    }

    return subtotal;
  }

  calcularTotal(): number {
    return this.calcularSubtotal() * (1 + this.iva);
  }

  //Mostrar cada reserva por separado
  mostrarDetalleReservas(): void {
    this.reservas.forEach((reserva, index) => {
      const precio = this.calcularPrecioReserva(reserva);
      console.log(
        `Reserva ${index + 1}: ${reserva.tipoHabitacion} → ${precio} €`
      );
    });
  }
}



const cliente: Reserva[] = [
  { tipoHabitacion: "standard", pax: 1, noches: 3 },
  { tipoHabitacion: "standard", pax: 2, noches: 4 },
  { tipoHabitacion: "suite", pax: 2, noches: 1 },
];


const hotel = new HotelCliente(cliente);

console.log("Caso 1: ")
hotel.mostrarDetalleReservas();
console.log("Subtotal:", hotel.calcularSubtotal());
console.log("Total:", hotel.calcularTotal());


//Caso 2
class HotelTourOperador extends HotelCliente {
  private descuento: number = 0.15;

  constructor(reservas: Reserva[]) {
    super(reservas);
  }

  calcularPrecioReserva(reserva: Reserva): number {
    const precioNoche = 100;
    const precioSinDescuento = precioNoche * reserva.noches;
    return precioSinDescuento * (1 - this.descuento);
  }
}

const tourOperador = new HotelTourOperador(cliente);

console.log("Caso 2: ")
tourOperador.mostrarDetalleReservas();
console.log("Subtotal Tour Operador:", tourOperador.calcularSubtotal());
console.log("Total Tour Operador:", tourOperador.calcularTotal());

//Desafío

//Clase base
type Precios = {
  standard: number;
  suite: number;
};

abstract class HotelBase {
  protected reservas: Reserva[];
  protected precios: Precios;
  protected iva: number = 0.21;

  constructor(reservas: Reserva[], precios: Precios) {
    this.reservas = reservas;
    this.precios = precios;
  }

  // Cada hijo debe implementar esto
  abstract calcularPrecioReserva(reserva: Reserva): number;

  mostrarDetalleReservas(): void {
    this.reservas.forEach((reserva, index) => {
      const precio = this.calcularPrecioReserva(reserva);
      console.log(
        `Reserva ${index + 1}: ${reserva.tipoHabitacion} → ${precio} €`
      );
    });
  }

  calcularSubtotal(): number {
    let subtotal = 0;

    for (const reserva of this.reservas) {
      subtotal += this.calcularPrecioReserva(reserva);
    }

    return subtotal;
  }

  calcularTotal(): number {
    return this.calcularSubtotal() * (1 + this.iva);
  }
}

//Cliente particular
class HotelClienteDesafio extends HotelBase {
  constructor(reservas: Reserva[]) {
    super(reservas, {
      standard: 100,
      suite: 150,
    });
  }

  calcularPrecioReserva(reserva: Reserva): number {
    let precioNoche = this.precios[reserva.tipoHabitacion];

    if (reserva.pax > 1) {
      precioNoche += (reserva.pax - 1) * 40;
    }

    return precioNoche * reserva.noches;
  }
}

//Touroperador
class HotelTourOperadorDesafio extends HotelBase {
  private descuento: number = 0.15;

  constructor(reservas: Reserva[]) {
    super(reservas, {
      standard: 100,
      suite: 100,
    });
  }

  calcularPrecioReserva(reserva: Reserva): number {
    const precioBase = this.precios[reserva.tipoHabitacion];
    const precioSinDescuento = precioBase * reserva.noches;
    return precioSinDescuento * (1 - this.descuento);
  }
}

const clienteDesaf = new HotelCliente(cliente);
console.log("Desafio: ")
clienteDesaf.mostrarDetalleReservas();
console.log("Subtotal cliente:", clienteDesaf.calcularSubtotal());
console.log("Total cliente:", clienteDesaf.calcularTotal());

const tourDesaf = new HotelTourOperador(cliente);
tourDesaf.mostrarDetalleReservas();
console.log("Subtotal tour:", tourDesaf.calcularSubtotal());
console.log("Total tour:", tourDesaf.calcularTotal());



//Adicional


interface ReservaConDesayuno extends Reserva {
  desayuno: boolean;
}

class HotelBaseDesayuno {
  reservas: ReservaConDesayuno[];
  precios: { standard: number; suite: number };
  iva: number = 0.21;

  constructor(
    reservas: ReservaConDesayuno[],
    precios: { standard: number; suite: number }
  ) {
    this.reservas = reservas;
    this.precios = precios;
  }

  calcularDesayuno(reserva: ReservaConDesayuno): number {
    if (reserva.desayuno) {
      return reserva.pax * 15 * reserva.noches;
    }
    return 0;
  }

  calcularPrecioReserva(reserva: ReservaConDesayuno): number {
    const precioBase = this.precios[reserva.tipoHabitacion];
    return precioBase * reserva.noches;
  }


  mostrarDetalleReservas(): void {
    this.reservas.forEach((reserva, index) => {
      const precio = this.calcularPrecioReserva(reserva);
      console.log(
        `Reserva ${index + 1}: ${reserva.tipoHabitacion} → ${precio} €`
      );
    });
  }

  calcularSubtotal(): number {
    let subtotal = 0;

    for (const reserva of this.reservas) {
      subtotal += this.calcularPrecioReserva(reserva);
    }

    return subtotal;
  }

  calcularTotal(): number {
    return this.calcularSubtotal() * (1 + this.iva);
  }
}

class HotelClienteDesayuno extends HotelBaseDesayuno {
  constructor(reservas: ReservaConDesayuno[]) {
    super(reservas, {
      standard: 100,
      suite: 150,
    });
  }

  calcularPrecioReserva(reserva: ReservaConDesayuno): number {
    let precioNoche = this.precios[reserva.tipoHabitacion];

    if (reserva.pax > 1) {
      precioNoche += (reserva.pax - 1) * 40;
    }

    const totalHabitacion = precioNoche * reserva.noches;
    return totalHabitacion + this.calcularDesayuno(reserva);
  }
}


class HotelTourOperadorDesayuno extends HotelBaseDesayuno {
  descuento: number = 0.15;

  constructor(reservas: ReservaConDesayuno[]) {
    super(reservas, {
      standard: 100,
      suite: 100,
    });
  }

  calcularPrecioReserva(reserva: ReservaConDesayuno): number {
    const precioBase = this.precios[reserva.tipoHabitacion];
    const totalHabitacion = precioBase * reserva.noches;
    const totalDesayuno = this.calcularDesayuno(reserva);

    return (totalHabitacion + totalDesayuno) * (1 - this.descuento);
  }
}


const reservasConDesayuno: ReservaConDesayuno[] = [
  {
    tipoHabitacion: "standard",
    desayuno: false,
    pax: 1,
    noches: 3,
  },
  {
    tipoHabitacion: "standard",
    desayuno: false,
    pax: 1,
    noches: 4,
  },
  {
    tipoHabitacion: "suite",
    desayuno: true,
    pax: 2,
    noches: 1,
  },
];

const clienteDesayuno = new HotelClienteDesayuno(reservasConDesayuno);
console.log("Tarifa cliente con desayuno: ")

clienteDesayuno.mostrarDetalleReservas();
console.log("Subtotal cliente:", clienteDesayuno.calcularSubtotal());
console.log("Total cliente:", clienteDesayuno.calcularTotal());

const tourDesayuno = new HotelTourOperadorDesayuno(reservasConDesayuno);
console.log("Tarifa touroperador con desayuno: ")

tourDesayuno.mostrarDetalleReservas();
console.log("Subtotal tour:", tourDesayuno.calcularSubtotal());
console.log("Total tour:", tourDesayuno.calcularTotal());
