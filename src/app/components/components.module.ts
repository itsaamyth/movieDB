import {  NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ComponentsRoutingModule } from './components-routing.module';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { NgCircleProgressModule } from 'ng-circle-progress';

@NgModule({
  imports: [
    CommonModule,ComponentsRoutingModule,MatButtonModule,MatCardModule,NgCircleProgressModule.forRoot()
  ],
  declarations: [
    HomeComponent
  ],
})
export class ComponentsModule { }
