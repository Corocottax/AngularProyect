import { CalleComponent } from './calle/calle.component';
import { Routes, RouterModule } from '@angular/router';
import { CallesComponent } from './calles.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {path: "", component: CallesComponent},
  {path: ":calle", component: CalleComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CallesRoutingModule { }
