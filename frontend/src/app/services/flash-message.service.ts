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

  constructor() { }

  updateFlashMessage(message: string) {
    this.message.next(message);
  }

  updateCountdown(start: number ) {
    this.countdown.next(start.toString());
  }
}
