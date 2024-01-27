import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-root',
    template: `<div class="app-container">
        <router-outlet></router-outlet>
    </div>`,
})
export class AppComponent {
    constructor(public translateService: TranslateService) {
        this._getSavedLanguage();
    }

    private _getSavedLanguage(): void {
        const savedLanguage = localStorage.getItem('language') || 'en';
        this.translateService.addLangs(['en', 'ua']);
        this.translateService.use(savedLanguage);
    }
}
