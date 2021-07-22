import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { HomeService } from '../home/home.service';
import { Pizza } from '../models/pizza.model';

@Component({
  selector: 'app-current-order',
  templateUrl: './current-order.page.html',
  styleUrls: ['./current-order.page.scss'],
})
export class CurrentOrderPage implements OnInit {

  pizzas: Pizza[] = new Array();
  totalPrice: number;
  totalQuantity: number;

  constructor(private mainService: HomeService, public alertController: AlertController) { }

  async placeOrder() {
    if (this.mainService.getOrder().totalQuantity === 0) {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'You  must add a pizza to your order before you can place it!',
        buttons: ['OK']
      });

      await alert.present();
      return;
    }

    const alert = await this.alertController.create({
      header: 'Thank you!',
      message: 'Your order of ' + this.mainService.getOrder().totalQuantity + ' pizzas has been placed!',
      buttons: ['OK']
    });

    await alert.present();

    this.mainService.addOrderToHistory();
    this.resetUI();
  }

  removePizza(index: number) {
    this.mainService.getOrder().removePizza(index);

    this.resetUI();
  }

  resetUI() {
    var currentOrder = this.mainService.getOrder();

    this.pizzas = currentOrder.pizzas;
    this.totalPrice = currentOrder.totalPrice;
    this.totalQuantity = currentOrder.totalQuantity;
  }

  ngOnInit() {
    this.resetUI();
  }

}
