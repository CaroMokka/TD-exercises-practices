import ciudades from "./data.js";

$(() => {
  let id_interval;
  function mostrarHoraCiudad(ciudad) {
    horaEnDirecto(ciudad);
    if(id_interval){
      clearInterval(id_interval)
    }
    id_interval =  setInterval(() => horaEnDirecto(ciudad), 1000)
  }

  function horaEnDirecto(ciudad) {
    const hora_ciudad = new Intl.DateTimeFormat("es-CL", ciudad).format(
      new Date()
    );
    mostrarRelojes(ciudad.name, hora_ciudad);
    
    console.log(`Hora Actual: ${hora_ciudad} y Ciudad: ${ciudad.name}`);
    return hora_ciudad; //hora estatica
  }

  function mostrarRelojes(nombreCiudad, horaCiudad) {
    $("#relojes").html("");

    $("#relojes").append(`
      <p>${horaCiudad}</p>
        <p>${nombreCiudad}</p>
      `);
  }

  for (let i = 0; i < ciudades.length; i++) {
    setTimeout(() => {
      mostrarHoraCiudad(ciudades[i]);
    }, i * 4_000);
  }
});
