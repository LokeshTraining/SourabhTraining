import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import {RouterModule} from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';


// const route:Route[]=[
//   {path:'home',component:LoginComponent},
//   {path:'about',component:AboutComponent},
//   {path:'login',component:LoginComponent},
//   {path:'main',component:MainComponent},
//   {path:'',component:LoginComponent}
// ]


@NgModule({
  imports: [
    CommonModule,
    ],
  declarations: [],
  exports:[RouterModule]
})
export class AppRoutingModule { }
