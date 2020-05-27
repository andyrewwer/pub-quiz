import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlashMessageService {

  private message = new BehaviorSubject('');
  currentMessage = this.message.asObservable();
  private hideSubject = new BehaviorSubject('');
  hide = this.hideSubject.asObservable();

  constructor() { }

  updateFlashMessage(message: string) {
    this.message.next(message);
  }

  hideMessage() {
    this.hideSubject.next(null);
  }
}
