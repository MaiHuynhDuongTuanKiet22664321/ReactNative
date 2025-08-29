export class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    getName(): string {
        return this.name;
    }

    setName(name1 : string): void{
        this.name = name1;
    }

    getAge(): number {
        return this.age;
    }

    setAge(age1 : number): void{
        this.age = age1;
    }


}


