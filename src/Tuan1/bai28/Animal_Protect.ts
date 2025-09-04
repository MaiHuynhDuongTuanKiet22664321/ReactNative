class Animal_Protect {
    protected makeSounds(): void {
        console.log("The animal makes a sound.");
    }
}

class Dog_Protect extends Animal_Protect {
    public makeSounds(): void {
        console.log("The dog barks.");
    }
}

class Cat_Protect extends Animal_Protect {
    public makeSounds(): void {
        console.log("The cat meows.");
    }
}

const dogs = new Dog_Protect();
dogs.makeSounds();

const cats = new Cat_Protect();
cats.makeSounds();
