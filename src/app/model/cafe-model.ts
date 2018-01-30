export class Order {
    constructor(
        public orderDate: string,
        public orderDetails: OrderDetails[],
    ) { }

}

export class OrderDetails {
    constructor(
        public beverage: string,
        public quantity: number
    ) { }
}