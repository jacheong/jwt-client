import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Contact } from '../models/contact.model';
import { environment } from '../../environments/environment';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit, OnDestroy {

  contactsSub: Subscription;
  contacts: Contact[];


  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.contactsSub = this.apiService.getContacts().subscribe(data => {
      this.contacts = data;
    });
  }

  ngOnDestroy() {
    this.contactsSub.unsubscribe();
  }

}
