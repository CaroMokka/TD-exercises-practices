class Task {
  constructor(name, state) {
    this.name_task = name;
    this.state_task = state;
  }
}

$(() => {
  let listado = [];
  let btnTaskDone = $("#btn-success")
  let btnTaskPending = $("#btn-danger")


  btnTaskDone.on("click", function(){
    listado.forEach((task, index) => {
      if(task.state_task){
        console.log("tarea confirmada")
        $(".pending-task").ClassAdd("d-none")
      } 

    })
  })
  

  function quantityTasks(list) {
    //$("#total_tasks").html("")
    let suma = 1;
    for (let i = 0; i < list.length; i++) {
      suma = suma + 1;
    }
    $("#total_tasks").html(`Cantidad de tareas: ${suma}`);
  }

  function listTasks(listado) {
    $("#display_tasks").html("");
    for (const task of listado) {
      if (task.state_task) {
        $("#display_tasks").append(`
            <div class="col-12 d-flex">
                <div class="col-9 d-flex" >
                  <input class="form-check-input me-2 checked" type="checkbox" id="task_state" checked></input>
                  <label for="flexCheckDefault" class="form-label d-flex text-decoration-line-through">${task.name_task}</label>
                </div>
                <div class="col-3 text-center fw-bold text-success">Completada</div>
            </div>
        `);
      } else {
        $("#display_tasks").append(`
            <div class="col-12 d-flex pending-task">
                <div class="col-9 d-flex" >
                  <input class="form-check-input me-2 checked" type="checkbox" id="task_state"></input>
                  <label for="flexCheckDefault" class="form-label d-flex">${task.name_task}</label>
                </div>
                <div class="col-3 text-center fw-bold text-danger">Pendiente</div>
            </div>
        `);
      }
    }
  }

  // function filterTasksStatus(listado) {
  //   for(const task of listado){
  //     console.log(task.state_task)
  //     if(task.state_task){
  //       console.log("CONFIRMADO")
  //     } else {
  //       console.log("PENDIENTE")
  //     }
  //   }
  // }
  // filterTasksStatus(listado)

  $("#form").submit(function (e) {
    e.preventDefault();

    let nameTask = $("#add_task").val();
    $("#add_task").val("");
    let statusTask = document.getElementById("add_status");

    quantityTasks(listado);
    
    console.log("LISTA",listado)

    if (nameTask == "") {
      return alert("Ingrese una tarea");
    }
    
    if (statusTask.checked) {
      console.log("Check esta marcado");
      const task = new Task(nameTask, true);
      listado.push(task);
      listTasks(listado);
      return task;
    } else {
      console.log("check esta desmarcado");
      const task = new Task(nameTask, false);
      listado.push(task);
      listTasks(listado);
      return task;
    }
  });


});
