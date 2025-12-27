import * as ibantools from "ibantools";

const iban = "ES2514650120381748031872";

// ES66 2100 0418 401234567891

const normalizeIban = (iban: string): string =>
  iban.replace(/[\s-]/g, "").toUpperCase();
console.log(normalizeIban(iban))

//Formato IBAN España: 24 caracteres
const spanishIbanRegex = /^ES\d{22}$/;

const isWellFormedIban = (iban: string): boolean =>
  spanishIbanRegex.test(normalizeIban(iban));


const IbanValido = (iban:string):boolean =>
  ibantools.isValidIBAN(normalizeIban(iban))

interface IbanInfo {
  banco: string;
  oficina: string;
  digitoControl: string;
  cuenta: string;
}

const extractIbanInfo = (iban: string): IbanInfo => {
  const clean = normalizeIban(iban);

  return {
    banco: clean.slice(4, 8),
    oficina: clean.slice(8, 12),
    digitoControl: clean.slice(12, 14),
    cuenta: clean.slice(14),
  };

};
const banks: Record<string, string> = {
  "2080": "Abanca Corporación Bancaria",
  "0061": "Banca March",
  "0188": "Banco Alcalá",
  "0182": "BBVA",
  "0130": "Banco Caixa Geral",
  "0234": "Banco Caminos",
  "2105": "Banco Castilla-La Mancha",
  "0081": "Banco de Sabadell",
  "0049": "Banco Santander",
  "2038": "Bankia",
  "0128": "Bankinter",
  "2100": "Caixabank",
  "1465": "ING Bank NV",
  "0073": "Open Bank",
  "2103": "Unicaja Banco",
  // puedes añadir el resto
};

const getBankName = (bankCode: string): string =>
  banks[bankCode] ?? "Banco desconocido";



if (!isWellFormedIban(iban)) {
  console.log("IBAN mal formado");
} else if (!IbanValido(iban)) {
  console.log("IBAN no válido");
} else {
  const info = extractIbanInfo(iban);
  console.log("Banco:", getBankName(info.banco));
  console.log("Oficina:", info.oficina);
  console.log("Dígito control:", info.digitoControl);
  console.log("Cuenta:", info.cuenta);
}

//Apartado B: Obtener regex de imágenes

const imgRegex = /<img[^>]+src=["']([^"']+)["'][^>]*>/gi;

const extractImageUrls = (html: string): string[] => {
  const urls: string[] = [];
  let match: RegExpExecArray | null;

  while ((match = imgRegex.exec(html)) !== null) {
    urls.push(match[1]);
  }

  return urls;
};


const textarea = document.getElementById("html-input") as HTMLTextAreaElement;
const button = document.getElementById("extract-btn") as HTMLButtonElement;
const result = document.getElementById("result") as HTMLDivElement;

if(textarea !== undefined && textarea !== null){
button.addEventListener("click", () => {
  const htmlContent = textarea.value;

  const imageUrls = extractImageUrls(htmlContent);

  result.innerHTML = "";

   imageUrls.forEach(url => {
    const p = document.createElement("p");
    p.textContent = url;
    result.appendChild(p);
  });
});
}
