import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { QuestionBase } from '../models/question-base.model';
import { QuestionControlService } from '../services/question-control.service';
import { LoginQuestionsService } from '../services/login-questions.service';
import { ApiService } from '../services/api.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { User } from '../models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  questions: QuestionBase<any>[];
  form: FormGroup;
  payload: any;
  loginMessage = "";
  loading = false;

  constructor(
    private qcs: QuestionControlService,
    private lqs: LoginQuestionsService,
    private api: ApiService,
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.questions = this.lqs.getQuestions();
    this.form = this.qcs.toFormGroup(this.questions);
  }

  onSubmit() {
    this.loading = true;
    this.payload = this.form.value;

    this.api.login(new User(this.payload)).subscribe(
      (result: any) => {
        this.loginMessage = result.message;
        this.auth.setToken(result.token);
        this.loading = false;
        this.router.navigate(['/contacts']);
      },
      (err: any) => {
        this.loading = false;
        this.loginMessage = err.error.error;
        setTimeout(() => {
          this.loginMessage = null;
        }, 2000);

      }
    );
  }

}
