import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactComponent } from './contact-list/contact/contact.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './services/auth.service';
import { ApiService } from './services/api.service';
import { QuestionControlService } from './services/question-control.service';
import { LoginQuestionsService } from './services/login-questions.service';
import { LoginFormQuestionComponent } from './login/login-form-question/login-form-question.component';


@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ContactComponent,
    LoginComponent,
    LoginFormQuestionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
    AuthService,
    ApiService,
    QuestionControlService,
    LoginQuestionsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
