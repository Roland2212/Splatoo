import { Component } from '@angular/core';
import { CORE_LANGUAGES } from '@core/constants/languages.constant';
import { Language } from '@core/interfaces/languages.interface';
import { LayoutTypes } from '@core/interfaces/layout.interface';
import { CoreLayoutService } from '@core/services/layout.service';
import { TranslateService } from '@ngx-translate/core';
import { SharedSubscriptionDirective } from '@shared/directives/subscription.directive';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-root',
    template: `<div class="app-container" [class]="layoutType$ | async">
        <router-outlet></router-outlet>
    </div>`,
})
export class AppComponent extends SharedSubscriptionDirective {
    get layoutType$(): Observable<LayoutTypes> {
        return this.layoutService.layoutType$;
    }

    constructor(
        private translateService: TranslateService,
        private layoutService: CoreLayoutService,
    ) {
        super();

        this._getSavedLanguage();
    }

    private _getSavedLanguage(): void {
        const savedLanguage = localStorage.getItem('language') || Language.EN;
        this.translateService.addLangs(CORE_LANGUAGES);
        this.translateService.use(savedLanguage);
    }
}
