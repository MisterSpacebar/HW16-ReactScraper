import axios from "axios";

export default {
  // Gets all books
  getBooks: function() {
    return axios.get("/articles");
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/articles/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/articles", bookData);
  }
};
