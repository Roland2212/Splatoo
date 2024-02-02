import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { User } from '@auth/interfaces/user.interface';
import { API_URL_TOKEN } from '@core/tokens/api-url.token';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {
    constructor(
        @Inject(API_URL_TOKEN) private API_URL: string,
        private http: HttpClient,
    ) {}

    signIn(credentials: Pick<User, 'email' | 'password'>): Observable<{ user: User; token: string }> {
        return this.http.post<{ user: User; token: string }>(`${this.API_URL}/user/signin`, { ...credentials }, {});
    }

    signUp(user: Omit<User, 'id'>): Observable<{ user: User; token: string }> {
        return this.http.post<{ user: User; token: string }>(`${this.API_URL}/user/signup`, { ...user }, {});
    }
}
