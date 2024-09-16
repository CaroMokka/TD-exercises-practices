// $(() => {
//   function actualizarHoraCiudad(ciudad) {
//     $("#relojes").html("");
//     const horaCiudad = new Intl.DateTimeFormat("es-CL", ciudad).format(
//       new Date()
//     );
//     $("#relojes").append(`
//     <div>${horaCiudad}</div>
//     <div>${ciudad.name}</div>
// `);
//     }
//   function delay(ms) {
//     return new Promise((resolve) => setTimeout(resolve, ms));
//   }

//   async function mostrarHoraCiudad(ciudad) {
//     actualizarHoraCiudad(ciudad)
//     setInterval(() => {
//       actualizarHoraCiudad(ciudad);
//     }, 1_000);
//   }

//   async function inicioRelojMundial() {
//     const ciudades = [
//       {
//         name: "Santiago de Chile",
//         delay: 0,
//         timeZone: "America/Santiago",
//         hour: "2-digit",
//         minute: "2-digit",
//         second: "2-digit",
//       },
//       {
//         name: "París",
//         delay: 4_000,
//         timeZone: "Europe/Paris",
//         hour: "2-digit",
//         minute: "2-digit",
//         second: "2-digit",
//       },
//       {
//         name: "Londres",
//         delay: 8_000,
//         timeZone: "Europe/London",
//         hour: "2-digit",
//         minute: "2-digit",
//         second: "2-digit",
//       },
//       {
//         name: "Nueva York",
//         delay: 12_000,
//         timeZone: "America/New_York",
//         hour: "2-digit",
//         minute: "2-digit",
//         second: "2-digit",
//       },
//       {
//         name: "San Petersburgo",
//         delay: 16_000,
//         timeZone: "Europe/Moscow",
//         hour: "2-digit",
//         minute: "2-digit",
//         second: "2-digit",
//       },
//       {
//         name: "Beijing",
//         delay: 20_000,
//         timeZone: "Asia/Shanghai",
//         hour: "2-digit",
//         minute: "2-digit",
//         second: "2-digit",
//       },
//       {
//         name: "Seúl",
//         delay: 24_000,
//         timeZone: "Asia/Seoul",
//         hour: "2-digit",
//         minute: "2-digit",
//         second: "2-digit",
//       },
//     ];
//     for (const ciudad of ciudades) {
//       await delay(ciudad.delay);
//       mostrarHoraCiudad(ciudad);
//     }
//   }
  //inicioRelojMundial();
//});
