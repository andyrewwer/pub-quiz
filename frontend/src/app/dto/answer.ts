export class Answer {
  id: number;
  answer: string;
  correct: Boolean;
  bonus: Boolean;

  constructor(args: Answer = <Answer>{}) {
    this.id = args.id;
    this.answer = args.answer;
    this.correct = args.correct;
    this.bonus = args.bonus;
  }

}
