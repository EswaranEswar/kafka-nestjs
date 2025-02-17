import { Controller, Get, Inject, OnModuleInit } from '@nestjs/common';
import { BillingAppService } from './billing-app.service';
import { EventPattern } from '@nestjs/microservices';
import { OrderCreatedEvent } from './order-created.event';
import { ClientKafka } from '@nestjs/microservices';


export class BillingAppController implements OnModuleInit {
  constructor(
    private readonly billingAppService: BillingAppService,
    @Inject('AUTH_SERVICE') private readonly authClient:ClientKafka
  ) {}

  @Get()
  getHello(): string {
    return this.billingAppService.getHello();
  }

  @EventPattern('order_created')
  handleOrderCreated(data:OrderCreatedEvent){
    console.log(data);
    this.billingAppService.handleOrderCreated(data);
  }
  onModuleInit(){
    this.authClient.subscribeToResponseOf('get_user');
  }
}
