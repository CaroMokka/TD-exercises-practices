class Reserva {
    constructor(name, age){
        this.name = name
        this.age = age
    }
}
window.onload = () => {
    const reserva = new Reserva("Carolina", 17)

    const proxy = new Proxy(reserva, {
        get(target, prop) {
            if(!(prop in target)) return `La propiedad "${prop}" no existe en el objeto.`
            if(prop === "age") {
                if(target[prop] > 18){
                    return `Usted tiene ${target[prop]} años, es mayor de edad.`
                } else {
                    alert(`Usted tiene ${target[prop]} años, es menor de edad.`)
                    return target[prop]
                }
            } 
            return target[prop]
        }
    })
    console.log("reserva", reserva)
    console.log(proxy.name)
    console.log(proxy.work)
    console.log(proxy.age)

    //falta comprender Proxy en JS
}