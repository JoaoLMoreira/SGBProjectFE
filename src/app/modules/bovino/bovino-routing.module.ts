import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BovinoComponent } from './bovino.component';
import { BovinoFormComponent } from './views/bovino-form/bovino-form.component';
import { BovinoListComponent } from './views/bovino-list/bovino-list.component';

const routes: Routes = [
  { 
    path: '',
    component: BovinoComponent,
    children: [
      {
        path:'bovinos',
        component:BovinoListComponent
      },
      {
        path:'bovinos/adicionar',
        component:BovinoFormComponent
      },
      {
        path:'bovinos/editar/:id',
        component:BovinoFormComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BovinoRoutingModule { }
