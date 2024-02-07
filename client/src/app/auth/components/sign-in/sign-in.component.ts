import { Component, EventEmitter, Output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { SharedSubscriptionDirective } from '@shared/directives/subscription.directive';
import { AuthState } from '@store/reducers/auth.reducer';
import * as AuthActions from '@store/actions/auth.action';

interface SignInForm {
    email: AbstractControl<string>;
    password: AbstractControl<string>;
}

@Component({
    selector: 'app-sign-in',
    templateUrl: './sign-in.component.html',
    styleUrl: './sign-in.component.scss',
})
export class SignInComponent extends SharedSubscriptionDirective {
    @Output() isRegisterFormEvent$ = new EventEmitter();

    emailControl = new FormControl<string>('', {
        nonNullable: true,
        validators: [Validators.required, Validators.email],
    });
    passwordControl = new FormControl<string>('', {
        nonNullable: true,
        validators: [Validators.required],
    });

    form = new FormGroup<SignInForm>({
        email: this.emailControl,
        password: this.passwordControl,
    });

    constructor(private store: Store<AuthState>) {
        super();
    }

    onSwitchToRegisterForm(): void {
        this.isRegisterFormEvent$.emit(true);
    }

    onSignIn(): void {
        if (this.form.invalid) {
            this.form.markAllAsTouched();
            return;
        }

        this.store.dispatch(AuthActions.signIn(this.form.getRawValue()));
    }
}
