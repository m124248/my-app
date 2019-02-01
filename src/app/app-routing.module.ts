import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClickMeComponent} from './click-me.component';

const routes: Routes = [
    { path: 'click', component: ClickMeComponent}
  ];



@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

