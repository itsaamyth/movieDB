import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const COMP_ROUTES: Routes = [
  {
      path: '', 
      children:[
       { path:'',component:HomeComponent},
      ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(COMP_ROUTES)],
  exports: [RouterModule],
})
export class ComponentsRoutingModule { }
