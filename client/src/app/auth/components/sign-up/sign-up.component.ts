import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-sign-up',
    templateUrl: './sign-up.component.html',
    styleUrl: './sign-up.component.scss',
})
export class SignUpComponent {
    @Output() isRegisterFormEvent$ = new EventEmitter();

    firstNameControl = new FormControl('', [Validators.required]);
    lastNameControl = new FormControl('', [Validators.required]);
    emailControl = new FormControl('', [Validators.required, Validators.email]);
    passwordControl = new FormControl('', [Validators.required]);
    confirmPasswordControl = new FormControl('', [Validators.required]);

    form = new FormGroup({
        firstName: this.firstNameControl,
        lastName: this.lastNameControl,
        email: this.emailControl,
        password: this.passwordControl,
        confirmPassword: this.confirmPasswordControl,
    });

    onSwitchToLoginForm(): void {
        this.isRegisterFormEvent$.emit(false);
    }

    onSignUp(): void {
        console.log('onSignUp');
    }
}
