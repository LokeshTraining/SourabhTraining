import { LoginComponent } from './../../login/login.component';
import { HomeComponent } from './../home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({

  imports: [
    CommonModule
  ],
  exports:[HomeComponent],
  declarations: [HomeComponent]
})
export class FeatureModule { }
