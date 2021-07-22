import { Injectable } from '@angular/core';
import { OrderHistory } from '../models/order-history.model';
import { Order } from '../models/order.model';
import { PizzaSize } from '../models/pizza-size.model';
import { PizzaTopping } from "../models/pizza-topping.model";
import { Pizza } from '../models/pizza.model';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor() { }

  private orderHistories: OrderHistory[] = [];
  private currentOrder: Order = new Order();
  private quantity: number = 0;
  private selectedTopping: PizzaTopping = new PizzaTopping("None");
  private selectedSize: PizzaSize = new PizzaSize("None");

  setQuantity(quantity: number) {
    this.quantity = quantity;
  }

  getQuantity() {
    return this.quantity;
  }

  getQuantityLabel() {
    if (this.quantity === 0) {
      return "None"
    } else {
      return this.quantity.toString();
    }
  }

  setTopping(topping: string) {
    this.selectedTopping = new PizzaTopping(topping);
  }

  getTopping() {
    return this.selectedTopping;
  }

  setSize(size: string) {
    this.selectedSize = new PizzaSize(size);
  }

  getSize() {
    return this.selectedSize;
  }

  addToOrder() {
    var pizzaToAdd = new Pizza(this.selectedSize, this.selectedTopping, this.quantity);
    this.currentOrder.addPizza(pizzaToAdd);
  }

  getOrder() {
    return this.currentOrder;
  }

  addOrderToHistory() {
    var orderHistory = new OrderHistory();
    orderHistory.setPizzas(this.currentOrder.pizzas);
    orderHistory.setTotalPrice(this.currentOrder.totalPrice);
    orderHistory.setTotalQuantity(this.currentOrder.totalQuantity);

    this.orderHistories.push(orderHistory);

    this.currentOrder.clearOrder();
  }

  getOrderHistory() {
    return [...this.orderHistories];
  }
}
