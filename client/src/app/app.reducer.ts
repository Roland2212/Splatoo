import { RouterState, routerReducer } from '@ngrx/router-store';
import { ActionReducerMap } from '@ngrx/store';
import { AuthState, authReducer } from '@store/reducers/auth.reducer';

export interface AppState {
    router: RouterState;
    auth: AuthState;
}

export const appReducers: ActionReducerMap<AppState> = {
    router: routerReducer,
    auth: authReducer,
};
