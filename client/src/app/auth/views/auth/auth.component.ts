import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
    selector: 'app-auth-view',
    templateUrl: './auth.component.html',
    styleUrl: './auth.component.scss',
    animations: [trigger('appear', [transition('void => *', [style({ opacity: 0 }), animate(1000)])])],
})
export class AuthViewComponent {
    isRegisterForm: boolean = false;

    onSwitchForm(isRegisterForm: boolean): void {
        this.isRegisterForm = isRegisterForm;
    }
}
