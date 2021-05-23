import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { ERankingLetter } from 'src/ranking/models/ERankingLetter';
import { Player } from './schemas/PlayerSchema';


interface ICreatePlayerRequest {
	user_id: string;
	nickname: string;
	ranking: ERankingLetter;
	position: number;
}

interface IUpdatePlayerRequest {

}

interface IUpdatePlayerRanking {
	player_id: string;
	ranking: ERankingLetter;
}

@Injectable()
export class PlayerService 
{
	constructor(
		@InjectModel('Player') private playerModel: Model<Player>
	) {}

	async listPlayers(): Promise<Player[]> {
		return this.playerModel.find();
	}
 
	async showPlayer(id: string): Promise<Player> {
		return this.playerModel.findOne({ id });
	}

	async createPlayer(data: ICreatePlayerRequest): Promise<Player> 
	{
		const player = new this.playerModel(data);
		await player.save();
		return player;
	}

	async updatePlayer(data: IUpdatePlayerRequest) {
		
	}

	async updatePlayerRanking({ player_id, ranking }: IUpdatePlayerRanking): Promise<Player> 
	{
		return await this.playerModel.findOneAndUpdate({ 
			id: player_id 
		}, 
		{ ranking }).exec();
	}

	async deletePlayer(id: string): Promise<void> {
		await this.playerModel.remove({ id });
	}
}
