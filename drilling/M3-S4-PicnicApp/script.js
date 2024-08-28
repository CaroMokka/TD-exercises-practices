$(function () {

  let user_temperature = prompt(
    "Cual es la temperatura actual en grados Celsius?"
  );
  let user_isRain = prompt("Esta lloviendo actualmente? (reponder SI o NO)");
  let user_time = prompt("Cuantos minutos tienes disponibles para el picnic?");

  console.log(user_temperature, user_time, user_isRain);

  if (
    user_temperature > 12 &&
    user_temperature < 30 &&
    user_isRain == "NO" &&
    user_time > 90
  ) {
    return alert("Es un buen momento para organizar un picnic");
  } else {
    return alert("Es un mal momento para un picnic");
  }
});
