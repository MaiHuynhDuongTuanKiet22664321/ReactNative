export class Book {
    title:string;
    author:string;
    year:number;

    constructor(title:string,author:string,year:number) {
        this.title = title;
        this.author = title;
        this.year = year;
    }

    getTitle(): string {
        return this.title;
    }

    setTitle(x : string): void{
        this.title = x;
    }

    getAuthor(): string {
        return this.author;
    }

    setAuthor(x : string): void{
        this.title = x;
    }

    getYear(): number {
        return this.year;
    }

    setYear(x : number): void{
        this.year = x;
    }

    

}