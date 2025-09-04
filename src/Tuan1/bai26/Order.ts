
class Product{
    name: string;
    price: number;
    constructor(name: string, price: number){
        this.name = name;
        this.price = price;
    }
}

class Order{
    id: number;
    products: Product[];
    constructor(id: number, products: Product[]){
        this.id = id;
        this.products = products;
    }

    getTotalPrice(): number{
        return this.products.reduce((total, product) => total + product.price, 0);
    }
}

const order1 = new Order(1, [new Product("Laptop", 1200), new Product("Mouse", 25)]);
console.log(`Total price of order 1: $${order1.getTotalPrice()}`);