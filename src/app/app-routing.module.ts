import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: "home", loadChildren: () => import("./features/home/home.module").then(m => m.HomeModule)
  },
  {
    path: "champions", loadChildren: () => import("./features/champions/champions.module").then(m => m.ChampionsModule)
  },
  {
    path: "calles", loadChildren: () => import("./features/calles/calles.module").then(m => m.CallesModule)
  },
  {
    path: "", redirectTo: "home", pathMatch: "full"
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
