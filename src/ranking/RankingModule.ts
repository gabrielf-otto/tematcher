import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RankingController } from './RankingController';
import { RankingService } from './RankingService';

import { RankingSchema } from './schemas/RankingSchema';

@Module({
   imports: [
      MongooseModule.forFeature([
         {
            name: 'Category',
            schema: RankingSchema
         }]
      )
   ],

   controllers: [RankingController],
  providers: [RankingService]
})
export class CategoryModule {}
