import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './admin/child/child.component';
import { PipelinePipe } from './pipeline.pipe';
import { DirectivesComponent } from './directives/directives.component';
import { MultiplyPipe } from './lazy1/multiply.pipe';
import { LoginComponent } from './lazy2/login/login.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ParentComponent } from './parent/parent.component';
import { DiDirective } from './di.directive';
import { BaxdirDirective } from './baxdir.directive';
import { Comp1Component } from './lazybaxture/comp1/comp1.component';
import { HttpClientModule } from '@angular/common/http';
import { Comp2Component } from './comp2/comp2.component';
@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,Comp1Component,
    PipelinePipe,
    DirectivesComponent,
    MultiplyPipe,
    LoginComponent,
    ParentComponent,
    DiDirective,
    BaxdirDirective,
    Comp2Component,
    
  ],
  imports: [ FormsModule,
    BrowserModule,HttpClientModule,
    AppRoutingModule,ReactiveFormsModule
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
