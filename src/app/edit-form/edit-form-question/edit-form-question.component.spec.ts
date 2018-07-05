import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFormQuestionComponent } from './edit-form-question.component';

describe('EditFormQuestionComponent', () => {
  let component: EditFormQuestionComponent;
  let fixture: ComponentFixture<EditFormQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditFormQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFormQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
