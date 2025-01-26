const left = document.getElementById("left-arrow");
const right = document.getElementById("right-arrow");

const add = document.getElementById("add-book");
const remove = document.getElementById("remove-book");

let book_text = document.getElementById("book-text");
let book_element = document.getElementById("book-name");
let author_text = document.getElementById("author-text");
let author_element = document.getElementById("author-name");

const MAX_CHARS = 40;

let myLibrary = [];
let increment = 0;

function Book(bookName, authorName) {
  this.name = bookName;
  this.author = authorName;
}

function addBook() {
  let book = "ERROR";
  let author = "ERROR";
  do {
    book = prompt("What is the name of the book?");
  } while (book > MAX_CHARS);
  do {
    author = prompt("What is the name of the author?");
  } while (author > MAX_CHARS);
  const newBook = new Book(book, author);
  myLibrary.push(newBook);
  increment = myLibrary.length - 1;
  updateOutput();
}

function removeBook() {
  myLibrary.splice(increment, 1);
  increment = 0;
  if (myLibrary.length === 0) {
    book_text.textContent = "";
    book_element.textContent = "The Library is empty :(";
    author_element.textContent = "";
    author_text.textContent = "";
  } else {
    updateOutput();
  }
}

function updateOutput() {
  book_text.textContent = "Book Name:";
  book_element.textContent = myLibrary[increment].name;
  author_text.textContent = "Author Name:";
  author_element.textContent = myLibrary[increment].author;
}

function isEmpty() {
  if (myLibrary.length === 0) {
    return true;
  } else {
    return false;
  }
}

left.addEventListener("click", function () {
  if (isEmpty() === true) {
    book_element.textContent = "The library is currently empty :(";
  } else {
    if (increment === 0) {
      increment = myLibrary.length - 1;
    } else {
      increment -= 1;
    }
    updateOutput();
  }
});

right.addEventListener("click", function () {
  if (isEmpty() === true) {
    book_element.textContent = "The library is currently empty :(";
  } else {
    if (increment === myLibrary.length - 1) {
      increment = 0;
    } else {
      increment += 1;
    }
    updateOutput();
  }
});

add.addEventListener("click", function () {
  addBook();
});

remove.addEventListener("click", function () {
  removeBook();
});
