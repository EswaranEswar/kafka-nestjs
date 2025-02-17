import { Module } from '@nestjs/common';
import { BillingAppController } from './billing-app.controller';
import { BillingAppService } from './billing-app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name:'AUTH_SERVICE',
        transport:Transport.KAFKA,
        options:{
          client:{
            clientId:'auth',
            brokers:['localhost:9092'],
          },
          consumer:{
            groupId:'auth-consumer',
          },
          subscribe:{
            fromBeginning:true,
          }
        }
      }
    ])
  ],
  controllers: [BillingAppController],
  providers: [BillingAppService],
  exports:[BillingAppService]
})
export class BillingAppModule {}
