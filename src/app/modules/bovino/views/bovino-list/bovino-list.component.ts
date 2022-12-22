import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Select } from '@ngxs/store';
import { BehaviorSubject, Observable, Subject, takeUntil } from 'rxjs';
import { BovinoStore } from '../../store/bovino.actions';
import { Bovino } from '../../store/bovino.entity';
import { BovinoState } from '../../store/bovino.state';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  templateUrl: './bovino-list.component.html',
  styleUrls: ['./bovino-list.component.scss']
})
export class BovinoListComponent implements OnInit, OnDestroy {
  @Select(BovinoState.bovinoList)
  bovinolist$!: Observable<Bovino[]>

  today: Date = new Date();

  displayedColumns: string[] = [
    "apelido",
    "sexo",
    "raca",
    "pasto",
    "actions"
  ];
   
  private unsubscribe: Subject<void> = new Subject()

  constructor(private store:Store) { }

  ngOnInit(): void {
    this.store.dispatch(BovinoStore.GetAll).pipe(takeUntil(this.unsubscribe))
  }
  
  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
