class Circle extends Shape {
    private radius : number;

    constructor(radius : number) {
        super();
        this.radius = radius;
    }
    public getArea(): number {
        return Math.PI * this.radius * this.radius;
    }

}
