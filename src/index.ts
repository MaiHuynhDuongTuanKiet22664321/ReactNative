import { Person } from "./bai1/Person";
import { Cat } from "./bai11/Cat";
import { Students } from "./bai2/Student";
import { Car } from "./bai3/Car";
import { Rectangle } from "./bai4/Rectangle";
import { BankAccount } from "./bai5/BankAccount";
import { Book } from "./bai6/Book";
import { User } from "./bai7/User";
import { Product } from "./bai8/Product";
import { Dog } from "./bai9/Dog";
import {Dog1} from "./bai11/Dog1";
import { Account } from "./bai10/Account";
import { Fish } from "./bai12/Fish";
import { Bird } from "./bai12/Bird";
import { Manager } from "./bai14/Manager";
import { Coder } from "./bai14/Coder";
import { Library } from "./bai15/Library";
import { Book as Book1 } from "./bai15/Book";
import { User as User1 } from "./bai15/User";

console.log(">>>Person");
const P = new Person("Kiet",22);
console.log(P);

console.log(">>>Student");
const S = new Students("Kiet",22,10);
console.log(S);


console.log(">>>Car");
const C = new Car("Chicago","Tesla",2000);
console.log(C);

console.log(">>>Rectangle");
const R = new Rectangle(20,20);
console.log(">Area :",R.areaOfARectangle());
console.log(">Perimeter :",R.perimeterOfARectangle(20,20));


console.log(">>>BankAccount");
const B = new BankAccount(20000);
console.log(">Deposit :",B.deposit(100));
console.log(">>After deposit :",B.getBalance())
console.log(">With draw",B.withdraw(100));
console.log(">>After with draw :",B.getBalance())


console.log(">>>Book");
const book = new Book("Chicago","Tesla",2000);
console.log(book);


console.log(">>>User");
const user = new User("Kiet");
console.log(user);

console.log(">>>Product");
// array product
const products = [
    new Product("Product 1", 10),
    new Product("Product 2", 20),
    new Product("Product 3", 300),
    new Product("Product 4", 40),
    new Product("Product 5", 50),
    new Product("Product 6", 110),
    new Product("Product 7", 150),
];

const productsThan100 = products.filter(product => product.getPrice() > 100);
console.log(">Products than 100 : ",productsThan100);



console.log(">>>Dog");
const dog = new Dog("Momo");
console.log(">Dog1 :",dog);
console.log(">Sound :",dog.sound());



console.log(">>>Account");
const account = new Account("123456", "Kiet", 1000);
console.log(">Get balance :",account.getBalance());
account.deposit(100)
console.log(">After deposit :",account.getBalance())



console.log(">>>Dog  bai 11");
const dog1 = new Dog1("Meomeo");
console.log(">Dog 11 :",dog1);
console.log(">Bark 11 :",dog1.bark());

console.log(">>>Cat");
const cat = new Cat("Momo");
console.log(">Cat :",cat);
console.log(">Sound :",cat.meow());



console.log(">>>Bird");
const bird = new Bird("Momo");
console.log(">Bird :",bird);
console.log(">Fly :",bird.fly());
console.log(">>>Fish");
const fish = new Fish("Momo");
console.log(">Fish :",fish);
console.log(">Swim :",fish.swim());

// console.log(">>>Square");
// const square = new Square(20);
// console.log(">Area :",square.getArea());
// console.log(">>>Circle");
// const circle = new Circle(20);
// console.log(">Area :",circle.getArea());

console.log(">>>Manager");
const manager = new Manager("Kiet",1000,10);
console.log(">Manager :",manager);
console.log(">Manage :",manager.manage());
console.log(">>>Coder");
const coder = new Coder("Kiet",1000,"Javascript");
console.log(">Coder :",coder);
console.log(">Code :",coder.code());


const library = new Library();

const book1 = new Book1(1, "The Hobbit", "J.R.R. Tolkien");
const book2 = new Book1(2, "1984", "George Orwell");

const user1 = new User1(1, "Alice");
const user2 = new User1(2, "Bob");

library.addBook(book1);
library.addBook(book2);

library.addUser(user1);
library.addUser(user2);

library.listBooks();
library.listUsers();