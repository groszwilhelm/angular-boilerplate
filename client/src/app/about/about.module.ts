import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { AboutRoutingModule } from './about-router.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AboutRoutingModule
  ],
  declarations: [],
  providers: [],
})
export class AboutModule { }
