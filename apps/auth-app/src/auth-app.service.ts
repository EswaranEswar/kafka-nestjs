import { Injectable } from '@nestjs/common';
import { GetUserRequest } from './get-user-request.dto';

@Injectable()
export class AuthAppService {

  private readonly users:any[] = [
    {
      userId:'143',
      stripeUserId:'1234567890',
    },
    {
      userId:'234',
      stripeUserId:'1234567891',
    }
  ];

  getHello(): string {
    return 'Hello World!';
  }

  getUser(getUserRequest:GetUserRequest){
    
    return this.users.find((user)=>user.userId === getUserRequest.userId);  
  }
}
