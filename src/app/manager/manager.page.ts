import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home/home.service';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.page.html',
  styleUrls: ['./manager.page.scss'],
})
export class ManagerPage implements OnInit {

  constructor(private mainService: HomeService) { }

  newOrder() {
    this.mainService.getOrder().clearOrder();
  }

  ngOnInit() {
  }

}
