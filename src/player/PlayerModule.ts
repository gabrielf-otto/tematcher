import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { PlayerController } from './PlayerController';
import { PlayerService } from './PlayerService';
import { PlayerSchema } from './schemas/PlayerSchema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Player',
        schema: PlayerSchema
      }
    ])
  ],

  controllers: [PlayerController],
  providers: [PlayerService]
})


export class PlayerModule {}
