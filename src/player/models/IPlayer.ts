
import { ERankingLetter } from '../../ranking/models/ERankingLetter';


export interface IPlayer {
	// id: string;
	user_id: string;
	nickname: string;
	ranking: ERankingLetter;
	position: number;
}
