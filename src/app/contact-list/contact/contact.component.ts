import { Component, OnInit, Input } from '@angular/core';
import { Contact } from '../../models/contact.model';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  @Input() contact: Contact;

  constructor() { }

  ngOnInit() {
    this.contact.photoUrl = `${environment.apiUrl}${this.contact.photoUrl}`;
  }

}
