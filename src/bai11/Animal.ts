export class Animal {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    bark(): string {
        return 'bark';
    }

    meow(): string {
        return 'meow';
    }
}