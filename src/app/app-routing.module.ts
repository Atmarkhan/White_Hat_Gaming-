import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GameListComponent} from './game-list/game-list.component';

const routes: Routes = [
  {path: '', redirectTo: 'gamelist?game=new', pathMatch: 'full'},
  {path: 'gamelist', component: GameListComponent,}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
