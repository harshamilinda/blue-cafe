export class Order {  
    
    
    //[x: string]: OrderDetails[];
         
    constructor(
     public Status: any,
     public orderDate: any,
     public orderDetails: any[]
    ) { }

}

export class OrderDetails {
   
    constructor(
       public beverage: any,
       public quantity: any,
       public beverageId: any
    ) { }
 }

 export class Beverage{
     constructor(
         public Name: any,
         public UnitPrice: any,
         public BeverageId: any
     ){}
 }

 // TO DO: replace with URL builder
 export enum CafeURLs {
    Order  = "http://localhost:53831/api/order",
    Beverage = "http://localhost:53831/api/beverage"
    
}

export enum OrderStatus {
    Preparing = "Preparing",
    Serving = "Serving",
    Completed = "Completed",
    Cancelled = "Cancelled",
}