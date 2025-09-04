"use strict";
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    introduce() {
        console.log(`My name is ${this.name}. I am ${this.age} years old.`);
    }
}
class Teacher extends Person {
    constructor(name, age, subject) {
        super(name, age);
        this.subject = subject;
    }
    introduce() {
        console.log(`My name is ${this.name}. I am ${this.age} years old. I am a Teacher. I teach ${this.subject}.`);
    }
}
const teacher = new Teacher('John', 30, 'Math');
teacher.introduce();
