import {ViewValue} from './viewValue';

export enum GameRoomStatusTypes {
  CREATED = 'CREATED',
  ROUND_STARTED = 'ROUND_STARTED',
  ROUND_FINISHED = 'ROUND_FINISHED',
  COMPLETE = 'COMPLETE'
}

export namespace GameRoomStatusTypes {
  export const gameRoomStatusTypes: ViewValue[] = [
    {value: GameRoomStatusTypes.CREATED, viewValue: 'Created'},
    {value: GameRoomStatusTypes.ROUND_STARTED, viewValue: 'Round Started'},
    {value: GameRoomStatusTypes.ROUND_FINISHED, viewValue: 'Round Finished'},
    {value: GameRoomStatusTypes.COMPLETE, viewValue: 'Game Over'}
  ];
}
