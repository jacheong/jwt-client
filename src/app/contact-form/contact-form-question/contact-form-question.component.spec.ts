import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactFormQuestionComponent } from './contact-form-question.component';

describe('ContactFormQuestionComponent', () => {
  let component: ContactFormQuestionComponent;
  let fixture: ComponentFixture<ContactFormQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactFormQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactFormQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
