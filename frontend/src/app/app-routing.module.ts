import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {QuizComponent} from './components/game/quiz/quiz.component';
import {AnswerComponent} from './components/admin/quiz-admin/answer/answer.component';
import {LeaderboardComponent} from './components/admin/quiz-admin/leaderboard/leaderboard.component';
import {AdminComponent} from './components/admin/admin.component';
import {ImagineComponent} from './components/game/imagine/imagine.component';


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'answer', component: AnswerComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'game/quiz/:roomId', component: QuizComponent},
  {path: 'game/imagine_if/:roomId', component: ImagineComponent},
  {path: 'leaderboard', component: LeaderboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {

}
