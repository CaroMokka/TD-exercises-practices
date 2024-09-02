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
    for(const item of ingredientes ) {
        $("#ingredientes").append(`
        <input class="form-check-input check-ingrediente" type="checkbox" value=${item} id="flexCheckDefault">${item}</input>
        `);
      }
  }
  mostrarListaIngredientes()

  let seleccionados = []

  const resumenDeCompra = (totalValorExtra) => {
      let displayValoresCompra = $("#valorExtra")
      //console.log(typeof totalValorExtra)
      displayValoresCompra.html(`$ ${totalValorExtra}`)
      pagoValorFinal(totalValorExtra)
  }

  const pagoValorFinal = (totalValorExtra) => {
      console.log("totalvalorextra", totalValorExtra)
      let valorPizzaXL = $("#valor-pizzaxl").data("pizza")
      let valorExtra = totalValorExtra
    //   let valorPropina = parseInt($("#propina").val())
    //   $("#valor-propina").html(`$ ${valorPropina}`)
    $(document).on("change", "#propina", (e) => {
        e.preventDefault()
        let valorPropina = e.target.value
        console.log(valorPropina)
        $("#valor-propina").html(`$ ${valorPropina}`)
    })
      console.log("valores de resumen", valorPizzaXL, valorExtra)

  }

  const mostrarIngredientesExtras = (listaIngredientesExtras) => {
      $("#extra-seleccionados").html("")
      let totalValorExtra = 0
    for(let ingredienteExtra of listaIngredientesExtras) {
        $("#extra-seleccionados").append(`
            <p class="fs-5" text-end>${ingredienteExtra}</p>
        `)
        totalValorExtra += 800

    }
    resumenDeCompra(totalValorExtra)
    console.log("lista exxtras", listaIngredientesExtras)
    console.log("valor final extra", totalValorExtra)
  }

  const mostrarIngredientesSeleccionados = (listaSeleccionados) => {
    //console.log("lista seleccionando", listaSeleccionados)
    $("#seleccionados").html("")
    for(const seleccion of listaSeleccionados) {
        $("#seleccionados").append(`
            <p class="fs-5" >${seleccion}</p>
        `)
    }
    if(listaSeleccionados.length > 3) {
        let listaIngredientesExtras = listaSeleccionados.slice(3)
        //console.log(listaIngredientesExtras)
        mostrarIngredientesExtras(listaIngredientesExtras)
        
    }
  }
 

  $(document).on("click", ".check-ingrediente", function(){
      //revisar bine la diferencia entre evento channge y click para este problema
    const checkeado = $(this).prop("checked")
    //console.log("checkeado", checkeado)
    const valor = $(this).val()
    //console.log("valor", valor)
    seleccionados.push(valor)
    //console.log(seleccionados)
    mostrarIngredientesSeleccionados(seleccionados)
    //si esta chequeado guardalo dentro de un array de seleccioandos
    //sino
    //
  })


});
