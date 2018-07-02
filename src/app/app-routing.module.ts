import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactListComponent } from './contact-list/contact-list.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'contacts', pathMatch: 'full' },
  { path: 'contacts', component: ContactListComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
