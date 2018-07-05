import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { AuthService } from './auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Contact } from '../models/contact.model';
import { User } from '../models/user.model';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ApiService {

    constructor(private http: HttpClient, private authService: AuthService) { }

    getContacts() {
        let headers: HttpHeaders = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.authService.getToken()}`
        });
        return this.http.get<Contact[]>(`${environment.apiUrl}/contacts`, { headers: headers });
    }

    addContact(contact: Contact) {
        let headers: HttpHeaders = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.authService.getToken()}`
        });
        return this.http.post<Contact>(`${environment.apiUrl}/contacts`, contact, { headers: headers });
    }

    removeContact(contact: Contact) {
        let headers: HttpHeaders = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.authService.getToken()}`
        });
        return this.http.delete<Contact>(`${environment.apiUrl}/${contact._id}`, { headers: headers });
    }

    updateContact(contact: Contact) {
        let headers: HttpHeaders = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.authService.getToken()}`
        });
        return this.http.put<Contact>(`${environment.apiUrl}/${contact._id}`, contact, { headers: headers });
    }

    login(user: User) {
        return this.http.post<User>(`${environment.apiUrl}/authenticate`, user);
    }

}