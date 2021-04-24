import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardforcuroselComponent } from './cardforcurosel/cardforcurosel.component';

const routes: Routes = [
  {path:'Home',component:CardforcuroselComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
