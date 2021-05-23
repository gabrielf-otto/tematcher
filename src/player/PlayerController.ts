import { 
	Controller, 
	Get, Post, 
	Put, 
	Delete, 
	Body, 
	Param, 
} from '@nestjs/common';
import { IPlayer } from './models/IPlayer';
import { PlayerService } from './PlayerService';


@Controller('players')
export class PlayerController 
{
	constructor(
		private playerService: PlayerService
	) {}

	@Get()
	async index() {
		return await this.playerService.listPlayers();
	}

	@Get(':id')
	async show(@Param() id) {
		return await this.playerService.showPlayer(id);
	}

	@Post()
	async create(@Body() data): Promise<IPlayer> 
	{
		return await this.playerService.createPlayer(data);
	}

	@Delete(':id')
	async delete(@Param() id) {
		return await this.playerService.deletePlayer(id);
	}
}
