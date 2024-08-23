$(function () {

  let totales = []


  function limpiarForm() {
    $(".cantidadAsiento").html("")
  }

  function validarForm(cantidadAsientos) {
    //validacion datos

    if(cantidadAsientos <= 0) {
      
      return $("#emailHelp").html("El valor ingresado no es valido")
    }
  }
  function calcularDcto(cantidadAsientos, precioAsiento) {
    //valor descuento
    if(cantidadAsientos >= 5) {
      let valorDcto = (precioAsiento * cantidadAsientos) * 0.1
      let dctoAplicado = (precioAsiento * cantidadAsientos) - valorDcto
      return dctoAplicado
    } else {
      return (precioAsiento * cantidadAsientos)
    }
  }
  function calcularTotal(totales) {
    let precioTotalFinal = 0
    for(let i = 0; i < totales.length; i++) {
      precioTotalFinal += totales[i]
    }
    return precioTotalFinal
  }

  $(".btn-reservar").on("click", function(){
    let nombreAsiento = $(this).data("nombre");
    let precioAsiento = $(this).data("precio");
    let cantidadAsientos = parseInt($(this).siblings(".cantidad-asiento").val());
    //console.log(cantidadAsientos)
    validarForm(cantidadAsientos)
    //limpiarForm()
    let precioConDcto = calcularDcto(cantidadAsientos, precioAsiento)//me entrega el valor final de la reserva con el dcto incluido
    totales.push(precioConDcto)

    let precioTotal = calcularTotal(totales)
    console.log(precioTotal)

    $("#detalle-reserva tbody").append(`
      <tr class="">
        <td>${nombreAsiento}</td>
        <td>${precioAsiento}</td>
        <td>${cantidadAsientos}</td>
        <td>${(cantidadAsientos * precioAsiento)}</td>
        <td>${precioConDcto}</td>
      </tr>
      <tr class="text-end fs-4 fw-bold">${precioTotal}</tr>
    `);
    let valorFinalFormateado = new Intl.NumberFormat("es-CL", {
      style: "currency",
      currency: "CLP",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
  }).format(precioTotal)

    $("#total-pagar").html(`Total a pagar: ${valorFinalFormateado}`)


    
    
  })



































  // do {
  //   var tipoAsiento = prompt(
  //     "Seleccione el tipo de asiento: \n 1. Asiento Normal. Valor $5.000 \n 2. Asiento Preferencial. Valor $9.000 \n 3. Asiento VIP. Valor $13.000"
  //   );
  //   if (isNaN(tipoAsiento)) {
  //     alert("Por favor ingresar un valor numérico");
  //   }
  //   if (tipoAsiento < 1) {
  //     alert("Por favor ingresar un número positivo");
  //   }
  //   if (tipoAsiento > 3) {
  //     alert("La opción ingresada no es válida ");
  //   }
  // } while (isNaN(tipoAsiento) || tipoAsiento < 1 || tipoAsiento > 3);

  // do {
  //   var userQuantitySelected = prompt(
  //     "Ingrese la cantidad de asientos que desea reservar:"
  //   );
  //   if (isNaN(userQuantitySelected)) {
  //     alert("Por favor ingresar un valor numérico");
  //   }
  // } while (isNaN(userQuantitySelected));

  // if (userQuantitySelected >= 5) {
  //   alert("Por favor ingresar una cantidad permitida de maximo de reserva");
  // }

  // function optDcto() {}
});
//asientos reservados es mayor o igual a 5, se debe aplicar un descuento del 10%
// es igual o menor a 0 se le debe indicar al usuario que debe ingresar un número positivo y volver a solicitarle la cantidad.
//Si el usuario elige cualquier asiento distinto a los tres disponibles, se le debe indicar que esa opción no es válida.
