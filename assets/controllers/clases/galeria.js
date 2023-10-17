import { api } from "../../../services/api.js";
import { listadoImagenes, lastItem } from "../selectores.js";
import UI from "./UI.js";

//instanciar la clase
const ui = new UI();

let img = await api();

class Galeria {
  constructor() {
    this.albums = new Set();
  }

  async nuevosAlbums(newId) {
    // const page2 = await api("2");
    // const page3 = await api("3");

    for (let album of img) {
      this.albums.add(album);
    }
    // for (let album of page2) {
    //   this.albums.add(album);
    // }
    // for (let album of page3) {
    //   this.albums.add(album);
    // }
    ui.mostrarGaleria(this.albums, newId);
    this.pedirNuevasImagenes();
  }

  pedirNuevasImagenes() {
    const observer = new IntersectionObserver(async (entries) => {
      if (entries[0].isIntersecting) {
        const lastItem = document.querySelector("[data-item='last']");
        lastItem.dataset.item = "none";
        const newPage = Number(lastItem.id) + 1;
        img = await api(newPage);
        this.albums.clear();
        console.log(newPage);
        this.nuevosAlbums(newPage);
      }
    });
    observer.observe(document.querySelector("[data-item='last']"));
  }
}

export default Galeria;
