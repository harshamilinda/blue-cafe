export class Order {  [x: string]: OrderDetails[];

     
    constructor(
     orderDate: any,
     orderDetails: any[]
    ) { }

}

export class OrderDetails {
   
    constructor(
       public beverage: any,
       public quantity: any
    ) { }
 }