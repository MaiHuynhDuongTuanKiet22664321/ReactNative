"use strict";
class Cash {
    pay(amount) {
        console.log(`You have paid ${amount} by cash`);
    }
}
class Card {
    pay(amount) {
        console.log(`You have paid ${amount} by card`);
    }
}
const cash = new Cash();
cash.pay(1000);
const card = new Card();
card.pay(1000);
