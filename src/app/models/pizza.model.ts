import { PizzaSize } from "./pizza-size.model";
import { PizzaTopping } from "./pizza-topping.model";

export class Pizza {
    size: PizzaSize;
    topping: PizzaTopping;
    quantity: number;
    price: number;

    constructor(size: PizzaSize, topping: PizzaTopping, quantity: number) {
        this.size = size;
        this.topping = topping;
        this.quantity = quantity;
        this.price = size.price + topping.price;
    }

    getTopping() {
        return this.topping.name;
    }

    getSize() {
        return this.size.name;
    }

    getPrice() {
        return this.price;
    }

    getQuantity() {
        return this.quantity;
    }
}
