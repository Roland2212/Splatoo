import { NgModule } from '@angular/core';
import { CoreOverviewViewComponent } from '@core/views/overview/overview.component';
import { CoreRoutingModule } from './routing.module';
import { SharedModule } from '@shared/modules/shared.module';
import { CoreSideNavigationComponent } from '@core/components/side-navigation/side-navigation.component';
import { CoreNavigationComponent } from '@core/components/navigation/navigation.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CoreNotificationInterceptor } from '@core/interceptors/notification.interceptor';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';
import { CORE_SNACKBAR_DURATION } from '@core/constants/notification.constant';
import { CoreNotificationComponent } from '@core/components/notification/notification.component';

@NgModule({
    declarations: [
        // Components
        CoreSideNavigationComponent,
        CoreNavigationComponent,
        CoreNotificationComponent,
        // Views
        CoreOverviewViewComponent,
        // Dialogs
    ],
    imports: [CoreRoutingModule, SharedModule],
    exports: [],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: CoreNotificationInterceptor, multi: true },
        {
            provide: MAT_SNACK_BAR_DEFAULT_OPTIONS,
            useValue: {
                duration: CORE_SNACKBAR_DURATION,
                horizontalPosition: 'center',
                verticalPosition: 'bottom',
            },
        },
    ],
})
export class CoreModule {}
