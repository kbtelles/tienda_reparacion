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
        
          <section class="caja_bot">
          <button class="one"> Comprar 🛒 </button>
          ${
            data[producto].estado
              ? '<button class="two"> Hazlo tú 🫵</button>'
              : ''
          }
        </section>



          <span class="precio">Q100.00</span>

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