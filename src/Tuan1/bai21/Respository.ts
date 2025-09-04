
class Responsitory<T> {
    public data: T[] = [];
    public add(item: T): void {
        this.data.push(item);
    }
    public getAll(): T[] {
        return this.data;
    }
}


const repository = new Responsitory<number>();
repository.add(1);
repository.add(2);
repository.add(3);
console.log(repository.getAll());