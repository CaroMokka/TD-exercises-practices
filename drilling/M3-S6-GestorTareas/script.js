class Task {
  constructor(name, state) {
    this.name_task = name;
    this.state_task = state;
  }
}

$(() => {
  let listado = [];
  let btnTaskDone = $("#btn-success");
  let btnTaskPending = $("#btn-danger");
  let btnAllTasks = $("#btn-info")

  btnTaskDone.on("click", function () {
    $("#display_tasks").html("")
    const tasksCompleted = listado.filter((task) => task.state_task);
    tasksCompleted.map( task => {
      $("#display_tasks").append(`
            <div class="col-12 d-flex">
                <div class="col-9 d-flex" >
                  <input class="form-check-input me-2 checked" type="checkbox" id="task_state" checked></input>
                  <label for="flexCheckDefault" class="form-label d-flex text-decoration-line-through">${task.name_task}</label>
                </div>
                <div class="col-3 text-center fw-bold text-success">Completada</div>
            </div>
        `);
    })
    quantityTasks(tasksCompleted)
    
  });

  btnTaskPending.on("click", function () {
    $("#display_tasks").html("")
    const tasksPending = listado.filter((task) => !task.state_task);
    tasksPending.map( task => {
      $("#display_tasks").append(`
            <div class="col-12 d-flex">
                <div class="col-9 d-flex" >
                  <input class="form-check-input me-2 checked" type="checkbox" id="task_state"></input>
                  <label for="flexCheckDefault" class="form-label d-flex">${task.name_task}</label>
                </div>
                <div class="col-3 text-center fw-bold text-danger">Pendiente</div>
            </div>
        `);
    })
    quantityTasks(tasksPending);
  });

  btnAllTasks.on("click", function (){
    $("#display_tasks").html("")
    console.log("LISTADO", listado)
    listTasks(listado)
    quantityTasks(listado);
  })

  function quantityTasks(list) {
    let suma = 0;
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

  $("#form").submit(function (e) {
    e.preventDefault();
    let nameTask = $("#add_task").val();
    $("#add_task").val("");
    let statusTask = document.getElementById("add_status");

    if (nameTask == "") {
      return alert("Ingrese una tarea");
    }
    //refactori
    if (statusTask.checked) {
      console.log("Check esta marcado");
      const task = new Task(nameTask, true);
      listado.push(task);
      listTasks(listado);
    } else {
      console.log("check esta desmarcado");
      const task = new Task(nameTask, false);
      listado.push(task);
      listTasks(listado);
    }
    quantityTasks(listado);
  });
});
