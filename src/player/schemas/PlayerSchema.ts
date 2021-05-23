import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document} from 'mongoose';
import { ERankingLetter } from '../../ranking/models/ERankingLetter';


@Schema({ timestamps: true })
export class Player extends Document 
{
	@Prop({ required: true })
	user_id: string

	@Prop()
	nickname: string

	@Prop()
	ranking: ERankingLetter

	@Prop()
	position: number
}

export const PlayerSchema = SchemaFactory.createForClass(Player);
