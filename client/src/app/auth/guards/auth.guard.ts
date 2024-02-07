import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable, tap } from 'rxjs';
import { AppState } from '../../app.reducer';
import { selectIsUserSignedIn } from '@store/selectors/auth.selector';

export const authGuardFn: CanActivateFn = (): Observable<boolean> => {
    const store = inject(Store<AppState>);
    const router = inject(Router);

    return store.pipe(
        select(selectIsUserSignedIn),
        tap(isUserSignedIn => {
            if (!isUserSignedIn) {
                void router.navigate(['auth']);
            }
        }),
    );
};
