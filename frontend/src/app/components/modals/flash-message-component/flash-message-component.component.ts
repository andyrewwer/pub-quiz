import { Component, OnInit } from '@angular/core';
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
    this.flashMessageService.currentMessage.subscribe(msg => this.updateMessage(msg));
    this.flashMessageService.currentCountdown.subscribe(msg => {
      this.countdown(Number.parseInt(msg));
    });
  }

  updateMessage(msg: string) {
    if (msg && msg != '' && msg != null) {
      this.message = msg;
      this.showMessage = true;

      setTimeout(() => {
        this.showMessage = false;
        this.message = '';
      }, 3000);
    }
  }

  countdown(start: number) {
    if (!!start && start >= 0) {
      console.log('counting down ', start);
      this.message = start.toString();
      this.showMessage = true;
      setTimeout(() => {
        this.showMessage = false;
        this.countdown(start - 1);
      }, 1000);
    }
  }
}