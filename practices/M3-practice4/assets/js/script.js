//console.log(superHeroes)

function listarSuperheroes(listado) {
    console.log(listado)
    //$("#list-superheroes").html("")
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
                    <li><a class="dropdown-item" href="#">Eliminar</a></li>
                </ul>
                </td>
            </tr>
        `);
    }
}

listarSuperheroes(superHeroes)

$(function(){//Esta funcion ayuda a que todo el html se cargue primero
    //accion de eliminar un elemento

    //Mostrar o ocultar filtro

    //
})
