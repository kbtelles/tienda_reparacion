
export function descripcion(data, index) {
    return `
      <div class="caja_general">
        <section class="caja_1">
          <img class="img" src="${data[index].img}" alt="${data[index].titulo}">
        </section>
  
        <section class="caja_2">
          <h1 class="titu">${data[index].titulo}</h1>
          <h2 class="descrip">${data[index].descripcion}</h2>
          <ul class="herram">Herramientas: ${data[index].herramientas.map((herramienta) => `<li>${herramienta}</li>`).join("")}</ul>
          <ul class="herram">Pasos: ${data[index].pasos.map((pasos) => `<li>${pasos}</li>`).join("")}</ul>
        </section>
      </div>
    `;
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