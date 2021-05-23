import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { UserController } from './UserController';
import { UserService } from './UserService';
import { UserSchema } from './schemas/UserSchema';

@Module({
   imports: [
      MongooseModule.forFeature([
         {
            name: 'User',
            schema: UserSchema
         }
      ])
   ],

   controllers: [UserController],
   providers: [UserService]
})
export class UserModule {}
