
export enum ISLug {

}

export enum IOp {
   ADD = '+',
   SUB = '-'
}

export interface IEvent {
   slug: string;
   op: string;
   value: number;
}
