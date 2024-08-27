$(function () {
  function mostrarEscalas(origenCiudad, destinoCiudad) {
    $("#origin").html(origenCiudad);
    $("#dest").html(destinoCiudad);
  }

  $("#btn-vuelo").on("click", function () {
    let origen_ciudad = $("#from").val();
    let destino_ciudad = $("#to").val();
    console.log(origen_ciudad, destino_ciudad);

    mostrarEscalas(origen_ciudad, destino_ciudad);

    if (
      (origen_ciudad == "Chicago" && destino_ciudad == "Venice") ||
      (origen_ciudad == "Boston" && destino_ciudad == "Paris")
    ) {
      return $("#trans").html("Ojo! Tu vuelo tiene una escala");
    } else {
      return $("#trans").html("Tu vuelo no tiene una escala");
    }
  });
});
