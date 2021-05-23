import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { User } from './schemas/UserSchema';


interface ICreateUserRequest {
	name: string;
	email: string;
	password: string;
}

@Injectable()
export class UserService 
{
	constructor(
		@InjectModel('User') private userModel: Model<User>
	) 
	{}

	async listUsers() {
		return this.userModel.find();
	}

	async createUser({ name, email, password }: ICreateUserRequest): Promise<User> 
	{
		const user = await this.userModel.findOne({ email });
		if (user) 
		{
			throw new Error(
				'E-mail already exists'
			);
		}

		return await this.userModel.create({
			name,
			email,
			password
		});
	}

	async updateUser({ name, password }): Promise<User> {
		return;
	}
}
