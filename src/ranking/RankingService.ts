import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';
import { Player } from 'src/player/schemas/PlayerSchema';
import { ERankingLetter } from './models/ERankingLetter';


@Injectable()
export class RankingService 
{
   constructor(
      @InjectModel('Player') private playerModel: Model<Player>
   )
   {}

   async showRanking(ranking: ERankingLetter): Promise<Player[]> 
   {
      return await this.playerModel.find({ ranking }).exec();
   }
}
