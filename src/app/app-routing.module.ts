import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './services/auth.guard';
import { ContactListComponent } from './contact-list/contact-list.component';
import { LoginComponent } from './login/login.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { EditFormComponent } from './edit-form/edit-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'contacts', component: ContactListComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent, },
  { path: 'contact-form', component: ContactFormComponent, canActivate: [AuthGuard] },
  { path: 'edit-form/:id', component: EditFormComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '/contacts' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
