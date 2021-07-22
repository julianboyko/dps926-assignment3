import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home/home.service';
import { OrderHistory } from '../models/order-history.model';

@Component({
  selector: 'app-previous-orders',
  templateUrl: './previous-orders.page.html',
  styleUrls: ['./previous-orders.page.scss'],
})
export class PreviousOrdersPage implements OnInit {

  previousOrders: OrderHistory[] = [];

  constructor(private mainService: HomeService) { }

  ngOnInit() {
    this.previousOrders = this.mainService.getOrderHistory();
  }

}
