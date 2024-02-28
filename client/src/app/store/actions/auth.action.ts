import { AuthErrorResponse, AuthResponse, Credentials } from '@auth/interfaces/auth.interface';
import { createAction, props } from '@ngrx/store';

export const signIn = createAction('[AUTH] sign in', props<Credentials>());
export const signInSuccess = createAction('[AUTH] sign in success', props<AuthResponse>());
export const signInFailure = createAction('[AUTH] sign in failure', props<AuthErrorResponse>());

// export const signUp = createAction('[AUTH] sign up', props());

// export const signUpSuccess = createAction('[AUTH] sign up success', props<{ user: User; token: string }>());

// export const signUpFailure = createAction('[AUTH] sign up failure', props<{ error: SharedError }>());

// export const signOut = createAction('[AUTH] sign out');
