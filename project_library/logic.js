const left = document.getElementById("left-arrow");
const right = document.getElementById("right-arrow");

const add = document.getElementById("add-book");
const remove = document.getElementById("remove-book");

let book_text = document.getElementById("book-text")
let book_element = document.getElementById("book-name")
let author_text = document.getElementById("author-text")
let author_element = document.getElementById("author-name")

const MAX_CHARS = 40;

let myLibrary = [];
let increment = 0;

function Book(bookName, authorName) {
    this.name = bookName;
    this.author = authorName;
}

function addBook() {

}

function removeBook() {

}

function updateOutput() {

}

function isEmpty() {
    if (myLibrary.length === 0) {
        return true; 
    }
    else {
        return false;
    }
}

left.addEventListener("click", function () {
    if (isEmpty() === true) {
        book_element.textContent = "The library is currently empty :("
    }
    else {
        book_text.textContent = "Book Name:";
        book_element.textContent = myLibrary[increment].bookName;
        author_text = "Author Name:";
        author_element = myLibrary[increment].authorName;
    }
})

right.addEventListener("click", function () {
    if (isEmpty() === true) {
        book_element.textContent = "The library is currently empty :("
    }
    else {
        book_text.textContent = "Book Name:";
        book_element.textContent = myLibrary[increment].bookName;
        author_text = "Author Name:";
        author_element = myLibrary[increment].authorName;
    }
})

add.addEventListener("click", function () {
    let bookName = prompt("What is the name of the book?");
    let author = prompt("What is the name of the author?");
    const newBook = new Book(bookName, author);
    myLibrary.push(newBook);
})

remove.addEventListener("click", function () {
    myLibrary.pop()
    increment -= 1;
    updateOutput();
})