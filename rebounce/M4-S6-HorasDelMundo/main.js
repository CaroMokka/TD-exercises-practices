$(() => {
  const opcionesCiudad = [
    {
      name: "Santiago de Chile",
      timeZone: "America/Santiago",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    },
    {
      name: "París",
      timeZone: "Europe/Paris",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    },
    {
      name: "Londres",
      timeZone: "Europe/London",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    },
    {
      name: "Nueva York",
      timeZone: "America/New_York",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    },
    {
      name: "San Petersburgo",
      timeZone: "Europe/Moscow",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    },
    {
      name: "Beijing",
      timeZone: "Asia/Shanghai",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    },
    {
      name: "Seúl",
      timeZone: "Asia/Seoul",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    },
  ];

  const mostrarHora = async () => {
    $("#relojes").html("");
    for (const opcion of opcionesCiudad) {
      const horaCiudad = new Intl.DateTimeFormat("es-CL", opcion).format(
        new Date()
      );
        const reloj = await mostrarRelojes(opcion.name, horaCiudad)
        console.log(reloj)
    //  mostrarRelojes(opcion.name,horaCiudad).then(res => {
    //      console.log(res)
    //  }).catch(error => console.log(error))
    }
  };
  //setInterval(mostrarHora, 1000);

  const delay = (duration) => {
    return new Promise((res, rej) => {
        setTimeout(()=>{
            res()
        }, duration * 1_000)
    })
}

  const mostrarRelojes = (ciudad, hora) => {
    //let display = $("#relojes");
    return new Promise( async (res, rej)=> {
        if(ciudad && hora){
            await delay(4)
            res(`Ciudad ${ciudad}, Hora ${hora}`)
        } else {
            rej("No existe reloj")
        }
         
            
    })
    
    
    
    
  };
});


// display.append(`
//             <div class="card mb-3" style="max-width: 20rem;">
//                         <div class="row g-0">
//                           <div class="col-md-4">
//                             <img src="..." class="img-fluid rounded-start" alt="imagen-bandera">
//                           </div>
//                           <div class="col-md-8">
//                             <div class="card-body">
//                               <h5 class="card-title">${hora}</h5>
//                               <h4 class="card-text">${reloj.name}</h4>
//                             </div>
//                           </div>
//                         </div>
//           </div>
//             `)




// const delay = (duration) => {
//     return new Promise((res, rej) => {
//         setTimeout(()=>{
//             res()
//         }, duration * 1_000)
//     })
// }

//   const mostrarRelojes = (hora, ciudad) => {
//     let display = $("#relojes");
//     display.append(`
//             <div class="card mb-3" style="max-width: 20rem;">
//                         <div class="row g-0">
//                           <div class="col-md-4">
//                             <img src="..." class="img-fluid rounded-start" alt="imagen-bandera">
//                           </div>
//                           <div class="col-md-8">
//                             <div class="card-body">
//                               <h5 class="card-title">${hora}</h5>
//                               <h4 class="card-text">${ciudad}</h4>
//                             </div>
//                           </div>
//                         </div>
//           </div>
//             `)
   
    
    
//   };




