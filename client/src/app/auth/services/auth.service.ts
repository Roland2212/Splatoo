import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { SIGN_IN_ERROR, SIGN_IN_LOADING, SIGN_IN_SUCCESS } from '@auth/constants/header-message.constant';
import { AuthResponse } from '@auth/interfaces/auth.interface';
import { User } from '@auth/interfaces/user.interface';
import { API_URL_TOKEN } from '@core/tokens/api-url.token';
import { setLoadingMessage, setSuccessMessage, setErrorMessage } from '@shared/utilities/request-messages.utility';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {
    constructor(
        @Inject(API_URL_TOKEN) private API_URL: string,
        private http: HttpClient,
    ) {}

    signIn(credentials: Pick<User, 'email' | 'password'>): Observable<AuthResponse> {
        return this.http.post<AuthResponse>(
            `${this.API_URL}/user/signin`,
            { ...credentials },
            {
                headers: {
                    ...setLoadingMessage(SIGN_IN_LOADING),
                    ...setSuccessMessage(SIGN_IN_SUCCESS),
                    ...setErrorMessage(SIGN_IN_ERROR),
                },
            },
        );
    }

    signUp(user: Omit<User, 'id'>): Observable<{ user: User; token: string }> {
        return this.http.post<{ user: User; token: string }>(`${this.API_URL}/user/signup`, { ...user }, {});
    }
}
