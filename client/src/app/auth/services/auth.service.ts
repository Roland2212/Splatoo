import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '@auth/interfaces/user.interface';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {
    constructor(private http: HttpClient) {}

    signIn(credentials: Pick<User, 'email' | 'password'>): Observable<any> {
        return this.http.post(`http://localhost:5200/api/user/signin`, { ...credentials }, {});
    }

    signUp(user: Omit<User, 'id'>): Observable<any> {
        return this.http.post(`http://localhost:5200/api/user/signup`, { ...user }, {});
    }
}
