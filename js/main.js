import { data } from "./data.js";
import { caja_descripcion } from "./descripcion_producto.js";

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


//Ver detalles del producto.
let productos = document.querySelectorAll(".item")


function saludar(){
   let caja_descripcion_DOM = document.querySelector(".descripcion_del_producto")
    caja_descripcion_DOM.innerHTML=caja_descripcion;
    console.log(caja_descripcion_DOM) 

}

productos.forEach((cada_elemento) =>{
   /* console.log(cada_elemento)*/

    cada_elemento.addEventListener("click",saludar)
})
