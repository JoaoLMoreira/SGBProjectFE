import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BovinoRoutingModule } from './bovino-routing.module';
import { BovinoComponent } from './bovino.component';
import { BovinoListComponent } from './views/bovino-list/bovino-list.component';
import { BovinoFormComponent } from './views/bovino-form/bovino-form.component';
import { HttpClientModule } from '@angular/common/http';
import { BovinoService } from './providers/bovino.service';


@NgModule({
  declarations: [
    BovinoComponent,
    BovinoListComponent,
    BovinoFormComponent
  ],
  imports: [
    CommonModule,
    BovinoRoutingModule,
    HttpClientModule
  ],
  providers:[
    BovinoService
  ]
})
export class BovinoModule { }
