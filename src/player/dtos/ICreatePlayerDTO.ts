import { ERankingLetter } from '../../ranking/models/ERankingLetter';


export interface ICreatePlayerDTO {
	user_id?: string;
	nickname: string;
	ranking: ERankingLetter;
	position: number;
}
