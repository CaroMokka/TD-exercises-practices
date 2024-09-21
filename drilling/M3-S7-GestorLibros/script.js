import books from "./data.js"
class Book {
    constructor(title, autor, year){
        this.title_book  = title
        this.autor_book = autor
        this.year_published = year
    }    
}
window.onload = () => {
    let newbooks = []
    const showFormatedBook = () => {
        books.map((item) => {
            for(const clave in item ){
                item[clave] ??= "No especifica"
                item[clave] = item[clave].replaceAll("."," ").replaceAll(" ", "_").toLowerCase()  
                console.log(item[clave])         
            }
            const book = new Book(item.title, item.autor, item.date_published)
            newbooks.push(book)
        } )
    }
    showFormatedBook() 
    console.log("Nuevos libros", newbooks)
}

