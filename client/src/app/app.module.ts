import { NgModule, isDevMode } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { AuthModule } from '@auth/modules/auth.module';
import { RoutingModule } from './routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EntityDataModule } from '@ngrx/data';
import { entityConfig } from './entity-metadata';
import { API_URL_TOKEN } from '@core/tokens/api-url.token';
import { environment } from '@environments/environment';
import { CoreModule } from '@core/modules/core.module';

export function HttpTranslateLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        RoutingModule,
        AuthModule,
        CoreModule,
        TranslateModule.forRoot({
            defaultLanguage: 'en',
            loader: {
                provide: TranslateLoader,
                useFactory: HttpTranslateLoaderFactory,
                deps: [HttpClient],
            },
        }),
        StoreModule.forRoot(
            {},
            {
                runtimeChecks: {
                    strictStateImmutability: true,
                    strictStateSerializability: true,
                    strictActionImmutability: true,
                    strictActionSerializability: true,
                },
            },
        ),
        EffectsModule.forRoot([]),
        StoreRouterConnectingModule.forRoot(),
        EntityDataModule.forRoot(entityConfig),
        StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    ],
    providers: [{ provide: API_URL_TOKEN, useValue: environment.apiUrl }],
    bootstrap: [AppComponent],
})
export class AppModule {}
