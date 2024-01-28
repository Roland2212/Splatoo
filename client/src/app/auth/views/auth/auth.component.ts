import { Component } from '@angular/core';

@Component({
    selector: 'app-auth-view',
    templateUrl: './auth.component.html',
    styleUrl: './auth.component.scss',
})
export class AuthViewComponent {
    isRegisterForm: boolean = false;

    onSwitchForm(isRegisterForm: boolean): void {
        this.isRegisterForm = isRegisterForm;
    }
}
