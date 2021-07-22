import { Order } from "./order.model";
import { Pizza } from "./pizza.model";

export class OrderHistory extends Order {
    orderDate: Date;

    constructor() {
        super();

        this.orderDate = new Date();
    }

    setPizzas(pizzas: Pizza[]) {
        this.pizzas = pizzas
    }

    setTotalPrice(totalPrice: number) {
        this.totalPrice = totalPrice;
    }

    setTotalQuantity(totalQuantity: number) {
        this.totalQuantity = totalQuantity;
    }

    getDateAsString() {
        return this.orderDate.toLocaleDateString() + " - " + this.orderDate.toLocaleTimeString();
    }
}
