// import { Person } from "./Tuan1/bai1/Person";
// import { Cat } from "./Tuan1/bai11/Cat";
// import { Students } from "./Tuan1/bai2/Student";
// import { Car } from "./Tuan1/bai3/Car";
// import { Rectangle } from "./Tuan1/bai4/Rectangle";
// import { BankAccount } from "./Tuan1/bai5/BankAccount";
// import { Book } from "./Tuan1/bai6/Book";
// import { User } from "./Tuan1/bai7/User";
// import { Product } from "./Tuan1/bai8/Product";
// import { Dog } from "./Tuan1/bai9/Dog";
// import {Dog1} from "./Tuan1/bai11/Dog1";
// import { Account } from "./Tuan1/bai10/Account";
// import { Fish } from "./Tuan1/bai12/Fish";
// import { Bird } from "./Tuan1/bai12/Bird";
// import { Manager } from "./Tuan1/bai14/Manager";
// import { Coder } from "./Tuan1/bai14/Coder";
// import { Library } from "./Tuan1/bai15/Library";
// import { Book as Book1 } from "./Tuan1/bai15/Book";
// import { User as User1 } from "./Tuan1/bai15/User";

// console.log(">>>Person");
// const P = new Person("Kiet",22);
// console.log(P);

// console.log(">>>Student");
// const S = new Students("Kiet",22,10);
// console.log(S);


// console.log(">>>Car");
// const C = new Car("Chicago","Tesla",2000);
// console.log(C);

// console.log(">>>Rectangle");
// const R = new Rectangle(20,20);
// console.log(">Area :",R.areaOfARectangle());
// console.log(">Perimeter :",R.perimeterOfARectangle(20,20));


// console.log(">>>BankAccount");
// const B = new BankAccount(20000);
// console.log(">Deposit :",B.deposit(100));
// console.log(">>After deposit :",B.getBalance())
// console.log(">With draw",B.withdraw(100));
// console.log(">>After with draw :",B.getBalance())


// console.log(">>>Book");
// const book = new Book("Chicago","Tesla",2000);
// console.log(book);


// console.log(">>>User");
// const user = new User("Kiet");
// console.log(user);

// console.log(">>>Product");
// // array product
// const products = [
//     new Product("Product 1", 10),
//     new Product("Product 2", 20),
//     new Product("Product 3", 300),
//     new Product("Product 4", 40),
//     new Product("Product 5", 50),
//     new Product("Product 6", 110),
//     new Product("Product 7", 150),
// ];

// const productsThan100 = products.filter(product => product.getPrice() > 100);
// console.log(">Products than 100 : ",productsThan100);



// console.log(">>>Dog");
// const dog = new Dog("Momo");
// console.log(">Dog1 :",dog);
// console.log(">Sound :",dog.sound());



// console.log(">>>Account");
// const account = new Account("123456", "Kiet", 1000);
// console.log(">Get balance :",account.getBalance());
// account.deposit(100)
// console.log(">After deposit :",account.getBalance())



// console.log(">>>Dog  bai 11");
// const dog1 = new Dog1("Meomeo");
// console.log(">Dog 11 :",dog1);
// console.log(">Bark 11 :",dog1.bark());

// console.log(">>>Cat");
// const cat = new Cat("Momo");
// console.log(">Cat :",cat);
// console.log(">Sound :",cat.meow());



// console.log(">>>Bird");
// const bird = new Bird("Momo");
// console.log(">Bird :",bird);
// console.log(">Fly :",bird.fly());
// console.log(">>>Fish");
// const fish = new Fish("Momo");
// console.log(">Fish :",fish);
// console.log(">Swim :",fish.swim());

// // console.log(">>>Square");
// // const square = new Square(20);
// // console.log(">Area :",square.getArea());
// // console.log(">>>Circle");
// // const circle = new Circle(20);
// // console.log(">Area :",circle.getArea());

// console.log(">>>Manager");
// const manager = new Manager("Kiet",1000,10);
// console.log(">Manager :",manager);
// console.log(">Manage :",manager.manage());
// console.log(">>>Coder");
// const coder = new Coder("Kiet",1000,"Javascript");
// console.log(">Coder :",coder);
// console.log(">Code :",coder.code());


// const library = new Library();

// const book1 = new Book1(1, "The Hobbit", "J.R.R. Tolkien");
// const book2 = new Book1(2, "1984", "George Orwell");

// const user1 = new User1(1, "Alice");
// const user2 = new User1(2, "Bob");

// library.addBook(book1);
// library.addBook(book2);

// library.addUser(user1);
// library.addUser(user2);

// library.listBooks();
// library.listUsers();


// >>>>>>>>>Tuan 2<<<<<<<<<<<

import { bai1 } from './Tuan2/Bai1/bai1'
import { bai2 } from './Tuan2/Bai2/bai2';
import { bai3 } from './Tuan2/bai3/bai3';
import { getRandomNumber } from './Tuan2/bai4/bai4';
import { simulateTask } from './Tuan2/bai5/simulateTask';
import { simulateTask7 } from './Tuan2/bai7/simulateTask7';
import { simulateTask6 } from './Tuan2/bai6/simulateTask6';
import { bai8 } from './Tuan2/bai8/bai8';
import { bai9 } from './Tuan2/bai9/bai9';
import { simulateTask10 } from './Tuan2/bai10/simulateTask10';

bai1.then((message) => {
    console.log(message);
});


bai2.then((message) => {
    console.log(message);
});

bai3.then((message) => {
    console.log(message);
});


getRandomNumber
    .then((num: number) => {
        console.log("Resolved with number:", num);
    })
    .catch((error: string) => {
        console.error("Promise rejected:", error);
    });

simulateTask(2000).then((message) => {
    console.log(message); // Logs "Task done" after 2 seconds
});

// Run 3 tasks in parallel
const task1 = simulateTask6(1000); // 1 second
const task2 = simulateTask6(2000); // 2 seconds
const task3 = simulateTask6(1500); // 1.5 seconds

Promise.all([task1, task2, task3])
    .then((results) => {
        console.log("All tasks completed:");
        results.forEach((result, index) => {
            console.log(`Task ${index + 1}: ${result} ${index + 1}`);
        });
    })
    .catch((error) => {
        console.error("One of the tasks failed:", error);
    });



// Run 3 tasks in parallel
Promise.all([
    simulateTask7(1000),
    simulateTask7(2000),
    simulateTask7(1500)
])
    .then((results) => {
        console.log("All tasks completed:");
        results.forEach((result, index) => {
            console.log(`Task ${index + 1}: ${result}`);
        });
    })
    .catch((error) => {
        console.error("A task failed:", error);
    });


bai8()

const arr = [1, 2, 3, 4, 5, 6];
bai9(arr).then((message) => {
    console.log("Arr :", message);
});



simulateTask10(1000)
    .then((results) => {
        console.log("All tasks completed:");
    })
    .catch((error) => {
        console.error("One of the tasks failed:", error);
    })
    .finally(() => {
        console.log("done")
    })







