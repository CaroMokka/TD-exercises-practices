$(() => {
  let ingredientes = [
    "Carne",
    "Pollo",
    "Tocino",
    "Mozzarella",
    "Champiñon",
    "Cebolla",
    "Piña",
    "Pimenton",
  ];

  const mostrarListaIngredientes = () => {
    for (const item of ingredientes) {
      $("#ingredientes").append(`
        <div class="d-flex" >
            <input class="form-check-input me-2 check-ingrediente" type="checkbox" value=${item} id="flexCheckDefault"></input>
            <label for="flexCheckDefault" class="form-label d-flex">${item}</label>
        </div>
        `);
    }
  };
  mostrarListaIngredientes();

  let seleccionados = [];

  const resumenDeCompra = (totalValorExtra) => {
    let displayValoresCompra = $("#valorExtra");
    displayValoresCompra.html(`$ ${totalValorExtra}`);
  };

  $(document).on("change", "#propina", (e) => {
    e.preventDefault();
    let valorPropina = e.target.value;
    if (isNaN(valorPropina)) {
      $("#valor-propina").html(`$ ${valorPropina}`);
    } else {
      $("#valor-propina").html(`$ ${0}`);
    }
  });

  $(document).on("click", "#btn-enviar", () => {
    let valorPropinaFinal = parseInt($("#propina").val());
    console.log(typeof valorPropinaFinal, valorPropinaFinal);
    if (valorPropinaFinal == 0 || isNaN(valorPropinaFinal)) {
      alert("Aun no ha definido una propina");
    } else {
      let valorPropina = $("#propina").val();
      $("#valor-propina").html(`$ ${valorPropina}`);
      alert(`Su propina de $ ${valorPropinaFinal} ha sido enviada`);
    }
  });

  const mostrarIngredientesExtras = (listaIngredientesExtras) => {
    $("#extra-seleccionados").html("");
    let totalValorExtra = 0;
    for (let ingredienteExtra of listaIngredientesExtras) {
      $("#extra-seleccionados").append(`
            <p class="fs-5" text-end>${ingredienteExtra}</p>
        `);
      totalValorExtra += 800;
    }
    resumenDeCompra(totalValorExtra);
    console.log("lista exxtras", listaIngredientesExtras);
    console.log("valor final extra", totalValorExtra);
  };

  const mostrarIngredientesSeleccionados = (listaSeleccionados) => {
    $("#seleccionados").html("");
    for (const seleccion of listaSeleccionados) {
      $("#seleccionados").append(`
            <p class="fs-5" >${seleccion}</p>
        `);
    }
    if (listaSeleccionados.length > 3) {
      let listaIngredientesExtras = listaSeleccionados.slice(3);
      mostrarIngredientesExtras(listaIngredientesExtras);
    }
  };

  $(document).on("click", ".check-ingrediente", function () {
    const valor = $(this).val();
    seleccionados.push(valor);
    mostrarIngredientesSeleccionados(seleccionados);
  });
});
