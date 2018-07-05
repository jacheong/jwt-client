import { Component, OnInit } from '@angular/core';
import { Contact } from '../models/contact.model';
import { ContactQuestionService } from '../services/contact-questions.service';
import { QuestionControlService } from '../services/question-control.service';
import { QuestionBase } from '../models/question-base.model';
import { ApiService } from '../services/api.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  pageTitle: string;
  questions: QuestionBase<any>[];
  payload: any;
  addMessage: string;
  form: FormGroup;

  constructor(
    private cqs: ContactQuestionService,
    private qcs: QuestionControlService,
    private apiService: ApiService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.pageTitle = "Add Contact";

    this.questions = this.cqs.getAddQuestions();
    this.form = this.qcs.toFormGroup(this.questions);

  }

  onSubmit() {
    this.payload = this.form.value;
    this.apiService.addContact(new Contact(this.payload)).subscribe(
      (result: any) => {
        console.log(result.message);
        this.addMessage = result.message;
        setTimeout(() => {
          this.goToContacts();
        }, 2000);
      },
      (err: any) => {
        console.log(err);
        this.addMessage = err.error.error;
        setTimeout(() => {
          this.addMessage = null;
          this.form.reset();
        }, 2000);
      });
  }

  goToContacts() {
    this.router.navigate(['/contacts']);
  }

  logOff() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}
