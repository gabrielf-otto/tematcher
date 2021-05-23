import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MSchema } from 'mongoose';

import { Player } from 'src/player/schemas/PlayerSchema';
import { ERankingLetter } from '../models/ERankingLetter';
import { IEvent } from '../models/IEvent';


@Schema({ timestamps: true })
export class Ranking extends Document 
{
	@Prop()
   letter: ERankingLetter;

   @Prop()
   description: string;

   @Prop()
   events: IEvent[]

   @Prop({ type: MSchema.Types.ObjectId, ref: 'Player' })
   players: Player[]
}

export const RankingSchema = SchemaFactory.createForClass(Ranking);
