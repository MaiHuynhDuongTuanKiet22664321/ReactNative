export class Car {
    brand: string;
    model: string;
    year:number;

    constructor(brand: string,model: string,year:number) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    getBrand(): string {
        return this.brand;
    }

    setBrand(x : string): void{
        this.brand = x;
    }

    getModel(): string {
        return this.model;
    }

    setModel(x : string): void{
        this.model = x;
    }

    getYear(): number {
        return this.year;
    }

    setYear(x : number): void{
        this.year = x;
    }

}