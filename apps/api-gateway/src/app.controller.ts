import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { createOrderDto } from './app.dto';

@Controller('api-gateway')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('order')
  createOrder(@Body() payload:createOrderDto){
    return this.appService.createOrder(payload);
  }
}
