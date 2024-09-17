class Task {
  constructor(name, state) {
    this.name_task = name;
    this.state_task = state;
  }
}

function isActive(list) {
  $(".completed").click(() => {
    console.log(!this.state_task);
    //si es true entonces cambia a completada
    if (!this.state_task) {
      $(".completed").html("Completada");
      $(".completed").addClass("bg-success bg-opacity-25");
      const listFiltered = list.filter((task) => {
        task.state_task === "Completada";
      });
    }
    console.log("Lista filtrada", listFiltered);
  });
}

function quantityTasks(list) {
  //$("#total_tasks").html("")
  let suma = 0;
  for (let i = 0; i < list.length; i++) {
    suma += 1;
  }
  $("#total_tasks").html(`Cantidad de tareas: ${suma}`);
  return suma;
}

$(() => {
  let listado = [];

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
            <div class="col-12 d-flex">
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
    let statusTask = document.getElementById("add_status");
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

    //isActive(listado)
    //filterTasks(listado)
    //quantityTasks(listado)
  });
});


