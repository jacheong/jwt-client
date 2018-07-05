import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
import { AuthGuard } from './services/auth.guard';
import { ContactQuestionService } from './services/contact-questions.service';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MenuComponent } from './menu/menu.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { EditFormComponent } from './edit-form/edit-form.component';
import { ContactFormQuestionComponent } from './contact-form/contact-form-question/contact-form-question.component';


@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ContactComponent,
    LoginComponent,
    LoginFormQuestionComponent,
    MenuComponent,
    ContactFormComponent,
    EditFormComponent,
    ContactFormQuestionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatProgressSpinnerModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    ApiService,
    QuestionControlService,
    ContactQuestionService,
    LoginQuestionsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
