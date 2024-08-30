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

  function mostrarIngredientesSeleccionados() {}
  function mostrarIngredientesExtras() {}

  $(document).on("click", ".check-ingrediente", function(){
      //revisar bine la diferencia entre evento channge y click para este problema
    const checkeado = $(this).prop("checked")
    const valor = $(this).val()
    //si esta chequeado guardalo dentro de un array de seleccioandos
    //sino
    //
  })


});
