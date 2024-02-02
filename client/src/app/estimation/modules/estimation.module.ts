import { NgModule } from '@angular/core';
import { EstimationOverviewViewComponent } from '@estimation/views/overview/overview.component';
import { EstimationRoutingModule } from './routing.module';
import { SharedModule } from '@shared/modules/shared.module';

@NgModule({
    declarations: [
        // Core

        // Views
        EstimationOverviewViewComponent,
    ],
    imports: [EstimationRoutingModule, SharedModule],
    exports: [],
    providers: [],
})
export class EstimationModule {}
