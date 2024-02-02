import { NgModule } from '@angular/core';
import { CoreOverviewViewComponent } from '@core/views/overview/overview.component';
import { CoreRoutingModule } from './routing.module';
import { SharedModule } from '@shared/modules/shared.module';
import { CoreSideNavigationComponent } from '@core/components/side-navigation/side-navigation.component';
import { CoreNavigationComponent } from '@core/components/navigation/navigation.component';

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
    providers: [],
})
export class CoreModule {}
