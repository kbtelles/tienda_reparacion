import { data } from "./data.js";
import { descripcion } from "./descripcion_producto.js";

let main_DOM = document.querySelector("#main");

data.forEach((cada_item) => {
  let item = document.createElement("div");
  item.className = "item";

  item.innerHTML = `
    <div class="caja_img">
        <img src="${cada_item.img}"/>
    </div>
    <h2>${cada_item.titulo}</h2>
    <p>${cada_item.descripcion}</p>
    <span>Q100.00</span>
  `;
  main_DOM.appendChild(item);
});

// Ver detalles del producto.
let productos = document.querySelectorAll(".item");

function mostrarDescripcion(event) {
  let caja_descripcion_DOM = document.querySelector(".descripcion_del_producto");

  let index = Array.from(productos).indexOf(event.currentTarget);

  let productDescriptionHTML = descripcion(data, index);
  caja_descripcion_DOM.innerHTML = productDescriptionHTML;
}

productos.forEach((cada_elemento) => {
  cada_elemento.addEventListener("click", mostrarDescripcion);
});

