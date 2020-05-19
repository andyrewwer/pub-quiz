import {ViewValue} from './viewValue';

export enum GameRoomStatusTypes {
  CREATED = 'CREATED',
  STARTED = 'STARTED',
  FINISHED = 'FINISHED'
}

export namespace GameRoomStatusTypes {
  export const gameRoomStatusTypes: ViewValue[] = [
    {value: GameRoomStatusTypes.CREATED, viewValue: 'Created'},
    {value: GameRoomStatusTypes.STARTED, viewValue: 'Started'},
    {value: GameRoomStatusTypes.FINISHED, viewValue: 'Finished'}
  ];
}
