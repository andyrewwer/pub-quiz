import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {AppRoutingModule} from './app-routing.module';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule, MatRippleModule, MatListModule} from '@angular/material';
import { HomeComponent } from './components/home/home.component';
import { GameComponent } from './components/game/game.component';
import {Broadcaster} from './services/broadcaster';
import { AnswerComponent } from './components/admin/answer/answer.component';
import {MatTabsModule} from '@angular/material/tabs';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { LeaderboardComponent } from './components/admin/leaderboard/leaderboard.component';
import { AdminComponent } from './components/admin/admin.component';
import { AdminHomeComponent } from './components/admin/admin-home/admin-home.component';
import { ConfirmationModalComponent } from './components/modals/confirmation-modal/confirmation-modal.component';
import {ModalService} from './services/modal.service';
import {MatDialogModule} from '@angular/material/dialog';
import { PlayersComponent } from './components/admin/players/players.component';
import { ErrorGameRoomNotFoundModalComponent } from './components/modals/error-game-room-not-found-modal/error-game-room-not-found-modal.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    GameComponent,
    AnswerComponent,
    LeaderboardComponent,
    AdminComponent,
    AdminHomeComponent,
    ConfirmationModalComponent,
    PlayersComponent,
    ErrorGameRoomNotFoundModalComponent,
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
    ErrorGameRoomNotFoundModalComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
