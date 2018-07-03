import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { QuestionBase } from '../models/question-base.model';
import { QuestionControlService } from '../services/question-control.service';
import { LoginQuestionsService } from '../services/login-questions.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  questions: QuestionBase<any>[];
  form: FormGroup;
  payload = '';

  constructor(private qcs: QuestionControlService, private lqs: LoginQuestionsService) { }

  ngOnInit() {
    this.questions = this.lqs.getQuestions();
    this.form = this.qcs.toFormGroup(this.questions);
  }

  onSubmit() {
    this.payload = JSON.stringify(this.form.value);
    console.log(this.payload);
  }

}
