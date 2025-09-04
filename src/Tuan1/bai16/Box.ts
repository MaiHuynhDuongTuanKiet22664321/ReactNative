

class Box<T>{
    value:T;
    constructor(value:T){
        this.value=value;
    }

    display(){
        console.log(this.value);
    }
}

let box=new Box<number>(10);
box.display();