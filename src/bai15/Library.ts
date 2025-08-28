import { Book } from "./Book";
import { User } from "./User";

export class Library {
  private books: Book[] = [];
  private users: User[] = [];

  constructor() {}
  // Add a book
  addBook(book: Book): void {
    this.books.push(book);
    console.log(`Book "${book.title}" added to the library.`);
  }

  // Add a user
  addUser(user: User): void {
    this.users.push(user);
    console.log(`User "${user.name}" registered in the library.`);
  }

  // List all books
  listBooks(): void {
    console.log("Books in Library:");
    this.books.forEach((b) => {
      console.log(`- ${b.title} by ${b.author}`);
    });
  }

  // List all users
  listUsers(): void {
    console.log("Users in Library:");
    this.users.forEach((u) => {
      console.log(`- ${u.name}`);
    });
  }
}
