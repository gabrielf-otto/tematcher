import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './UserService';


@Controller('users')
export class UserController 
{
   constructor(
      private userService: UserService
   ) {}

   @Get()
   async index() {
      return this.userService.listUsers();
   }

   @Post()
   async store(@Body() data) {
      return await this.userService.createUser(data);
   }
}
