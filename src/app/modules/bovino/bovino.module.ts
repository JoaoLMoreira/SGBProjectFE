import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgxsModule } from '@ngxs/store';

import { BovinoRoutingModule } from './bovino-routing.module';
import { BovinoComponent } from './bovino.component';
import { BovinoState } from './store/bovino.state';
import { BovinoFormComponent } from './views/bovino-form/bovino-form.component';
import { BovinoListComponent } from './views/bovino-list/bovino-list.component';

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
    MatToolbarModule,
    NgxsModule.forFeature([BovinoState])
  ],

})
export class BovinoModule { }
