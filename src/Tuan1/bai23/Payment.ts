
interface Payment{
    pay(amount: number):void;
}


class Cash implements Payment{
    pay(amount: number): void {
        console.log(`You have paid ${amount} by cash`);        
    }
}

class Card implements Payment{
    pay(amount: number): void {
        console.log(`You have paid ${amount} by card`);        
    }
}

const cash = new Cash();
cash.pay(1000);

const card = new Card();
card.pay(1000);