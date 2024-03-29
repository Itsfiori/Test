import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectivesComponent } from './directives/directives.component';

const routes: Routes = [
{path:'baxture', loadChildren:()=>import('./lazybaxture/lazybaxture.module').then(mod=>mod.LazybaxtureModule)}
];

// C:\Users\LENOVO YOGA7\Desktop\New folder\lazy\src\app\lazy\lazymodule\lazymodule.module.ts
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
