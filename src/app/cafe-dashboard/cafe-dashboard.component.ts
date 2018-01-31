import { Component, OnInit } from '@angular/core';
import { Order, OrderDetails, Beverage } from '../model/cafe-model';
import { CafeApiService } from '../services/cafe-api.service';
import { HubConnection } from '@aspnet/signalr-client';


@Component({
  selector: 'app-cafe-dashboard',
  templateUrl: './cafe-dashboard.component.html',
  styleUrls: ['./cafe-dashboard.component.css']
})
export class CafeDashboardComponent implements OnInit {

  private hubConnection: HubConnection;
  constructor(private _cafeApiService: CafeApiService) { }

  //orders: Order[];
  public orders: Array<Order> = [];
  errMessage: string;
  ngOnInit() {
    this.onLoadOrders();
    // this.hubConnection = new HubConnection('http://localhost:53831/signalr/hubs');
    // this.hubConnection
    //   .start()
    //   .then(() => console.log('SignalR Cafe Hub Connection started!'))
    //   .catch(err => console.log('Error while establishing connection :('));
    // this.hubConnection.on('sendToAll',()=>{
      
    // });

  }

  onLoadOrders() : void{
    this._cafeApiService
    .getOrder()
    .subscribe(
      (orders)=> {
        this.orders = orders;
      }
    );
  }
  sendToAll(): void {
    this.hubConnection.invoke('sendToAll');
    this._cafeApiService
    .getOrder()
    .subscribe(
      (orders)=> {
        this.orders = orders;
      }
    );
  }
  onOrderReady(){

  }

}
