
class Person{
    name:string;
    age:number;
    constructor(name:string, age:number){
        this.name=name;
        this.age = age;
    }

    introduce(){
        console.log(`My name is ${this.name}. I am ${this.age} years old.`)
    }
}


class Teacher extends Person{
    subject:string;
    constructor(name:string, age:number, subject:string){
        super(name, age);
        this.subject = subject;
    }

    introduce(){
        console.log(`My name is ${this.name}. I am ${this.age} years old. I am a Teacher. I teach ${this.subject}.`)
    }

}

const teacher = new Teacher('John', 30, 'Math');
teacher.introduce();