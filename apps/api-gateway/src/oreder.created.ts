export class OrderCreatedEvent{
    constructor(
        public readonly orderId:string, 
        public readonly userId:string,
        public readonly productName:string,
        public readonly quantity:number
    ){}

    toString(){
        return JSON.stringify({
            orderId:this.orderId,
            userId:this.userId,
            productName:this.productName,
            quantity:this.quantity
        })
    }
}