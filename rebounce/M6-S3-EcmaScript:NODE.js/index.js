//REQUERIMIENTO 1
/*
Crear tres variables, una con cada palabra clave: var, let, const; y construir una porción
de código donde la ejecución tenga un error por el alcance de cada una de éstas, ya sea
porque la definición es al interior de una función, de un bloque o fuera de ellos.
*/
//Ejercicio 8: Lea un número e imprima el número y el valor absoluto del mismo.

//Caso de error con let
// var numero = -5
// if(numero < 0){
//     let va = numero * -1
// } else {
//     let va = numero
// }
// console.log(va)
//Observación: let solamente tiene unn alcance dentro del bloque donde esta definido.
//FIN -> Caso de error con let
/* ---------------------- */

//Caso de error con const
// var numero = -5
// if(numero < 0){
//     const va = numero * -1
// } else {
//     const va = numero
// }
// console.log(va)
//Observación: Tanto let como const tienen las mismas reglas de alcance, por ende se comportan igual
//FIN -> Caso de error con const
/* ---------------------- */

//Caso de exito con var
//console.log("Mostrar", va) // No falla, pero me da undefined -> Esto le llamamos hoisting (No tienes acceso al valor de la variable porque la definiste despues, pero el programa nno falla)
////console.log(va2) // Aquí si falla el programa o línea de ejecución, ya que no existe la variable
// var numero = -8
// if(numero < 0){
//     var va = numero * -1
// } else {
//     var va = numero
// }
// console.log(va)
//Observación: En este caso var tiene un alcance global
//FIN -> Caso de exito con var

//Caso de error con var
// function valorAbsoluto() {
//   if (numero < 0) {
//     var va = numero * -1;
//   } else {
//     var va = numero;
//   }
// }
// console.log("va",va);
//FIN -> Caso de error con var

/* ----------------------------------------------------------------------------------------- */
//REQUERIMIENTO 2
/*
Crear una función utilizando el formato tradicional con la palabra clave function, y luego
volver a escribirla utilizando la sintaxis de función de flecha, y guardando la declaración
dentro de una variable. La función debe recibir, al menos, dos argumentos.
*/
//Lea dos números de un mismo registro e imprima ambos números sólo si son positivos
let num1 = -6;
let num2 = 9;

//Opción con formato tradicional - ecma 5
//  function mostrarPositivos(n1, n2) {
//     if(n1 > 0 && n2 > 0){
//         return "Número1: + n1 + Número2: + n2 "
//     } else {
//         return "No son positivos"
//     }
//  }

//  let resultado = mostrarPositivos(num1, num2)
// console.log(resultado)

//Opción con función flecha - ecma 6
// const mostrarPositivos = (n1, n2) => {
//     if(n1 > 0 && n2 > 0){
//         return "Número1: + n1 + Número2: + n2 "
//     } else {
//         return "No son positivos"
//     }
// }
//formato de función para ejercicios con poca lógica
// const mostrarPositivos = (n1, n2) => (n1 > 0 && n2 > 0) ? "Número1: + n1 + Número2: + n2 " : "No son positivos"
// let resultado = mostrarPositivos(num1, num2)
// console.log(resultado)

/* ----------------------------------------------------------------------------------------- */
//REQUERIMIENTO 3
/*
Crear una función similar a la del ejercicio, utilizando esta vez un objeto con características de algún animal, 
que contenga, al menos, cinco pares de llave - valor. Utilizar template literals para escribir un texto empleando 
los valores del objeto, y Destructuring para definir los valores del objeto dentro de la función. 
*/
// const animal = {
//   especie: "Perro",
//   raza: "Pastor Alemán",
//   color: "Negro",
//   edad: 4,
//   tamanio: "Grande",
// };

// const datosAnimal = ({ especie, raza, color }) => {
//   return {
//     especie,
//     raza,
//     color,
//     descripción: `Especie: ${especie}, Raza: ${raza}, Color: ${color}`
//   }
// };

// console.log(datosAnimal(animal));

/* ----------------------------------------------------------------------------------------- */
//REQUERIMIENTO 4
/*
Tomar el objeto creado con anterioridad, y crear una copia actualizada usando el spread operator; 
actualizar dos campos, y añadir dos nuevos. 
*/

// const animal = {
//   especie: "Perro",
//   raza: "Pastor Alemán",
//   color: "Negro",
//   edad: 4,
//   tamanio: "Grande",
// };

// const datosAdicionales = {
//   vacunado: true,
//   entrenado: false,
//   color: "Marrón"
// };
//Operador de propagación - El orden como se alique el operador de propagación es relevante
//   console.log({ ...animal, ...datosAdicionales })
//   console.log({ ...datosAdicionales, ...animal })

//Ejemplo de clonación sin referencia
//const animalCopia = JSON.parse(JSON.stringify(animal)) //tradicional
//const animalCopia = { ...animal }; //moderna
//Solución 1
//const animalCopia = { ...animal, ...datosAdicionales }
//Solución 2
// const animalCopia = {
//     ...animal,
//     vacunado: true,
//   entrenado: false,
//   color: "Marrón"
// }
// console.log(animalCopia);
// console.log(animal)

/* ----------------------------------------------------------------------------------------- */
//REQUERIMIENTO 5
/*
Obtener las propiedades del objeto en un Array, utilizando el método Object.values(), 
y luego usar un ciclo for of para mostrar por pantalla todos los ítems del Array. 
*/
// const auto = {
//     modelo: "suv",
//     marca: "Jetour",
//     color: "azul",
//     puertas: 5,
//     asientos: 7,   
// }

//console.log(Object.keys(auto))

//Ciclo que muestra las llaves (keys) - Recorre las llaves de un array
// for(const key of Object.keys(auto)){
//     console.log(key)
// }
//Ciclo que muestra los valores (values)
// for(const value of Object.values(auto)){
//     console.log(value)
// }
//Recorrer las llaves del objeto
// for(const key in auto){
//     console.log(key)
// }
//Ciclo que muestra la llaves y sus valores
// for(const element of Object.entries(auto)){
//     console.log(element)
// }

//Rest operator - Para quitar llave-valor de un objeto
// console.log(auto)
// const { modelo, puertas,  ...resultado }  = auto
// console.log(resultado)