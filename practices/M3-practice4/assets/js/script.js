console.log(superHeroes)

function listarSuperheroes(listado) {
    console.log(listado)
    $("#list-superheroes tbody").html("")
    for(const item of listado){
        $("#list-superheroes tbody").append(`
            <tr>
                <td>${item.id}</td>
                <td>${item.name}</td>
                <td>${item.work.occupation}</td>
                <td>* ${item.biography.aliases.join("<br>* ")}</td>
                <td><img class="image-avatar" src="${item.image.url}"></td>
                <td>
                <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Acciones
                </button>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item button-delete" href="#" data-id="${item.id}">Eliminar</a></li>
                </ul>
                </td>
            </tr>
        `);
    }
}

listarSuperheroes(superHeroes)

$(function(){//Esta funcion ayuda a que todo el html se cargue primero
    //accion de eliminar un elemento
    $(document).on("click", ".button-delete", function(event) {
        event.preventDefault();
        var idEliminar = $(this).data("id")

        if(confirm("¿Seguro desea eliminar este super héroe?")) {
            // Ejemplo 1 para eliminar
            // var indice = superHeroes.findIndex(item => item.id == idEliminar)
            // superHeroes.splice(indice)

            // Ejemplo 2 para eliminar
            superHeroes = superHeroes.filter(item => item.id != idEliminar)

            listarSuperheroes(superHeroes)
        }
    })

    //Mostrar o ocultar filtro
    $("#show-hide").click(function() {
        if($("#filter").hasClass("d-none")) { // Lógica para mostrar
            $("#filter").removeClass("d-none")
            $("#show-hide").removeClass("btn-success").addClass("btn-danger").html("Ocultar")
        } else { // Lógica para ocultar
            $("#filter").addClass("d-none")
            $("#show-hide").removeClass("btn-danger").addClass("btn-success").html("Mostrar")
        }
    })

    //
})
