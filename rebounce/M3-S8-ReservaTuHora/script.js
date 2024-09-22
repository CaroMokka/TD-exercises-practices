class Reserva {
  constructor(name, lastName, email, age, date) {
    this.name = name;
    this.last_name = lastName;
    this.email = email;
    this.age = age;
    this.date = date;
  }
}
window.onload = () => {
  let form = document.getElementById("form-reserva-hora");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let user_name = document.getElementById("txt-name").value;
    let user_lastName = document.getElementById("txt-lastName").value;
    let user_email = document.getElementById("txt-email").value;
    let user_age = document.getElementById("txt-age").value;
    let user_date_hour = document.getElementById("txt-date").value; 

    const reserva = {
      name: user_name,
      lastName: user_lastName,
      email: user_email,
      age: user_age,
      date: user_date_hour,
    };
    wrapperProxy(reserva);
  });

  const wrapperProxy = (reserva) => {
    const proxy = new Proxy(reserva, {
      get(target, prop) {
        if (!(prop in target))
          return `La propiedad "${prop}" no existe en el objeto.`;
        if (prop === "age") {
          if (target[prop] > 18) {
            const reservaHora = new Reserva(
                reserva.name,
                reserva.lastName,
                reserva.email,
                reserva.age,
                reserva.date
              );
              console.log("Reserva Final", reservaHora);
            return `Usted tiene ${target[prop]} años, es mayor de edad.`;
          } else {
            alert(
              `Usted tiene ${target[prop]} años, es menor de edad. No puede reservar hora`
            );
            return target[prop];
          }
        }
        return target[prop];
      },
    });
    console.log(proxy.name);
    console.log(proxy.work);
    console.log(proxy.age);
  };

  //falta comprender Proxy en JS
};
