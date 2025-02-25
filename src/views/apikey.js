
import { btnHome } from "../components/btnHome.js";
import { header } from "../components/header.js";
import { navigateTo } from "../router.js";
import { div_filtros } from "../components/DivFiltros.js";

export const apikey = () => {
  //DIV CONTENEDOR
  const divApikey = document.createElement("div");
  divApikey.setAttribute("id", "divApikey");

  const divApikeySecundario = document.createElement("div");
  divApikeySecundario.setAttribute("id", "divApikeySecundario");

  //IMAGEN DE FONDO
  const imgFondoApikey = document.createElement("img");
  imgFondoApikey.setAttribute("id", "imgFondoApikey");
  imgFondoApikey.src =
    "https://raw.githubusercontent.com/DanielaPosadas/DEV012-dataverse/main/tarjetas%20MK-1.jpg";

  //DIV INPUT
  const parrafoApikey = document.createElement("p");
  parrafoApikey.setAttribute("id", "parrafoApikey");
  parrafoApikey.textContent = "Ingresa una clave";

  //DIV INPUT Y BOTONES
  const divInput = document.createElement("div");
  divInput.setAttribute("id", "divInput");

  //DIV BOTONES
  const divBotones = document.createElement("div");
  divBotones.setAttribute("id", "divBotones");

  //INPUT PARA INGRESAR API
  const inputApikey = document.createElement("input");
  inputApikey.setAttribute("id", "inputApikey");
  inputApikey.setAttribute("type", "password");
  inputApikey.setAttribute("placeholder", "Escribe aquí...");

  //BOTONES
  const btnApikeyEnviar = document.createElement("button");
  btnApikeyEnviar.setAttribute("id", "btnApikeyEnviar");
  btnApikeyEnviar.textContent = "Enviar";
  const btnApikeyLimpiar = document.createElement("button");
  btnApikeyLimpiar.setAttribute("id", "btnApikeyLimpiar");
  btnApikeyLimpiar.textContent = "Limpiar";
  divBotones.appendChild(btnApikeyEnviar);
  divBotones.appendChild(btnApikeyLimpiar);

  divApikey.appendChild(btnHome());
  divApikeySecundario.appendChild(imgFondoApikey);
  divInput.appendChild(parrafoApikey);
  divInput.appendChild(inputApikey);
  divInput.appendChild(divBotones);
  divApikeySecundario.appendChild(divInput);

  divApikey.appendChild(header());
  divApikey.appendChild(div_filtros());

  divApikey.appendChild(divApikeySecundario);

  return divApikey;
};
export const valorInput = () => {
  const divContenedorInvisible = document.createElement("div");
  divContenedorInvisible.setAttribute("id", "divInvisible");
  divContenedorInvisible.appendChild(apikey());
  const input = divContenedorInvisible.querySelector("#inputApikey");
  input.addEventListener("input", guardarValor);

  function guardarValor() {
    const claveInput = input.value.trim();
    localStorage.setItem("apikey", claveInput);
  }
  const btnApiEnviar = divContenedorInvisible.querySelector("#btnApikeyEnviar");
  btnApiEnviar.addEventListener("click", enviar);
  function enviar() {
    if (input.value.length !== Number("51") && /[a-zA-Z0-9]/g) {
      alert("Error. Ingresa una clave válida");
    } else {
      navigateTo("/");
    }
  }

  const btnLApiLimpiar =
    divContenedorInvisible.querySelector("#btnApikeyLimpiar");
  btnLApiLimpiar.addEventListener("click", limpiar);
  function limpiar() {
    localStorage.clear("apikey");
  }
  return divContenedorInvisible;
};
