import { Controller, Get } from '@nestjs/common';
import { AuthAppService } from './auth-app.service';
import { MessagePattern } from '@nestjs/microservices';
import { GetUserIdReques } from 'apps/billing-app/src/get-userid-request.dto';
import { BillingAppService } from 'apps/billing-app/src/billing-app.service';

@Controller('auth')
export class AuthAppController {
  constructor(
    private readonly authAppService: AuthAppService,
    private readonly billingAppService: BillingAppService
  ) {}

  @Get()
  getHello(): string {
    return this.authAppService.getHello();
  }

  @MessagePattern('get_user')
  getUser(data:any){
    const user = this.authAppService.getUser(data.value);
    return user;
  }
}
