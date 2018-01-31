import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Order, OrderDetails, Beverage, OrderStatus } from '../model/cafe-model';
import { CafeApiService } from '../services/cafe-api.service';
//import { CafeDashboardComponent } from '../cafe-dashboard/cafe-dashboard.component';

@Component({
  selector: 'app-cafe-order',
  templateUrl: './cafe-order.component.html',
  styleUrls: ['./cafe-order.component.css'],
  providers: [CafeApiService]
})
export class CafeOrderComponent implements OnInit {

  show: boolean = false;
  public orderDetails: Array<OrderDetails> = [];
  //public order: Order;
  sBeverage: string;
  errorMessage: string;
  beverages: Beverage[];

  constructor(private _formBuilder: FormBuilder, private _cafeApiService: CafeApiService) { }

  ngOnInit() {
    this.getBeverages();
  }
  onSubmitOrder() {
    this.show = false;

    //place an order
    let orderDate = new Date().toLocaleDateString();
    let order = new Order(OrderStatus.Preparing, orderDate, this.orderDetails)
    this._cafeApiService
      .placeOrder(order)
      .subscribe(
        result => console.log(result),
        error => this.errorMessage = <any>error
      );


  }
  getBeverages() : void {
    this._cafeApiService
      .getBeverage()
      .subscribe(
        items => this.beverages = items,
        error => this.errorMessage = <any>error
      );
  }
  onNewOrder() {
    this.show = true;
    this.orderDetails = [];
  }

  sQty: number;

  quantities = [
    { value: 1, viewValue: '1' },
    { value: 2, viewValue: '2' },
    { value: 3, viewValue: '3' },
    { value: 4, viewValue: '4' },
    { value: 5, viewValue: '5' }
  ]

  addOrderDetails(_beverage: string, _quentity: number): void {
    let b = this.beverages.find(x => x.Name == _beverage);
    let detail = new OrderDetails(b.Name, _quentity,b.BeverageId);
    // this.orderDetails.push({'beverage': _beverage, 'quantity': _quentity});
    this.orderDetails.push(detail);


  }


}
