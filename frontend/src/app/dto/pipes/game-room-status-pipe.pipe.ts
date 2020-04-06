import { Pipe, PipeTransform } from '@angular/core';
import {GameRoomStatusTypes} from '../enums/gameRoomStatusTypes';
import gameRoomStatusTypes = GameRoomStatusTypes.gameRoomStatusTypes;

@Pipe({
  name: 'gameRoomStatusPipe'
})
export class GameRoomStatusPipePipe implements PipeTransform {

  viewValues = gameRoomStatusTypes;

  transform(value: any, ...args: any[]): any {
    const type = this.viewValues.find(val => val.value === value);
    return !!type ? type.viewValue : '';
  }

}
