import { Injectable } from '@nestjs/common';
import { OrderCreatedEvent } from './order-created.event';
import { ClientKafka } from '@nestjs/microservices';
import { Inject } from '@nestjs/common';
import { GetUserIdReques } from './get-userid-request.dto';


@Injectable()
export class BillingAppService {

  constructor(
    @Inject('AUTH_SERVICE') private readonly authClient:ClientKafka,
  ){}

  getHello(): string {
    return 'Hello World!';
  }
 
  handleOrderCreated(data:OrderCreatedEvent){
    console.log(data);
    this.authClient.send(
      'get_user',
      new GetUserIdReques(data.userId)
    ).subscribe((user) => {
      console.log(`Billling user with stripe ID ${user.stripeUserId} a price of ${data.quantity}...`,);
    })
  }
}
