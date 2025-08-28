import { Employee } from "./Employee";

export class Coder extends Employee {
    private programmingLanguage: string;
    constructor(name: string, salary: number, programmingLanguage: string) {
        super(name, salary);
        this.programmingLanguage = programmingLanguage;
    }

    code(): string {
        return `${this.getName()} is coding in ${this.programmingLanguage}.`;
    }
}