import { data } from "./data.js";

export function descripcion(id) {

  let producto = id - 1;

  let contenido=
     `
      <div class="caja_general">
        <section class="caja_1">
          <img class="img" src="${data[producto].img}" alt="${data[producto].titulo}">
        </section>
  
        <section class="caja_2">
          <h1 class="titu">${data[producto].titulo}</h1>
          <h2 class="descrip">${data[producto].descripcion}</h2>
          <span class="precio">Q100.00</span>
          <ul class="herram">Herramientas: ${data[producto].herramientas.map((herramienta) => `<li>${herramienta}</li>`).join("")}</ul>
          <ul class="herram">Pasos: ${data[producto].pasos.map((pasos) => `<li>${pasos}</li>`).join("")}</ul>
        </section>
      </div>
    `;

    return contenido;
  }
  



/*<div class="caja_general">
<section class="caja_1">
    <img src="${producto.img}" alt="">
</section>

<section class="caja_2">
    <h1 class="titu">${producto.titulo}</h1>
    <h2 class="descrip">${producto.descripcion}</h2>
    <p class="herram">${producto.herramientas.join(', ')}</p>
</section>
</div>*/