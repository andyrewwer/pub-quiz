import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {GameComponent} from './components/game/game.component';
import {AnswerComponent} from './components/admin/admin-home/answer/answer.component';
import {LeaderboardComponent} from './components/admin/admin-home/leaderboard/leaderboard.component';
import {AdminComponent} from './components/admin/admin.component';


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'answer', component: AnswerComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'leaderboard', component: LeaderboardComponent},
  {path: 'game/:roomId', component: GameComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {

}
