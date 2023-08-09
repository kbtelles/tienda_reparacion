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
    <p>${cada_item.descripcion}</p>
    <span>Q100.00</span>
  `;
  main_DOM.appendChild(item);
});

// Ver detalles del producto.
let productos = document.querySelectorAll(".item");

function mostrarDescripcion() {
  let caja_descripcion_DOM = document.querySelector(".descripcion_del_producto");


  caja_descripcion_DOM.innerHTML = descripcion(this.id);
  console.log(this.id)

  let main = document.querySelector("#main");
  main.classList.add("ocultar");
}

productos.forEach((cada_elemento) => {
  cada_elemento.addEventListener("click", mostrarDescripcion);

});

