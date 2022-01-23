import { Routes, RouterModule } from '@angular/router';
import { ChampionsComponent } from './champions.component';
import { NgModule } from '@angular/core';
import { ChampionComponent } from './champion/champion.component';

const routes: Routes = [
  {path: "", component: ChampionsComponent},
  {path: ":name", component: ChampionComponent}
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ChampionsRoutingModule { }
