import { Animal } from './Animal';
export class Dog implements Animal{
     private name : string;
    constructor( name: string) {
        this.name = name;
     }
    getName(): string {
        return this.name;
    }
    sound(): string {
        return "Woof woof!";
    }
}