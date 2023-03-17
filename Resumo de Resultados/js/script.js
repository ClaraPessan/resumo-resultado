const todasCategorias = document.querySelector(".todas-categorias");

fetch("data.json")
  .then(response => response.json())
  .then(data => {
    data.forEach(item => {
      const card = document.createElement("div");
      card.classList.add("card");

      const categorias = document.createElement("div");
      categorias.classList.add("categorias");

      const iconeCategoria = document.createElement("img");
      iconeCategoria.classList.add("icone-categoria");
      iconeCategoria.src = item.icon;

      const tituloCategoria = document.createElement("div")
      tituloCategoria.classList.add("titulo-categoria")
      tituloCategoria.textContent = item.category

      if(item.category === "Reaction") {
        tituloCategoria.classList.add("reaction")
        card.classList.add("reaction")
      }
      if(item.category === "Memory") {
        tituloCategoria.classList.add("memory")
        card.classList.add("memory")
      }
      if(item.category === "Verbal") {
        tituloCategoria.classList.add("verbal")
        card.classList.add("verbal")
      }
      if(item.category === "Visual") {
        tituloCategoria.classList.add("visual")
        card.classList.add("visual")
      }

      const resultados = document.createElement("div")
      resultados.classList.add("resultados")

      const resultadoCategoria = document.createElement("div");
      resultadoCategoria.classList.add("resultado-categoria")
      resultadoCategoria.textContent = item.score

      const valorTotal = document.createElement("div")
      valorTotal.classList.add("valor-total")
      valorTotal.textContent = " / 100"

      categorias.appendChild(iconeCategoria)
      categorias.appendChild(tituloCategoria)
      categorias.appendChild(resultados)
      resultados.appendChild(resultadoCategoria)
      resultados.appendChild(valorTotal)

      card.appendChild(categorias)
      card.appendChild(resultados)

      todasCategorias.appendChild(card);

    });
  });
