import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthErrorResponse } from '@auth/interfaces/auth.interface';
import { AuthService } from '@auth/services/auth.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
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
                        return AuthActions.signInSuccess(response);
                    }),
                    catchError((response: HttpErrorResponse) => {
                        const error = response?.error as AuthErrorResponse;
                        return of(AuthActions.signInFailure(error));
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
