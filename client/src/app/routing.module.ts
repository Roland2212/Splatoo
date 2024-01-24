import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const ROUTES: Routes = [
    {
        path: 'auth',
        loadChildren: () => {
            return import('@auth/modules/auth.module').then(m => {
                return m.AuthModule;
            });
        },
    },
];

@NgModule({
    imports: [RouterModule.forRoot(ROUTES)],
    exports: [RouterModule],
})
export class RoutingModule {}
