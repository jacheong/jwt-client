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

    headers: HttpHeaders = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.authService.getToken()}`
    });

    constructor(private http: HttpClient, private authService: AuthService) { }

    getContacts() {
        return this.http.get<Contact[]>(`${environment.apiUrl}/contacts`).pipe(
            catchError(this.handleError('getContacts', []))
        );
    }

    addContact(contact: Contact) {
        this.http.post<Contact>(`${environment.apiUrl}/conntacts`, contact).pipe(
            catchError(this.handleError('addContact', contact))
        );
    }

    removeContact(contact: Contact) {
        this.http.delete<Contact>(`${environment.apiUrl}/${contact._id}`).pipe(
            catchError(this.handleError('removeContact', contact))
        );
    }

    updateContact(contact: Contact) {
        this.http.put<Contact>(`${environment.apiUrl}/${contact._id}`, contact).pipe(
            catchError(this.handleError('updateContact', contact))
        );
    }

    login(user: User) {
        return this.http.post<User>(`${environment.apiUrl}/authenticate`, user).pipe(
            catchError(this.handleError('login', user))
        );
    }

    handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.log(error);
            return of(result as T);
        }
    }

}