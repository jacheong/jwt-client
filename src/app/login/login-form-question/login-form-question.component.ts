import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { QuestionBase } from '../../models/question-base.model';

@Component({
  selector: 'app-login-form-question',
  templateUrl: './login-form-question.component.html',
  styleUrls: ['./login-form-question.component.css']
})
export class LoginFormQuestionComponent implements OnInit {

  @Input() question: QuestionBase<any>;
  @Input() form: FormGroup;

  constructor() { }

  ngOnInit() {
  }

  get isValid() {
    return this.form.controls[this.question.key].valid;
  }

}
