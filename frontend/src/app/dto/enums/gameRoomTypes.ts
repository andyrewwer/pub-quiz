import {ViewValue} from './viewValue';

export enum GameRoomTypes {
  QUIZ = 'QUIZ',
}

export namespace GameRoomTypes {
  export const gameRoomTypes: ViewValue[] = [
    {value: GameRoomTypes.QUIZ, viewValue: 'Quiz'}
  ];
}
