import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { AuthModule } from '@auth/modules/auth.module';
import { RoutingModule } from './routing.module';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, RoutingModule, AuthModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
