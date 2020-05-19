import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlashMessageService {

  private message = new BehaviorSubject('');
  currentMessage = this.message.asObservable();
  private countdown = new BehaviorSubject('');
  currentCountdown = this.countdown.asObservable();
  private hideSubject = new BehaviorSubject('');
  hide = this.hideSubject.asObservable();

  constructor() { }

  updateFlashMessage(message: string) {
    console.log('flashing message 2', message);
    this.message.next(message);
  }

  updateCountdown(start: number ) {
    this.countdown.next(start.toString());
  }

  hideMessage() {
    this.hideSubject.next(null);
  }
}
