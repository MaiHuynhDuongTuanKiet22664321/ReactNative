class Square extends Shape {
    private side: number;
    constructor(side: number) {
        super();
        this.side = side;
    }
    public getArea(): number {
        return this.side * this.side;
    }

}