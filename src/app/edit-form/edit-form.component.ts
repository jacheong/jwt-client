import { Component, OnInit } from '@angular/core';
import { Contact } from '../models/contact.model';
import { ContactQuestionService } from '../services/contact-questions.service';
import { QuestionControlService } from '../services/question-control.service';
import { QuestionBase } from '../models/question-base.model';
import { ApiService } from '../services/api.service';
import { AuthService } from '../services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, Validators } from '@angular/forms';
import { FadeInOut } from '../animations/fadeInOut.animcation';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css'],
  animations: [FadeInOut]
})
export class EditFormComponent implements OnInit {

  showState = "show";
  pageTitle: string;
  questions: QuestionBase<any>[];
  editMessage: string;
  form: FormGroup;
  contact: Contact;
  payload: any;

  constructor(
    private cqs: ContactQuestionService,
    private qcs: QuestionControlService,
    private apiService: ApiService,
    private authService: AuthService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.pageTitle = "Edit Contact";
    this.apiService.getContact(this.activatedRoute.snapshot.params.id).subscribe(data => {
      this.contact = data;
      this.questions = this.cqs.getEditQuestions(this.contact);
      this.form = this.qcs.toFormGroup(this.questions);
    });

  }

  onSubmit() {
    this.payload = this.form.value;
    this.payload['_id'] = this.contact._id;
    this.apiService.updateContact(new Contact(this.payload)).subscribe(
      (result: any) => {
        this.goToContacts();
      },
      (err: any) => {
        console.log(err);
        this.editMessage = err.error.error;
        setTimeout(() => {
          this.editMessage = null;
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

  onCancel() {
    this.goToContacts();
  }
}
