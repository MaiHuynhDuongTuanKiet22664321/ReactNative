"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
    sound() {
        console.log("The animal makes a sound.");
    }
}
class Dog extends Animal {
    sound() {
        console.log("The dog barks.");
    }
}
class Cat extends Animal {
    sound() {
        console.log("The cat meows.");
    }
}
class Bird extends Animal {
    sound() {
        console.log("The bird chirps.");
    }
}
const Animals = [new Dog, new Cat, new Bird];
for (const animal of Animals) {
    animal.sound();
}
