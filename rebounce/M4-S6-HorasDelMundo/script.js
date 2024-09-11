// const cuidades = [
//     "santiago", "paris", "tokyo"
// ]


// const peticionAsincrona = () => {
//     return new Promise((res) => {
//         setTimeout(() => {
//             res(console.log("Peticion Asincrona"))
//         }, 2_000);
//     })
    
// }

//funciones
const mostrarHoraSantiago = async () => {
    return new Promise((resolve) => {
        resolve(
            resolve(
                setTimeout(() => {
                    console.log("Santiago")
                }, 4_000)
            )
        )
    })
}
const mostrarHoraParis = async () => {
    return new Promise((resolve) => {
        resolve(
            resolve(
                setTimeout(() => {
                    console.log("Paris")
                }, 8_000)
            )
        )
    })
}

mostrarHoraSantiago()
mostrarHoraParis()



