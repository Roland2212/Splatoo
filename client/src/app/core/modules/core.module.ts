import { NgModule } from '@angular/core';
import { CoreOverviewViewComponent } from '@core/views/overview/overview.component';
import { CoreRoutingModule } from './routing.module';
import { SharedModule } from '@shared/modules/shared.module';
import { CoreSideNavigationComponent } from '@core/components/side-navigation/side-navigation.component';
import { CoreNavigationComponent } from '@core/components/navigation/navigation.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CoreNotificationInterceptor } from '@core/interceptors/notification.interceptor';

@NgModule({
    declarations: [
        // Components
        CoreSideNavigationComponent,
        CoreNavigationComponent,
        // Views
        CoreOverviewViewComponent,
        // Dialogs
    ],
    imports: [CoreRoutingModule, SharedModule],
    exports: [],
    providers: [{ provide: HTTP_INTERCEPTORS, useClass: CoreNotificationInterceptor, multi: true }],
})
export class CoreModule {}
