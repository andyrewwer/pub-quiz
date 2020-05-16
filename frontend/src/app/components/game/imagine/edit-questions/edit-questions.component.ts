import { Component, OnInit } from '@angular/core';
import {ImagineIfQuestion} from '../../../../dto/imagineIfQuestion';
import {QuestionService} from '../../../../services/imagine/question.service';

@Component({
  selector: 'app-edit-questions',
  templateUrl: './edit-questions.component.html',
  styleUrls: ['./edit-questions.component.css']
})
export class EditQuestionsComponent implements OnInit {

  questions: Array<ImagineIfQuestion>;

  constructor(private questionService: QuestionService) { }

  ngOnInit() {
    this.questionService.findAll().subscribe(
      _questions => {
        this.questions = _questions;
      }, err => {
        console.error(err);
      }
    );
  }

  update(question: ImagineIfQuestion) {
    this.questionService.save(question).subscribe(
      question => {
        console.log('Success', question);
      }, err  => {
        console.error('err');
      }
    );
  }
}
