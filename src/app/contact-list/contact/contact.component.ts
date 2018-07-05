import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Contact } from '../../models/contact.model';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  @Input() contact: Contact;
  @Output() editClick: EventEmitter<Contact> = new EventEmitter<Contact>();
  @Output() deleteClick: EventEmitter<Contact> = new EventEmitter<Contact>();

  constructor() { }

  ngOnInit() {
    this.contact.photoUrl = `${environment.apiUrl}${this.contact.photoUrl}`;
  }

  editClicked() {
    this.editClick.emit(this.contact);
  }

  deleteClicked() {
    this.deleteClick.emit(this.contact);
  }

}
