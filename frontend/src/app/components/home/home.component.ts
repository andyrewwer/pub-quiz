import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {PlayerEventService} from '../../services/player-event.service';
import {PlayerService} from '../../services/player.service';

@Component({
  selector: 'app-home-component',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public form: FormGroup;

  constructor(private builder: FormBuilder,
              private playerService: PlayerService,
              private playerEventService: PlayerEventService,
              private router: Router) {
    this.form = builder.group({
      roomcode: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(4)]],
      name: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(24)]],
    });
  }

  ngOnInit() {
  }

  submit() {
    console.log(this.form);
    this.playerService.save(this.form.value).subscribe(
      player => {
        console.log('player', player);
        this.playerService.setPlayer(player);
        this.playerEventService.fire(player);
        this.router.navigate(['/game/' + player.roomcode]);
      }
    );
  }

}
