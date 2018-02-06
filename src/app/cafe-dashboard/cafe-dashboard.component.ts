import { Component, OnInit } from '@angular/core';
import { Order, OrderDetails, Beverage } from '../model/cafe-model';
import { CafeApiService } from '../services/cafe-api.service';
import { HubConnection } from '@aspnet/signalr-client';
import { ConnectedOverlayPositionChange } from '@angular/cdk/overlay';
import { CONFIGURATION } from '../app.module';
import { hubConnection } from 'signalr-no-jquery';


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
    this.onNotification();
   
  }
  
  onNotification(): void{
 
    let proxyName: string = 'cafeHub';

    const connection = hubConnection(CONFIGURATION.baseUrls.server);
    const hubProxy = connection.createHubProxy(proxyName);
     
    // set up event listeners i.e. for incoming "message" event
    hubProxy.on('sendToAll', function() {
      console.log('Calling ... onLoadOrders');
      this.onLoadOrders();
    });
     
    // connect
    connection.start(this.onLoadOrders())
    .done(function(){ console.log('Now connected, connection ID=' + connection.id); })
    .fail(function(){ console.log('Could not connect'); });
   
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
