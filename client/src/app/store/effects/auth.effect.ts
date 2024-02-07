import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '@auth/interfaces/user.interface';
import { AuthService } from '@auth/services/auth.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { SharedHttpError } from '@shared/interfaces/http-error.interface';
import * as AuthActions from '@store/actions/auth.action';
import { catchError, exhaustMap, map, of } from 'rxjs';

@Injectable()
export class AuthEffect {
    signIn$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(AuthActions.signIn),
            exhaustMap(credentials => {
                return this.authService.signIn(credentials).pipe(
                    map(response => {
                        void this.router.navigate([''], { relativeTo: this.route });
                        return AuthActions.signInSuccess(response as { user: User; token: string });
                    }),
                    catchError((errorResponse: HttpErrorResponse) => {
                        const error = errorResponse.error as SharedHttpError;
                        return of(AuthActions.signInFailure({ error }));
                    }),
                );
            }),
        );
    });

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private actions$: Actions,
        private authService: AuthService,
    ) {}
}
