import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiService } from '../services/api.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { Contact } from '../models/contact.model';
import { environment } from '../../environments/environment';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit, OnDestroy {

  pageTitle: string;
  contactsSub: Subscription;
  contacts: Contact[];


  constructor(private apiService: ApiService, private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.pageTitle = "Contacts";

    this.contactsSub = this.apiService.getContacts().subscribe(data => {
      this.contacts = data;
    });
  }

  ngOnDestroy() {
    this.contactsSub.unsubscribe();
  }

  handleEdit(event) {
    console.log(event);
    this.router.navigate(['/edit-form', event._id]);
  }

  handleDelete(event) {
    console.log(event);
  }

  goToAddContact() {
    this.router.navigate(['/contact-form']);
  }

  logOff() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}
