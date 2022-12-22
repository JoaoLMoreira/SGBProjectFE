import { Bovino } from "./bovino.entity";

export namespace BovinoStore{
    export interface StateModel{
        bovinos:Bovino[];
        selected?:Bovino;
    }
    export class GetAll{
        static readonly type = "[bovino] Get All";
    }
    export class GetOne{
        static readonly type = "[bovino] Get One";
        constructor(public id:string){}
    }
    export class Create{
        static readonly type = "[bovino] Create";
        constructor(public data:Bovino){}
    }
    export class Update{
        static readonly type = "[bovino] Update";
        constructor(public id:string, public data:Bovino){}
    }
    export class Delete{
        static readonly type = "[bovino] Delete";
        constructor(public id:string, public motivo:number){}
    }
}
