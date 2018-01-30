import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Order, OrderDetails } from '../model/cafe-model';
@Component({
  selector: 'app-cafe-order',
  templateUrl: './cafe-order.component.html',
  styleUrls: ['./cafe-order.component.css']
})
export class CafeOrderComponent implements OnInit {

  show: boolean = false;
  public orderDetails: Array<OrderDetails> = [];

  sBeverage: string;
  beverages = [
    { value: 'Coffee', viewValue: 'Coffee' },
    { value: 'Expresso', viewValue: 'Expresso' },
    { value: 'Late', viewValue: 'Late' }
  ];
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
  }
  onSubmitOrder() {
    this.show = false;
  }
  onNewOrder() {
    this.show = true;
  }
  selectedValue: string;

  foods = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' }
  ];

  sQty: number;

  quantities = [
    { value: 1, viewValue: '1' },
    { value: 2, viewValue: '2' },
    { value: 3, viewValue: '3' },
    { value: 4, viewValue: '4' },
    { value: 5, viewValue: '5' }
  ]

  addOrderDetails(_beverage: string, _quentity: number): void {
    //alert(_beverage);
    //alert(_quentity);
   let detail = new OrderDetails(_beverage, _quentity);
    
    // this.orderDetails.push({'beverage': _beverage, 'quantity': _quentity});
     this.orderDetails.push(detail);
    
    //alert(this.orderDetails.entries.length);


  }


}
