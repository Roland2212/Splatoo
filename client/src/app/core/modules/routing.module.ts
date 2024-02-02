import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreOverviewViewComponent } from '@core/views/overview/overview.component';

const ROUTES: Routes = [
    {
        path: '',
        component: CoreOverviewViewComponent,
        children: [
            {
                path: 'estimation',
                loadChildren: () => {
                    return import('@estimation/modules/estimation.module').then(m => {
                        return m.EstimationModule;
                    });
                },
            },
            {
                path: '**',
                redirectTo: 'estimation',
                pathMatch: 'full',
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class CoreRoutingModule {}
