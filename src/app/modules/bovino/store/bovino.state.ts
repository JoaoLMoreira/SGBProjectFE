import { Injectable } from "@angular/core";
import { Selector } from "@ngxs/store";
import { Action, State, StateContext } from "@ngxs/store";
import { tap } from "rxjs";
import { BovinoService } from "../providers/bovino.service";
import { BovinoStore } from "./bovino.actions";
import { Bovino } from "./bovino.entity";

@State<BovinoStore.StateModel>({
    name: "bovino", 
    defaults: {
        bovinos: [],
        selected: undefined
    }
})
@Injectable()
export class BovinoState{
    @Selector()
    static bovinoList({bovinos}:BovinoStore.StateModel): Bovino[]{
       return bovinos; 
    }

    constructor(private bovinoservice: BovinoService){ }

    @Action(BovinoStore.GetAll)
    getAll({setState}:StateContext<BovinoStore.StateModel>):void{
        this.bovinoservice
            .getAll()
            .pipe(tap(result=> {
                console.log(result);
                setState({
                    bovinos: result,
                    selected: undefined
                });
            }))
            .subscribe();
    }
}