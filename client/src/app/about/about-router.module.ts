import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';

/**
 * We can declare and export the components in the routing module to avoid them being imported in the about.module as well
 * cleans the code a bit 😁
 */
const declarationsExports = [
  AboutComponent
];

const routes: Routes = [
  {
    path: '',
    component: AboutComponent
  }
];

@NgModule({
  declarations: [
    declarationsExports
  ],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule,
    declarationsExports
  ]
})
export class AboutRoutingModule { }
