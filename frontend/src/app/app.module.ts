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


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    GameComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatListModule
  ],
  exports: [
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatListModule
  ],
  providers: [
    Broadcaster,
    HttpClient,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
