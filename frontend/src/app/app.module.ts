import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {AppRoutingModule} from './app-routing.module';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatListModule,
  MatRippleModule
} from '@angular/material';
import {HomeComponent} from './components/home/home.component';
import {QuizComponent} from './components/game/quiz/quiz.component';
import {Broadcaster} from './services/broadcaster';
import {AnswerComponent} from './components/admin/quiz-admin/answer/answer.component';
import {MatTabsModule} from '@angular/material/tabs';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LeaderboardComponent} from './components/admin/quiz-admin/leaderboard/leaderboard.component';
import {AdminComponent} from './components/admin/admin.component';
import {AdminHomeComponent} from './components/admin/admin-home/admin-home.component';
import {ConfirmationModalComponent} from './components/modals/confirmation-modal/confirmation-modal.component';
import {ModalService} from './services/modal.service';
import {MatDialogModule} from '@angular/material/dialog';
import {PlayersComponent} from './components/admin/quiz-admin/players/players.component';
import {CreateGameModalComponent} from './components/modals/create-game-modal/create-game-modal.component';
import {GameRoomPipePipe} from './dto/pipes/game-room-pipe.pipe';
import {GameRoomStatusPipe} from './dto/pipes/game-room-status-pipe.pipe';
import {BasicMessageModalComponent} from './components/modals/basic-message-modal/basic-message-modal.component';
import {AddQuestionComponent} from './components/admin/imagine-admin/add-question/add-question.component';
import {ImagineComponent} from './components/game/imagine/imagine.component';
import {EditQuestionsComponent} from './components/admin/imagine-admin/edit-questions/edit-questions.component';
import {ImagineAdminComponent} from './components/admin/imagine-admin/imagine-admin.component';
import {ImagineLeaderboardComponent} from './components/game/imagine/imagine-leaderboard/imagine-leaderboard.component';
import {ImagineGameComponent} from './components/game/imagine/imagine-game/imagine-game.component';
import {FlashMessageComponentComponent} from './components/modals/flash-message-component/flash-message-component.component';
import {ChartsModule} from 'ng2-charts';
import {ChartComponent} from './components/tools/chart/chart.component';
import {ImagineHomeComponent} from './components/game/imagine/imagine-home/imagine-home.component';
import {QuizAdminComponent} from './components/admin/quiz-admin/quiz-admin.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {FooterComponent} from './components/footer/footer.component';
import {StartGameModalComponent} from './components/modals/start-game-modal/start-game-modal.component';
import { EndGameModalComponent } from './components/modals/end-game-modal/end-game-modal.component';
import { ImagineFinalComponent } from './components/game/imagine/imagine-final/imagine-final.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    QuizComponent,
    AnswerComponent,
    LeaderboardComponent,
    AdminComponent,
    AdminHomeComponent,
    ConfirmationModalComponent,
    PlayersComponent,
    BasicMessageModalComponent,
    CreateGameModalComponent,
    GameRoomPipePipe,
    GameRoomStatusPipe,
    AddQuestionComponent,
    EditQuestionsComponent,
    ImagineComponent,
    ImagineAdminComponent,
    ImagineLeaderboardComponent,
    ImagineGameComponent,
    FlashMessageComponentComponent,
    ChartComponent,
    ImagineHomeComponent,
    QuizAdminComponent,
    FooterComponent,
    StartGameModalComponent,
    EndGameModalComponent,
    ImagineFinalComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatListModule,
    MatTabsModule,
    MatToolbarModule,
    MatDialogModule,
    ChartsModule
  ],
  exports: [
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatListModule,
    MatTabsModule,
    MatToolbarModule,
    MatDialogModule
  ],
  providers: [
    Broadcaster,
    HttpClient,
    ModalService
  ],
  entryComponents: [
    ConfirmationModalComponent,
    BasicMessageModalComponent,
    CreateGameModalComponent,
    StartGameModalComponent,
    EndGameModalComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
