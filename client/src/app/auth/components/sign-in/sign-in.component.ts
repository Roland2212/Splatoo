import { Component, EventEmitter, Output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '@auth/services/auth.service';
import { SharedSubscriptionDirective } from '@shared/directives/subscription.directive';

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

    constructor(private authService: AuthService) {
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

        console.log(this.form.getRawValue());

        this.subscription(this.authService.signIn(this.form.getRawValue()).pipe().subscribe());
    }
}
