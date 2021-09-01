import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    FormsModule
  ]
})
export class AdminModule { }
