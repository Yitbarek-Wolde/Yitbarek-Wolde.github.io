/*
o	createBook, which will take title, author, and libraryID as inputs.  It will create a new book object and add it to the library,
which will be represented as a global array named libraryBooks.  createBook should return the newly created book.
o	findTitles, which will find all the book titles in libraryBooks and return them in an alphabetically ordered array.
o	findAuthors, which will find all the authors in libraryBooks and return them in an alphabetically ordered array.
o	findIDs, which will find all the libraryIDs in libraryBooks and return them in an alphabetically ordered array.
*/
export let library = [
    { title: "The Road Ahead", author: "Bill Gates", libraryID: 1254 },
    { title: "Walter Isaacson", author: "Steve Jobs", libraryID: 4264 },
    { title: "Mockingjay: The Final Book of The Hunger Games", author: "Suzanne Collins", libraryID: 3245 }
];
/**
 * Event handler to display library titles sorted alphabetically
 * @returns {undefined}
 */
export function showTitles() {
    /* this function is complete, no need to modify.  Inspect it as an example for the other functions. */
    /* put all titles into an array, then sort, then join with newline and insert in textarea innerHTML */
    const titles = findTitles();
    /*need to sort and then join the titles still (e.g., someArray.join("\n")  */
    titles.sort();
    const titleString = titles.join("\n");
    let textArea = document.getElementById("displayArea");
    if (textArea) {
        textArea.innerHTML = titleString;
    }
}
/**
 *
 * @return {object} array holding all titles as elements
 */
export function findTitles() {
    let titles = [];
    for (const titleOfBook of library) {
        titles.push(titleOfBook.title);
    }
    return titles.sort();
}
/**
 * @returns {undefined} no return
 * Event handler for Add book button.  Creates and adds book to the library
 */
export function addBook() {
    let author = document.getElementById("author");
    let title = document.getElementById("title");
    if (author && title)
        createBook(title.value, author.value, 123);
}
/**
 *
 * @returns {string[]} find all  authors in libraryBooks and return them in alphabetically ordered array.
 */
export function findAuthors() {
    //implement this
    let Author = [];
    for (const titleOfBook of library) {
        Author.push(titleOfBook.author);
    }
    return Author.sort();
}
/**
 *
 * @returns {number[]} find all the libraryIDs in libraryBooks and return them in an alphabetically ordered array.
*/
export function findIDs() {
    //implement this
    let idFinder = [];
    for (const titleOfBook of library) {
        idFinder.push(titleOfBook.libraryID);
    }
    return idFinder.sort();
}
/**
 * @returns {book} new book object
 * createBook, which will take title, author, and libraryID as inputs.  It will create a new book object and add it to the library,
which will be represented as a global array named libraryBooks.  createBook should return the newly created book.
 */
export function createBook(title, author, libraryID) {
    //implement this
    let newbooks = { title: title, author: author, libraryID: libraryID };
    library.push(newbooks);
    return newbooks;
}
/**
 *
 * @returns {undefined}
 */
export function scramble() {
    const titles = findTitles();
    let titleString = [];
    let newString = titles.join(" ");
    titleString = newString.split(' ');
    let sorted = titleString.sort((a, b) => a.length - b.length);
    const sameLengthArr = sorted.filter((el, _, arr) => el.length === arr[0].length);
    let textArea = document.getElementById("displayArea");
    if (textArea) {
        for (let i = 0; i < sameLengthArr.length; i++)
            textArea.innerHTML = sameLengthArr[i].join(' ');
    }
}
