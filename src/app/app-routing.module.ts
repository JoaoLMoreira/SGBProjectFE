import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './core/layouts/dashboard/dashboard.component';

const routes: Routes = [
  { 
    path: '',
    component: DashboardComponent,
    loadChildren: () => import('./modules/bovino/bovino.module').then(m => m.BovinoModule) 
  }, { 
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule) 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
