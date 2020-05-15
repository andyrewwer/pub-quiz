import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {QuestionService} from '../../../../services/imagine/question.service';
import {ImagineIfQuestion} from '../../../../dto/imagineIfQuestion';
import {ModalService} from '../../../../services/modal.service';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {

  form: FormGroup;

  constructor(private builder: FormBuilder,
              private questionService: QuestionService,
              private modalService: ModalService) {
    this.form = builder.group({
      question: [null],
      answer1: [null],
      answer2: [null],
      answer3: [null],
      answer4: [null],
      answer5: [null],
      answer6: [null]
    });
  }

  ngOnInit() {
  }

  submit() {
    const question = new ImagineIfQuestion(this.form.value);
    question.question = 'If [person] were a ' + this.form.value.question + ', which would they be?';
    this.questionService.save(question).subscribe(
      _question => {
        this.modalService.showBasicModal('Success', _question.question);
        this.form.reset();
      }, err => {
        this.modalService.showBasicModal('Error', 'Failed to save with error: ' + err);
        console.error(err);
      }
    );
  }

}
