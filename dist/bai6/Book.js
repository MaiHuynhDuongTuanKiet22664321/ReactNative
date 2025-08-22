"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = title;
        this.year = year;
    }
    getTitle() {
        return this.title;
    }
    setTitle(x) {
        this.title = x;
    }
    getAuthor() {
        return this.author;
    }
    setAuthor(x) {
        this.title = x;
    }
    getYear() {
        return this.year;
    }
    setYear(x) {
        this.year = x;
    }
}
exports.Book = Book;
