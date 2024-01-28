import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-sign-in',
    templateUrl: './sign-in.component.html',
    styleUrl: './sign-in.component.scss',
})
export class SignInComponent {
    @Output() isRegisterFormEvent$ = new EventEmitter();

    emailControl = new FormControl('', [Validators.required, Validators.email]);
    passwordControl = new FormControl('', [Validators.required]);

    form = new FormGroup({
        email: this.emailControl,
        password: this.passwordControl,
    });

    onSwitchToRegisterForm(): void {
        this.isRegisterFormEvent$.emit(true);
    }

    onSignIn(): void {
        console.log('onSignIn');
    }
}
