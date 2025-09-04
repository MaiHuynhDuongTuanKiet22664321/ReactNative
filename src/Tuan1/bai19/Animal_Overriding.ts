import { A } from "framer-motion/dist/types.d-Bq-Qm38R";

class Animal{
    sound():void{
        console.log("The animal makes a sound.");
    }
}


class Dog extends Animal{
    sound():void{
        console.log("The dog barks.");
    }
}

class Cat extends Animal{
    sound():void{
        console.log("The cat meows.");
    }
}
class Bird extends Animal{
    sound():void{
        console.log("The bird chirps.");
    }
}


const Animals :Animal[] = [new Dog, new Cat, new Bird];
for (const animal of Animals) {
    animal.sound();
}