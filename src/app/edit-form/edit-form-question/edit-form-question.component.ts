import { Component, OnInit, Input } from '@angular/core';
import { QuestionBase } from '../../models/question-base.model';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-form-question',
  templateUrl: './edit-form-question.component.html',
  styleUrls: ['./edit-form-question.component.css']
})
export class EditFormQuestionComponent implements OnInit {

  @Input() question: QuestionBase<any>;
  @Input() form: FormGroup;

  constructor() { }

  ngOnInit() {
  }

  get isValid() {
    return this.form.controls[this.question.key].valid;
  }

}
