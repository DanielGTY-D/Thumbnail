import { menu, menuLateral, listadoImagenes, lastItem } from "../selectores.js";

class UI {
  openSideBar() {
    menuLateral.classList.remove("rigth-0");
    menuLateral.classList.add("slide-to-left");
  }
  closeSlideBar(e) {
    const btn = e.target;

    menuLateral.classList.remove("slide-to-left");
    menuLateral.classList.add("slide-to-rigth");
  }

  mostrarGaleria(albumsAleatorios, newId) {
    albumsAleatorios.forEach((album) => {
      const {
        urls: { small }
      } = album;

      const li = document.createElement("li");
      li.classList.add("item-image");
      const img = document.createElement("img");
      img.classList.add("image");
      img.setAttribute("src", `${small}`);
      img.setAttribute("loading", `lazy`);

      li.appendChild(img);
      listadoImagenes.appendChild(li);
    });

    const last = document.querySelector(".listado-galeria").lastChild;
    last.dataset.item = "last";
    last.setAttribute("id", "1");
    if (newId) {
      last.setAttribute("id", `${newId}`);
    }
  }
}

export default UI;
