import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdmincComponent } from './adminc/adminc.component';
import { MultiPipe } from './adminc/multi.pipe';


@NgModule({
  declarations: [
    AdmincComponent,
    MultiPipe
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
