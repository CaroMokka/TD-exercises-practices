class Task {
  constructor(name, state) {
    this.name_task = name;
    this.state_task = state;
  }
  
  
    
}

function isActive(list){
    $("#task_state").click(()=>{
        console.log(!this.state_task)
        //si es true entonces cambia a completada
        if(!this.state_task){
            $("#status_task").html("Completada")
            $("#status_task").addClass("bg-success bg-opacity-25")
            const listFiltered = list.filter((task) => {
                task.state_task === "Completada"
                
            })
     
            
        }
        console.log("Lista filtrada", listFiltered)
        
        
    })
  }

// function filterTasks(list) {
//     const listFiltered = list.filter((task) => {
//         task.state_task === "Completado"
//     })
//     console.log("Lista filtrada", listFiltered)
// }
function quantityTasks(list){
    //$("#total_tasks").html("")
      let suma = 0
      for(let i = 0; i < list.length; i++){
        suma += 1
      }
      $("#total_tasks").html(`Cantidad de tareas: ${suma}`)
      return suma
  }

$(() => {
  let listado = [];

  function listTasks(listado) {
    $("#display_tasks").html("");
    for (const task of listado) {
      $("#display_tasks").append(`
            <div class="d-flex">
                <input class="form-check-input me-2 checked" type="checkbox" id="task_state"></input>
                <label for="flexCheckDefault" class="form-label d-flex">${
                  task.name_task
                }</label>
                <span id="status_task" class="justify-content-end" >${
                    task.state_task ? "" : "Pendiente"
                  }</span>
            </div>
        `);
    }
    
  }





  $("#form").submit(function (e) {
    e.preventDefault();
    //$("#add_task").val("")

    let descriptionTask = $("#add_task").val();

    const task = new Task(descriptionTask, false);
    listado.push(task);
    listTasks(listado);
    isActive(listado)
    //filterTasks(listado)
    quantityTasks(listado)
   
  });
});
