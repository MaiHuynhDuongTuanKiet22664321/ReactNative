import { Person } from "./bai1/Person";
import { Students } from "./bai2/Student";
import { Car } from "./bai3/Car";
import { Rectangle } from "./bai4/Rectangle";
import { BankAccount } from "./bai5/BankAccount";
import { Book } from "./bai6/Book";


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

