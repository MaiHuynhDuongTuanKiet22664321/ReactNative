export class Rectangle {
    width:number;
    height:number;

    constructor(width:number,height:number) {
        this.width = width;
        this.height = height;
    }

    getHeight(): number {
        return this.height;
    }

    setHeight(x : number): void{
        this.height = x;
    }

    getwidth(): number {
        return this.width;
    }

    setwidth(x : number): void{
        this.width = x;
    }
   
    areaOfARectangle(): number{
        return this.width*this.height;
    }

    perimeterOfARectangle(width:number,height:number): number{
        return (width+height)*2;
    }

}