import { User } from './user.interface';
import { SharedHttpError } from '@shared/interfaces/http-error.interface';

export interface AuthResponse {
    user: User;
    token: string;
}

export interface AuthErrorResponse {
    error: SharedHttpError;
}

export interface Credentials {
    email: string;
    password: string;
}

export interface Registration extends Credentials {
    // TODO: Add sign up interface
}
