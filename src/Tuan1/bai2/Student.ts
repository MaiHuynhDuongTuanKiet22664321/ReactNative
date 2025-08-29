import { Person } from "../bai1/Person";
export class Students extends Person {
    grade : number;
    constructor(name:string,age:number, grade : number){
        super(name,age);
        this.grade  = grade;
    }

    getGrade(): number {
        return this.grade;
    }
    setGrade(grade1 : number): void{
        this.grade = grade1;
    }
}