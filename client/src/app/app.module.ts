import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { AuthModule } from '@auth/modules/auth.module';
import { RoutingModule } from './routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

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
        TranslateModule.forRoot({
            defaultLanguage: 'en',
            loader: {
                provide: TranslateLoader,
                useFactory: HttpTranslateLoaderFactory,
                deps: [HttpClient],
            },
        }),
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
