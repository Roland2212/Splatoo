import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from '@store/reducers/auth.reducer';

export const selectAuth = createFeatureSelector<AuthState>('auth');

export const selectUser = createSelector(selectAuth, state => {
    return state.user;
});

export const selectToken = createSelector(selectAuth, state => {
    return state.token;
});

export const selectError = createSelector(selectAuth, state => {
    return state.error;
});

export const selectIsUserSignedIn = createSelector(selectAuth, state => {
    return !!state.user;
});
