export class QuizAnswer {
  id: number;
  answer: string;
  correct: Boolean;
  bonus: Boolean;

  constructor(args: QuizAnswer = <QuizAnswer>{}) {
    this.id = args.id;
    this.answer = args.answer;
    this.correct = args.correct;
    this.bonus = args.bonus;
  }

}
