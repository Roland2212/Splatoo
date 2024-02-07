import { User } from '@auth/interfaces/user.interface';
import { createAction, props } from '@ngrx/store';
import { SharedHttpError } from '@shared/interfaces/http-error.interface';

export const signIn = createAction('[AUTH] sign in', props<{ email: string; password: string }>());
export const signInSuccess = createAction('[AUTH] sign in success', props<{ user: User; token: string }>());
export const signInFailure = createAction('[AUTH] sign in failure', props<{ error: SharedHttpError }>());

// export const signUp = createAction('[AUTH] sign up', props());

// export const signUpSuccess = createAction('[AUTH] sign up success', props<{ user: User; token: string }>());

// export const signUpFailure = createAction('[AUTH] sign up failure', props<{ error: SharedError }>());

// export const signOut = createAction('[AUTH] sign out');
