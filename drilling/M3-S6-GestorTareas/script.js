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

// function filterTasks(list) {
//     const listFiltered = list.filter((task) => {
//         task.state_task === "Completado"
//     })
//     console.log("Lista filtrada", listFiltered)
// }
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
      $("#display_tasks").append(`
            <div class="col-12 d-flex">
                <div class="col-9 d-flex" >
                  <input class="form-check-input me-2 checked" type="checkbox" id="task_state"></input>
                  <label for="flexCheckDefault" class="form-label d-flex">${
                    task.name_task
                  }</label>
                </div>
             
                  <div class="col-3 text-center fw-bold completed">${
                    task.state_task ? "" : "Pendiente"
                  }</div>
           
            </div>
        `);
    }
  }

  $("#form").submit(function (e) {
    e.preventDefault();

    let nameTask = $("#add_task").val();
    let statusTask = $("#add_status").val()
    console.log("status", statusTask)

    if (nameTask == "") {
      return alert("Ingrese una tarea");
    }

    const task = new Task(nameTask, false);
    listado.push(task);
    listTasks(listado);
    //isActive(listado)
    //filterTasks(listado)
    //quantityTasks(listado)
  });
});
