// constructor to create books
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.displayed = false;
}

// function to output book info
Book.prototype.info = function() {
    var string = `${this.title} by ${this.author}, ${this.pages} pages, ${this.read ? "already read" : "not read yet"}`
}

let myLibrary = [];

// function to display the books on the webapp 
function displayBooks() {
    // get booklist div and foreach book in the array, add it to the booklist div with custom style
    myLibrary.forEach(book => {
        if(!book.displayed) {
            // issue is if same name
            var bookIndex = myLibrary.findIndex((element) => element.title == book.title);
            const bookDiv = document.createElement("div");

            bookDiv.classList.add("bookDiv");
            bookDiv.dataset.index = bookIndex;

            bookDiv.innerHTML = `
                <h2>${book.title}</h2>
                <p><strong>Author:</strong> ${book.author}</p>
                <p><strong>Pages:</strong> ${book.pages}</p>
                <button type="button" id="toggle-is-read">${book.read ? "already read" : "not read yet"}</button>
                <button type="button" id="remove-book">Remove Book</button>
            `;
            booklistDiv.appendChild(bookDiv);
            book.displayed = true;   
            const btn = document.querySelector("#toggle-is-read");
            btn.classList = book.read ? "read" : "not-read";
        }
    });
}

// display all the books in the array
displayBooks();


// References to handle Modal and Form DOM elements
const booklistDiv = document.querySelector(".booklist");
const newBookBtn = document.querySelector(".newBook");
const modal = document.querySelector("dialog");
const form = document.querySelector(".formWrapper");

// event listeners for modal and form actions  
newBookBtn.addEventListener("click", () => modal.showModal());
modal.addEventListener("mousedown", () => modal.close()); // set up so that clicking anywhere on screen will close modal

// need this for the form to work propely, else cant click inside form without closing modal
form.addEventListener("mousedown", (event) => event.stopPropagation());

// Form submission
form.addEventListener('submit', function(event) {
    event.preventDefault();

    const form = getFormDetails();
    myLibrary.push(new Book(form.title, form.author, form.pageCount, form.isRead));

    modal.close();
    displayBooks();
    this.reset();
});

// toggle book is read
booklistDiv.addEventListener("click", function(event) {
    if(event.target.id == "toggle-is-read") {
        const bookIndex = event.target.parentNode.dataset.index;
        const book = myLibrary[bookIndex];

        book.read = !book.read;
        event.target.innerHTML = book.read ? "already read" : "not read yet";
        event.target.classList = book.read ? "read" : "not-read";
    }
});


// remove book button
booklistDiv.addEventListener('click', function(event) {
    if(event.target.id == "remove-book") {
        // get data-index of parent div and remove it from DOM & array
        const bookIndex = event.target.parentNode.dataset.index;
        event.target.parentNode.remove();
        myLibrary.splice(bookIndex, 1)
    }
})

// helper function used in form submission
function getFormDetails() {
    let formDetails = {};
    formDetails.title = document.getElementById("bookTitle").value;
    formDetails.author = document.getElementById("author").value;
    formDetails.pageCount = document.getElementById("pageCount").value;
    formDetails.isRead = document.getElementById("isRead").checked;
    return formDetails
}
