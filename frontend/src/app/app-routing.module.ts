import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HeaderComponent} from './header/header.component';
import {HomeComponent} from './components/home/home.component';
import {GameComponent} from './components/game/game.component';


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
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
