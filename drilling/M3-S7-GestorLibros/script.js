//agregar y editar innformaciuon sobre los libbros
//buscador de libros por diferentes critewrios
//funiones que permitar gestionar y visualizar la indormacion de los libbros
//buscar y filtrar libros por nombre de autor
//Año publicación mostrar mensaje cuando los datos no exista (No especificado)
import books from "./data.js"
class Book {
    constructor(title, autor, year){
        this.title_book  = title
        this.autor_book = autor
        this.yearPublished = year
    }
    //funciones
    editBooks() {
        //Aqui editar conn metodo de String (agregar _ entre espacios u otra cosa)
    }
    showBooks(){}
}
console.log("Libros", books)