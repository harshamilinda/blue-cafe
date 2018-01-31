import { Component, OnInit } from '@angular/core';
import { Order, OrderDetails, Beverage } from '../model/cafe-model';
import { CafeApiService } from '../services/cafe-api.service';

@Component({
  selector: 'app-cafe-dashboard',
  templateUrl: './cafe-dashboard.component.html',
  styleUrls: ['./cafe-dashboard.component.css']
})
export class CafeDashboardComponent implements OnInit {

  constructor(private _cafeApiService: CafeApiService) { }

  orders: Order[];
  errMessage: string;
  ngOnInit() {
    this.onLoadOrders();
  }

  onLoadOrders() : void{
    this._cafeApiService
    .getOrder()
    .subscribe(
      items => this.orders = items,
      error => this.errMessage = <any>error
    );
  }
  onOrderReady(){

  }

}
