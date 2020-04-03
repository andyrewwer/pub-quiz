import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {GameComponent} from './components/game/game.component';
import {AnswerComponent} from './components/answer/answer.component';
import {LeaderboardComponent} from './components/leaderboard/leaderboard.component';


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'answer', component: AnswerComponent},
  {path: 'leaderboard', component: LeaderboardComponent},
  {path: 'game/:roomcode', component: GameComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {

}
