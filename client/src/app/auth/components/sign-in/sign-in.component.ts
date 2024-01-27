import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-sign-in',
    templateUrl: './sign-in.component.html',
    styleUrl: './sign-in.component.scss',
})
export class SignInComponent {
    emailControl = new FormControl('');
    passwordControl = new FormControl('');

    form = new FormGroup({
        email: this.emailControl,
        password: this.passwordControl,
    });
}
