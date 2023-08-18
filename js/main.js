// main.js
import { data } from "./data.js";
import { descripcion } from "./descripcion_producto.js";

let main_DOM = document.querySelector("#main");

data.forEach((cada_item) => {
  let item = document.createElement("div");
  item.className = "item";
  item.id = `${cada_item.id}`;

  item.innerHTML = `
    <div class="caja_img">
        <img src="${cada_item.img}"/>
    </div>
    <h2>${cada_item.titulo}</h2>
    <span>${cada_item.precio}</span>
  `;
  main_DOM.appendChild(item);
});

// Ver detalles del producto.
let productos = document.querySelectorAll(".item");

function mostrarDescripcion() {
  let caja_descripcion_DOM = document.querySelector(".descripcion_del_producto");
  caja_descripcion_DOM.innerHTML = descripcion(this.id);

  let main = document.querySelector("#main");
  main.style.display = "none"; // Oculta el contenido principal

  let verHerramientasPasosBtn = document.querySelector(".two");
  if (verHerramientasPasosBtn) {
    verHerramientasPasosBtn.addEventListener("click", mostrarHerramientasPasos.bind(this, this.id, caja_descripcion_DOM));
  }
}

function mostrarHerramientasPasos(id, caja_descripcion_DOM) {
  let producto = data[id - 1];

  let herramientasHTML = `
  <section class="caja_2">
    <h2 class="titu">${producto.titulo}</h2>
    <div class="caja_img">
      <img class="img" src="${producto.img}" />
    </div>
    <h2>Herramientas necesarias:</h2>
    <ul class="descrip">
      ${producto.herramientas.map(herramienta => `<li>${herramienta}</li>`).join("")}
    </ul>
  `;

  let pasosHTML = `
    <h2>Pasos a seguir:</h2>
    <ol class="descrip">
      ${producto.pasos.map(paso => `<li>${paso}</li>`).join("")}
    </ol>
    <button class="ver-video">Haz click para visualizar el video</button>
    </section>
  `;

  caja_descripcion_DOM.innerHTML = herramientasHTML + pasosHTML;

  let verVideoBtn = caja_descripcion_DOM.querySelector(".ver-video");
  verVideoBtn.addEventListener("click", () => {
    window.location.href = producto.link;
  });
}


productos.forEach((cada_elemento) => {
  cada_elemento.addEventListener("click", mostrarDescripcion);
});
