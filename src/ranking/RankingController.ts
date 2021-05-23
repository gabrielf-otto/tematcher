import { Controller, Get, Param } from '@nestjs/common';
import { RankingService } from './RankingService';
import { Player } from 'src/player/schemas/PlayerSchema';


@Controller('rankings')
export class RankingController 
{
   constructor(
      private rankingService: RankingService
   ) 
   {}

   @Get(':ranking')
   async show(@Param() ranking): Promise<Player[]> 
   {
      return await this.rankingService.showRanking(ranking);
   }
}
