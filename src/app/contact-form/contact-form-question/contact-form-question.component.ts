import { Component, OnInit, Input } from '@angular/core';
import { QuestionBase } from '../../models/question-base.model';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact-form-question',
  templateUrl: './contact-form-question.component.html',
  styleUrls: ['./contact-form-question.component.css']
})
export class ContactFormQuestionComponent implements OnInit {

  @Input() question: QuestionBase<any>;
  @Input() form: FormGroup;

  constructor() { }

  ngOnInit() {
  }

  get isValid() {
    return this.form.controls[this.question.key].valid;
  }
}
