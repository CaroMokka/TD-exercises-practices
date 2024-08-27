$(function () {
  function mostrarEscalas(origenCiudad, destinoCiudad) {
    $("#origin").html(origenCiudad);
    $("#dest").html(destinoCiudad);
  }

  $("#btn-vuelo").on("click", function () {
    let origen_ciudad = $("#from").val();
    let destino_ciudad = $("#to").val();
    console.log(origen_ciudad, destino_ciudad);

    if (
      (origen_ciudad == "Chicago" && destino_ciudad == "Venice") ||
      (origen_ciudad == "Boston" && destino_ciudad == "Paris")
    ) {
      return console.log("Esta ruta tiene escalas");
    } else {
      return console.log("No tiene escalas");
    }

  });
});

//condicion de comparacion entre ciudad de origen y de destino
//segun resultado me dara mensaje que sera inyectado dentro de html

//chicago + venice
//boston + paris
