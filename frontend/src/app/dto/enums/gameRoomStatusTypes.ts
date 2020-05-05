import {ViewValue} from './viewValue';

export enum GameRoomStatusTypes {
  CREATED = 'CREATED',
  STARTED = 'STARTED',
  FINISHED = 'FINISHED'
}
// TODO SOMETHING WITH THESE STATUSESSSSS LOL
// FOR NOW SHOULD JUST BE ABLE TO JOIN A "CREATED" GAME, LATER WILL BE TO VIEW STARTED

export namespace GameRoomStatusTypes {
  export const gameRoomStatusTypes: ViewValue[] = [
    {value: GameRoomStatusTypes.CREATED, viewValue: 'Created'},
    {value: GameRoomStatusTypes.STARTED, viewValue: 'Started'},
    {value: GameRoomStatusTypes.FINISHED, viewValue: 'Finished'}
  ];
}
