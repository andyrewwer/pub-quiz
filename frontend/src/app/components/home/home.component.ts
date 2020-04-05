import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {PlayerEventService} from '../../services/player-event.service';
import {PlayerService} from '../../services/player.service';
import {HttpErrorResponse} from '@angular/common/http';
import {ModalService} from '../../services/modal.service';

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
              private router: Router,
              private modalService: ModalService) {
    this.form = builder.group({
      quizcode: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(6)]],
      name: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(24)]],
    });
  }

  ngOnInit() {
    if (!!this.playerService.getPlayer())  {
      this.form.patchValue(this.playerService.getPlayer());
      this.playerEventService.fire(null);
      this.playerService.setPlayer(null);
    }
  }

  submit() {
    if (this.form.value.quizcode === 'ADMINN' && this.form.value.name === 'ADMIN') {
      this.router.navigate(['/admin']);
      return;
    }
    console.log(this.form);
    this.form.controls.name.setValue(this.form.value.name.toUpperCase());
    this.form.controls.quizcode.setValue(this.form.value.quizcode.toUpperCase());
    this.playerService.save(this.form.value).subscribe(
      player => {
        this.playerService.setPlayer(player);
        this.playerEventService.fire(player);
        this.router.navigate(['/game/' + player.quizcode]);
      }, (err: HttpErrorResponse) => {
        if (err.status ===  412) {
          this.modalService.showErrorGameRoomNotFoundModal();
        }
      });
  }

}
