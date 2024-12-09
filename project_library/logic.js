const left = document.getElementById("left-arrow");
const right = document.getElementById("right-arrow");

const add = document.getElementById("add-book");
const remove = document.getElementById("remove-book");

let myLibrary = [];

function Book(bookName, authorName) {
    this.name = bookName;
    this.author = authorName;
}

function addBook() {

}

function removeBook() {

}

left.addEventListener("click", function () {

})

right.addEventListener("click", function () {

})

add.addEventListener("click", function () {
    let bookName = prompt("What is the name of the book?");
    let author = prompt("What is the name of the author?");
    const newBook = new Book(bookName, author);
    myLibrary.push(newBook);
})

remove.addEventListener("click", function () {

})