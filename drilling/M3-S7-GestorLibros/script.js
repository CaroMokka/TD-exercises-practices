import books from "./data.js";
class Book {
  constructor(title, autor, year) {
    this.title_book = title;
    this.autor_book = autor;
    this.year_published = year;
  }
}
window.onload = () => {
  let newbooks = [];
  const bookForm = document.querySelector("#form-book");

  bookForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let bookValue = document.querySelector("#input-value").value;
    searchBooks(newbooks, bookValue);
  });

  const showFormatedBook = () => {
    books.map((item) => {
      for (const clave in item) {
        item[clave] ??= "No especifica";
        item[clave] = item[clave]
          .replaceAll(".", " ")
          .replaceAll(" ", "_")
          .toLowerCase();
      }
      const book = new Book(item.title, item.autor, item.date_published);
      newbooks.push(book);
    });
  };
  showFormatedBook();

  const showFoundBook = (bookFiltered) => {
    let showBookUI = document.querySelector("#book-filtered");
    showBookUI.innerHTML = `
        <div style="font-weight: bold;margin: 20px">Título: ${bookFiltered[0].title_book.replaceAll(
          "_",
          " "
        )}</div>
        <div style="font-weight: bold;margin: 20px">Autor: ${bookFiltered[0].autor_book.replaceAll(
          "_",
          " "
        )}</div>
        <div style="font-weight: bold;margin: 20px">Fecha de publicación: ${bookFiltered[0].year_published.replaceAll(
          "_",
          " "
        )}</div>
        `;
  };

  const searchBooks = (booksList, bookElected) => {
    const bookUserFormated = bookElected
      .replaceAll(".", " ")
      .replaceAll(" ", "_")
      .toLowerCase();
    const bookFiltered = booksList.filter((book) => {
      for (const clave in book) {
        if (book[clave] === bookUserFormated) {
          return book;
        }
      }
    });
    showFoundBook(bookFiltered);
  };
};
