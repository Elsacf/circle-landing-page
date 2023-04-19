import hamburgerMenu from "./menu_hamburguesa.js";
import openModal from "./validacion_formulario_suscriptiones.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu(".panel-btn", ".panel", ".panel-menu a");
  openModal(".form-button", ".modal", ".modal_close");
});
