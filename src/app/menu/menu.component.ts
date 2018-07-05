import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Input() title: string;
  @Output() contactsClick: EventEmitter<any> = new EventEmitter<any>();
  @Output() addClick: EventEmitter<any> = new EventEmitter<any>();
  @Output() logOutClick: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  handleContactsClick() {
    this.contactsClick.emit();
  }

  handleAddClick() {
    this.addClick.emit();
  }

  handleLogOutClick() {
    this.logOutClick.emit();
  }

}
