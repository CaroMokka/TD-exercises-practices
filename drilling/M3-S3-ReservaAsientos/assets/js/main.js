$(function () {
  let totales = [];

  function limpiarError() {
    $("#cantidad-help-vip").html("");
    $("#cantidad-help-normal").html("");
    $("#cantidad-help-pref").html("");
  }

  function calcularDcto(cantidadAsientos, precioAsiento) {
    //valor descuento
    if (cantidadAsientos >= 5) {
      let valorDcto = precioAsiento * cantidadAsientos * 0.1;
      let dctoAplicado = precioAsiento * cantidadAsientos - valorDcto;
      return dctoAplicado;
    } else {
      return precioAsiento * cantidadAsientos;
    }
  }
  function calcularTotal(totales) {
    let precioTotalFinal = 0;
    for (let i = 0; i < totales.length; i++) {
      precioTotalFinal += totales[i];
    }
    return precioTotalFinal;
  }

  $(".btn-reservar").on("click", function () {
    limpiarError();
    let nombreAsiento = $(this).data("nombre");
    let precioAsiento = $(this).data("precio");
    let cantidadAsientos = parseInt(
      $(this).siblings(".cantidad-asiento").val()
    );

    if (isNaN(cantidadAsientos)) {
      $("#cantidad-help-vip").html("Ingrese una cantidad");
      $("#cantidad-help-pref").html("Ingrese una cantidad");
      $("#cantidad-help-normal").html("Ingrese una cantidad");
      return 
    } else {
      let precioConDcto = calcularDcto(cantidadAsientos, precioAsiento); //me entrega el valor final de la reserva con el dcto incluido
    totales.push(precioConDcto);

    let precioTotal = calcularTotal(totales);
    console.log(precioTotal);

    $("#detalle-reserva tbody").append(`
      <tr class="">
        <td>${nombreAsiento}</td>
        <td>${precioAsiento}</td>
        <td>${cantidadAsientos}</td>
        <td>${cantidadAsientos * precioAsiento}</td>
        <td>${precioConDcto}</td>
      </tr>
      <tr class="text-end fs-4 fw-bold">${precioTotal}</tr>
    `);
    let valorFinalFormateado = new Intl.NumberFormat("es-CL", {
      style: "currency",
      currency: "CLP",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(precioTotal);

    $("#total-pagar").html(`Total a pagar: ${valorFinalFormateado}`);
    }
    
  });
});
//asientos reservados es mayor o igual a 5, se debe aplicar un descuento del 10%
// es igual o menor a 0 se le debe indicar al usuario que debe ingresar un número positivo y volver a solicitarle la cantidad.
//Si el usuario elige cualquier asiento distinto a los tres disponibles, se le debe indicar que esa opción no es válida.
