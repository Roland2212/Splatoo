import { User } from '@auth/interfaces/user.interface';
import * as AuthActions from '@store/actions/auth.action';
import { createReducer, on } from '@ngrx/store';
import { SharedHttpError } from '@shared/interfaces/http-error.interface';

export interface AuthState {
    user: User | null;
    token: string | null;
    error: SharedHttpError | null;
}

export const initialState: AuthState = {
    user: null,
    token: null,
    error: null,
};

export const authReducer = createReducer(
    initialState,
    on(AuthActions.signIn, (state, _action) => {
        return { ...state };
    }),
    on(AuthActions.signInSuccess, (state, { user, token }) => {
        return { ...state, user, token, error: null };
    }),
    on(AuthActions.signInFailure, (state, { error }) => {
        return { ...state, user: null, token: null, error };
    }),
);
