import { Pipe, PipeTransform } from '@angular/core';
import {GameRoomStatusTypes} from '../enums/gameRoomStatusTypes';
import gameRoomStatusTypes = GameRoomStatusTypes.gameRoomStatusTypes;

@Pipe({
  name: 'gameRoomStatus'
})
export class GameRoomStatusPipe implements PipeTransform {

  viewValues = gameRoomStatusTypes;

  transform(value: any, ...args: any[]): any {
    const type = this.viewValues.find(val => val.value === value);
    return !!type ? type.viewValue : '';
  }

}
