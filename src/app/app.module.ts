import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactComponent } from './contact-list/contact/contact.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './services/auth.service';
import { ApiService } from './services/api.service';


@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ContactComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    AuthService,
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
