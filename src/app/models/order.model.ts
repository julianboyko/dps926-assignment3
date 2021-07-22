import { Pizza } from "./pizza.model";

export class Order {
    pizzas: Pizza[];
    totalPrice: number;
    totalQuantity: number;

    constructor() {
        this.pizzas = [];
        this.totalPrice = 0;
        this.totalQuantity = 0;
    }

    addPizza(pizza: Pizza) {
        this.pizzas.push(pizza);
        this.totalQuantity += pizza.quantity;
        this.totalPrice += (pizza.price * pizza.quantity);
    }

    removePizza(index: number) {
        this.totalQuantity -= this.pizzas[index].quantity;
        this.totalPrice -= (this.pizzas[index].price * this.pizzas[index].quantity);
        this.pizzas.splice(index, 1);
    }

    clearOrder() {
        this.pizzas = [];
        this.totalPrice = 0;
        this.totalQuantity = 0;
    }
}