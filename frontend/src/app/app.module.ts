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
import {AnswerComponent} from './components/admin/admin-home/answer/answer.component';
import {MatTabsModule} from '@angular/material/tabs';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LeaderboardComponent} from './components/admin/admin-home/leaderboard/leaderboard.component';
import {AdminComponent} from './components/admin/admin.component';
import {AdminHomeComponent} from './components/admin/admin-home/admin-home.component';
import {ConfirmationModalComponent} from './components/modals/confirmation-modal/confirmation-modal.component';
import {ModalService} from './services/modal.service';
import {MatDialogModule} from '@angular/material/dialog';
import {PlayersComponent} from './components/admin/admin-home/players/players.component';
import {CreateGameModalComponent} from './components/modals/create-game-modal/create-game-modal.component';
import { GameRoomPipePipe } from './dto/pipes/game-room-pipe.pipe';
import { GameRoomStatusPipe } from './dto/pipes/game-room-status-pipe.pipe';
import {BasicMessageModalComponent} from './components/modals/basic-error-modal/basic-message-modal.component';
import { AddQuestionComponent } from './components/game/imagine/add-question/add-question.component';
import { ImagineComponent } from './components/game/imagine/imagine.component';
import { EditQuestionsComponent } from './components/game/imagine/edit-questions/edit-questions.component';
import { ImagineAdminComponent } from './components/admin/imagine-admin/imagine-admin.component';


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
    MatDialogModule
  ],
  exports: [
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatListModule,
    MatTabsModule,
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
    CreateGameModalComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
