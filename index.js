const bookstore = [
  {
    title: "How to kill a man",
    author: "Black Eye",
    availability: true,
    holder: "null",
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    availability: true,
    holder: null,
  },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    availability: false,
    holder: "Jane Doe",
  },
  {
    title: "1984",
    author: "George Orwell",
    availability: false,
    holder: "John Doe",
  },
];

const addBooks = (title,author) => {
  let newbook = {}
  newbook.title = title;
  newbook.author = author;
  newbook.availability = true;
  newbook.holder = "null";
  bookstore.push(newbook);
    



  //return bookstore;
};
addBooks("Moby Dick","Herman Melville");
console.log(bookstore);
// const listOfBooks = (books) =>{
//     books = bookstore
//  console.log(books)

// }
// listOfBooks();
const availableBooks = () => {
  let books = bookstore.filter((book) => book.availability === true);
  console.log(books);
};

availableBooks();



const borrowBooks = (bookname, holder) => {
  let theBook = {};
  bookstore.forEach((book) => {
    if (book.title === bookname && book.availability === true) {
      theBook = book;
      theBook.availability = false;
      theBook.holder = holder;
      console.log("Book borrowed successfully");
      return;
    } else if (book.title === bookname && book.availability === false) {
      console.log("Book already borrowed"); 
     
      return;
    }
     
  });
console.log(theBook);
 

  if (!theBook.title) {
    console.log("Book not found");
  }
};

borrowBooks("How to kill a man", "John");
console.log(bookstore);