import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import {NbInputModule} from '@nebular/theme';
import {NbEvaIconsModule} from "@nebular/eva-icons";
import {NbCheckboxModule} from "@nebular/theme";
import {NbButtonModule} from "@nebular/theme";
import {NbSelectModule} from "@nebular/theme";
import {NbLayoutModule} from "@nebular/theme";
import {NbTooltipModule} from "@nebular/theme";
import {NbTagModule} from "@nebular/theme";
import {NbFormFieldModule} from "@nebular/theme";
import {NbIconModule} from "@nebular/theme";

@NgModule({
  /*imports: [
    NbEvaIconsModule,
    NbInputModule
  ],*/
  exports:[
    NbEvaIconsModule,
    NbInputModule,
    NbCheckboxModule,
    NbButtonModule,
    NbSelectModule,
    NbLayoutModule,
    NbTooltipModule,
    NbTagModule,
    NbFormFieldModule,
    NbIconModule
  ]

})
export class NebularComponentModule { }
