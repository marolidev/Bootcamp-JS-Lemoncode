export const esValido = (elemento: unknown): boolean => {
  return elemento !== null && elemento !== undefined;
};

export const esInput = (elemento: Element | null): elemento is HTMLInputElement => {
  return elemento instanceof HTMLInputElement;
};

export const esFormulario = (elemento: Element | null): elemento is HTMLFormElement => {
  return elemento instanceof HTMLFormElement;
};
