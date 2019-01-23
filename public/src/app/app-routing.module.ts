import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HangmanComponent } from './hangman/hangman.component';
import { StatsComponent } from './stats/stats.component';

const routes: Routes = [
  {path : '', component : HangmanComponent},
  { path : 'room/:id/', component : HangmanComponent},
  // { path : 'room/:id/', component : HangmanComponent},
  { path : 'data', component : StatsComponent},
  { path : 'hangman/:name', component : HangmanComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
