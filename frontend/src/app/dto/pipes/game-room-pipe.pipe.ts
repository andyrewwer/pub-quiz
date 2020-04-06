import { Pipe, PipeTransform } from '@angular/core';
import {GameRoomTypes} from '../enums/gameRoomTypes';
import gameRoomTypes = GameRoomTypes.gameRoomTypes;

@Pipe({
  name: 'gameRoomPipe'
})
export class GameRoomPipePipe implements PipeTransform {
  viewValues = gameRoomTypes;

  transform(value: any, ...args: any[]): any {
    const type = this.viewValues.find(val => val.value === value);
    return !!type ? type.viewValue : '';
  }

}
