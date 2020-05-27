import {Component, OnInit} from '@angular/core';
import {FlashMessageService} from '../../../services/flash-message.service';

@Component({
  selector: 'app-flash-message-component',
  templateUrl: './flash-message-component.component.html',
  styleUrls: ['./flash-message-component.component.css']
})
export class FlashMessageComponentComponent implements OnInit {

  showMessage: boolean;
  message: string;
  constructor(private flashMessageService: FlashMessageService) {
    this.showMessage = false;
  }

  ngOnInit() {
    this.flashMessageService.currentMessage.subscribe(msg => this.displayMessage(msg));
    this.flashMessageService.hide.subscribe(() => this.hideMessage());
  }

  hideMessage() {
    this.showMessage = false;
    this.message = '';
  }

  displayMessage(msg: string) {
    if (msg && msg !== '' && msg != null) {
      this.message = msg;
      this.showMessage = true;

      if (msg === '1') {
        setTimeout(() => {
          this.showMessage = false;
          this.message = '';
        }, 1000);

      }
    }
  }
}
