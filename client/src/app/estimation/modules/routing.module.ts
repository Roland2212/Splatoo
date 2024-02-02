import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstimationOverviewViewComponent } from '@estimation/views/overview/overview.component';

const ROUTES: Routes = [
    {
        path: '',
        component: EstimationOverviewViewComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class EstimationRoutingModule {}
