import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cafe-order',
  templateUrl: './cafe-order.component.html',
  styleUrls: ['./cafe-order.component.css']
})
export class CafeOrderComponent implements OnInit {

  show: boolean =false;
  beverages = [
    { value: 'Coffee', viewValue: 'Coffee' },
    { value: 'Expresso', viewValue: 'Expresso' },
    { value: 'Expresso', viewValue: 'Late' }
  ];
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
  }
  onSubmitOrder(){
    this.show =false;    
  }
  onNewOrder(){
    this.show=true;
  }
  
}
