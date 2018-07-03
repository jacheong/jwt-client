import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginFormQuestionComponent } from './login-form-question.component';

describe('LoginFormQuestionComponent', () => {
  let component: LoginFormQuestionComponent;
  let fixture: ComponentFixture<LoginFormQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginFormQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginFormQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
