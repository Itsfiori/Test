import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import path from 'path';
import { AdmincComponent } from './adminc/adminc.component';

const routes: Routes = [
  {path:'admin',component:AdmincComponent},
  {
    path:'admin',loadChildren:()=>import('./admin.module').then(val=>val.AdminModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
