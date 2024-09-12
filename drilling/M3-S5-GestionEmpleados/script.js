$(()=>{
   function Empleado(nombre, salario, departamento) {
    this.nombre = nombre
    this.salario = salario
    this.departamento = departamento

    this.calcularSalario = function(nombre, salario, depto, aumento) {
        let salarioFinal = (salario + aumento)
        return console.log(`Nombre: ${nombre}, Salario: $${salarioFinal}, Departamento: ${depto}`)
    }
    this.cambiarDepto = function(nombre, salario, depto) {
        return console.log(`Nombre: ${nombre}, Salario: $${salario}, Departamento: ${depto}`)
    }
    this.detalleEmpleado = function(nombre, salario, depto) {
        return console.log(`Nombre: ${nombre}, Salario: $${salario}, Departamento: ${depto}`)
    }
   }

   const empleado = new Empleado("Carola", 1400000, "Desarrollo")
   //Detalle de empleado
   empleado.detalleEmpleado(empleado.nombre, empleado.salario, empleado.departamento)
   //Detalle de empleado con aumento de salario
   empleado.calcularSalario(empleado.nombre, empleado.salario, empleado.departamento, 444000)
   //Detalle de empleado con cambio de departamento
   empleado.cambiarDepto(empleado.nombre, empleado.salario, "Sistemas")






})