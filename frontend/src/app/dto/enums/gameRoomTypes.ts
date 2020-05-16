import {ViewValue} from './viewValue';

export enum GameRoomTypes {
  QUIZ = 'QUIZ',
  // IMAGINE_IF = 'IMAGINE_IF',
}

export namespace GameRoomTypes {
  export const gameRoomTypes: ViewValue[] = [
    {value: GameRoomTypes.QUIZ, viewValue: 'Pub Quiz'},
    // {value: GameRoomTypes.IMAGINE_IF, viewValue: 'Imagine If'},
  ];
}
