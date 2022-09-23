const parrafos = document.querySelectorAll(".parrafo");
const secciones = document.querySelectorAll(".seccion");
const recycle_bin = document.getElementById("recycle-bin");
const message = document.querySelector(".message");

parrafos.forEach((parrafo) => {
  parrafo.addEventListener("dragstart", (event) => {
    parrafo.classList.add("dragging");

    event.dataTransfer.setData("id", parrafo.id);
    const elemento_fantasma = document.querySelector(".imagen-fantasma");
    event.dataTransfer.setDragImage(elemento_fantasma, 0, 0);
  });

  parrafo.addEventListener("dragend", () => {
    parrafo.classList.remove("dragging");
  });
});

secciones.forEach((seccion) => {
  seccion.addEventListener("dragover", (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "copy";
  });

  seccion.addEventListener("drop", (event) => {
    const id_parrafo = event.dataTransfer.getData("id");
    const parrafo = document.getElementById(id_parrafo);
    seccion.appendChild(parrafo);
  });
});

recycle_bin.addEventListener("dragover", (event) => {
  event.preventDefault();
  event.target.classList.add("hover");
});
recycle_bin.addEventListener("dragleave", (event) => {
  event.target.classList.remove("hover");
  const parrafo = document.getElementById("parrafo-5");
});
recycle_bin.addEventListener("drop", (event) => {
  event.target.classList.remove("hover");
  const id_parrafo = event.dataTransfer.getData("id");
  const parrafo = document.getElementById(id_parrafo);

  parrafo.parentNode.removeChild(parrafo);  

});

