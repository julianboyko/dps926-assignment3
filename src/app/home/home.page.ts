import { Component, OnInit } from '@angular/core';
import { AlertController } from "@ionic/angular";
import { PizzaTopping } from "../models/pizza-topping.model";
import { PizzaSize } from "../models/pizza-size.model";
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  toppings: PizzaTopping[] = [
    new PizzaTopping("Vegetables"),
    new PizzaTopping("Meatballs"),
    new PizzaTopping("Pepperoni"),
    new PizzaTopping("Mushroom")]

  sizes: PizzaSize[] = [
    new PizzaSize("Large"),
    new PizzaSize("Medium"),
    new PizzaSize("Small"),
    new PizzaSize("Party")
  ]

  selectedQuantity: string;
  selectedTopping: string;
  selectedSize: string;

  constructor(private mainService: HomeService, public alertController: AlertController) { }

  quantityClicked(quantity: number) {
    this.mainService.setQuantity(quantity);
    this.selectedQuantity = this.mainService.getQuantityLabel();
  }

  async addButtonClicked() {
    var errorMessage = "";
    if (this.mainService.getQuantity() === 0) {
      errorMessage = "You must select a pizza quantity!";
    } else if (this.mainService.getTopping().name === "None") {
      errorMessage = "You must select a pizza topping!";
    } else if (this.mainService.getSize().name === "None") {
      errorMessage = "You must select a pizza size!";
    }

    if (errorMessage !== "") {
      const alert = await this.alertController.create({
        header: 'Error',
        message: errorMessage,
        buttons: ['OK']
      });

      await alert.present();
      return;
    }

    this.mainService.addToOrder();
    var successMessage = "Your order now has " + this.mainService.getOrder().totalQuantity
      + " pizzas, and the total is " + this.mainService.getOrder().totalPrice + " CAD.";
    const alert = await this.alertController.create({
      header: 'Success',
      message: successMessage,
      buttons: ['OK']
    });

    await alert.present();

    this.resetUI();
  }

  toppingClicked(topping: string) {
    this.mainService.setTopping(topping);
    this.selectedTopping = this.mainService.getTopping().name;
  }

  sizeClicked(size: string) {
    this.mainService.setSize(size);
    this.selectedSize = this.mainService.getSize().name;
  }

  resetUI() {
    this.mainService.setQuantity(0);
    this.mainService.setTopping("None");
    this.mainService.setSize("None");

    this.selectedQuantity = this.mainService.getQuantityLabel();
    this.selectedTopping = this.mainService.getTopping().name;
    this.selectedSize = this.mainService.getSize().name;
  }

  ngOnInit() {
    this.selectedQuantity = this.mainService.getQuantityLabel();
    this.selectedSize = this.mainService.getSize().name;
    this.selectedTopping = this.mainService.getTopping().name;
  }

  ionViewDidEnter() {
    this.resetUI();
  }
}
