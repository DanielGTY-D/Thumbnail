import { api } from "../../services/api.js";
import { menu, btnCerrar, listadoImagenes } from "./selectores.js";
import UI from "./clases/UI.js";
import Galeria from "./clases/galeria.js";
//Crear la instancia
const ui = new UI();
const galeria = new Galeria();

eventListeners();
function eventListeners() {
  menu.addEventListener("click", () => {
    ui.openSideBar();
  });
  btnCerrar.addEventListener("click", (e) => {
    ui.closeSlideBar(e);
  });
}

galeria.nuevosAlbums();
