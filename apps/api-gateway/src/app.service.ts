import { Inject, Injectable } from '@nestjs/common';
import { createOrderDto } from './app.dto';
import { ClientKafka } from '@nestjs/microservices';
import { OrderCreatedEvent } from './oreder.created';

@Injectable()
export class AppService {

  constructor(
    @Inject('BILLING_SERVICE') private readonly billingProxyClient:ClientKafka
  ) {}


  getHello(): string {
    return 'Hello World!';
  }

  createOrder(Payload:createOrderDto){
    this.billingProxyClient.emit('order_created', new OrderCreatedEvent(
      "123",
      Payload.userId,
      Payload.productName,
      Payload.quantity
    ));
  }
}
