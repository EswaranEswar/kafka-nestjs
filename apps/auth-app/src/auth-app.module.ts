import { Module } from '@nestjs/common';
import { AuthAppController } from './auth-app.controller';
import { AuthAppService } from './auth-app.service';
import { BillingAppModule } from 'apps/billing-app/src/billing-app.module';

@Module({
  imports: [
    BillingAppModule
  ],
  controllers: [AuthAppController],
  providers: [AuthAppService],
})
export class AuthAppModule {}
