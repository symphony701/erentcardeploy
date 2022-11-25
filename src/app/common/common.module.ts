import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { SideBarComponent } from './side-bar/side-bar.component';
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    SideBarComponent
  ],
  imports: [
    RouterModule,
    CommonModule
  ],
  exports: [
    SideBarComponent
  ]
})

export class SharedModule{}
