export class Order {  [x: string]: OrderDetails[];

     
    constructor(
     public orderDate: any,
     public orderDetails: any[]
    ) { }

}

export class OrderDetails {
   
    constructor(
       public beverage: any,
       public quantity: any
    ) { }
 }

 export class Beverage{
     constructor(
         public Name: any,
         public UnitPrice: any
     ){}
 }

 // TO DO: replace with URL builder
 export enum CafeURLs {
    Order  = "http://localhost:53831/api/order",
    Beverage = "http://localhost:53831/api/beverage"
    
}