"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Library = void 0;
class Library {
    constructor() {
        this.books = [];
        this.users = [];
    }
    // Add a book
    addBook(book) {
        this.books.push(book);
        console.log(`Book "${book.title}" added to the library.`);
    }
    // Add a user
    addUser(user) {
        this.users.push(user);
        console.log(`User "${user.name}" registered in the library.`);
    }
    // List all books
    listBooks() {
        console.log("Books in Library:");
        this.books.forEach((b) => {
            console.log(`- ${b.title} by ${b.author}`);
        });
    }
    // List all users
    listUsers() {
        console.log("Users in Library:");
        this.users.forEach((u) => {
            console.log(`- ${u.name}`);
        });
    }
}
exports.Library = Library;
