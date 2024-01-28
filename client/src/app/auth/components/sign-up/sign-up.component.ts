import { Component, EventEmitter, Output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '@auth/services/auth.service';
import { SharedSubscriptionDirective } from '@shared/directives/subscription.directive';

interface SignUpForm {
    firstName: AbstractControl<string>;
    lastName: AbstractControl<string>;
    email: AbstractControl<string>;
    password: AbstractControl<string>;
    confirmPassword: AbstractControl<string>;
}

@Component({
    selector: 'app-sign-up',
    templateUrl: './sign-up.component.html',
    styleUrl: './sign-up.component.scss',
})
export class SignUpComponent extends SharedSubscriptionDirective {
    @Output() isRegisterFormEvent$ = new EventEmitter();

    firstNameControl = new FormControl<string>('', { nonNullable: true, validators: [Validators.required] });
    lastNameControl = new FormControl<string>('', { nonNullable: true, validators: [Validators.required] });
    emailControl = new FormControl<string>('', {
        nonNullable: true,
        validators: [Validators.required, Validators.email],
    });
    passwordControl = new FormControl<string>('', { nonNullable: true, validators: [Validators.required] });
    confirmPasswordControl = new FormControl<string>('', { nonNullable: true, validators: [Validators.required] });

    form = new FormGroup<SignUpForm>({
        firstName: this.firstNameControl,
        lastName: this.lastNameControl,
        email: this.emailControl,
        password: this.passwordControl,
        confirmPassword: this.confirmPasswordControl,
    });

    constructor(private authService: AuthService) {
        super();
    }

    onSwitchToLoginForm(): void {
        this.isRegisterFormEvent$.emit(false);
    }

    onSignUp(): void {
        if (this.form.invalid) {
            this.form.markAllAsTouched();
            return;
        }

        console.log(this.form.getRawValue());

        this.subscription(this.authService.signUp(this.form.getRawValue()).pipe().subscribe());
    }
}
