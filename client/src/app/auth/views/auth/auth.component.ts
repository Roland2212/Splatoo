import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { CORE_LANGUAGES, CORE_LANGUAGES_FLAGS_MAP } from '@core/constants/languages.constant';
import { Language } from '@core/interfaces/languages.interface';
import { TranslateService } from '@ngx-translate/core';
import { tap } from 'rxjs';

@Component({
    selector: 'app-auth-view',
    templateUrl: './auth.component.html',
    styleUrl: './auth.component.scss',
    animations: [trigger('appear', [transition('void => *', [style({ opacity: 0 }), animate(1000)])])],
})
export class AuthViewComponent implements OnInit {
    isRegisterForm: boolean = false;
    applicationLanguages = CORE_LANGUAGES;
    languagesFlagsMap = CORE_LANGUAGES_FLAGS_MAP;
    currentLanguage = this.translateService.currentLang;

    constructor(private translateService: TranslateService) {}

    ngOnInit(): void {
        this._onLanguageChanges();
    }

    onSelectLanguage(language: string): void {
        this.translateService.use(language);
    }

    onSwitchForm(isRegisterForm: boolean): void {
        this.isRegisterForm = isRegisterForm;
    }

    private _onLanguageChanges(): void {
        this.translateService.onLangChange
            .pipe(
                tap(language => {
                    this.currentLanguage = language.lang;
                }),
            )
            .subscribe();
    }
}
