import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BovinoRoutingModule } from './bovino-routing.module';
import { BovinoComponent } from './bovino.component';
import { BovinoListComponent } from './views/bovino-list/bovino-list.component';
import { BovinoFormComponent } from './views/bovino-form/bovino-form.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxsModule } from '@ngxs/store';
import { BovinoState } from './store/bovino.state';
import { MatTableModule } from '@angular/material/table';

import {MatMenuModule} from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [
    BovinoComponent,
    BovinoListComponent,
    BovinoFormComponent
  ],
  imports: [
    CommonModule,
    BovinoRoutingModule,
    HttpClientModule,
    MatTableModule,
    MatMenuModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    NgxsModule.forFeature([BovinoState])
  ],

})
export class BovinoModule { }
