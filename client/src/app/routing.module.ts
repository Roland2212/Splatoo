import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuardFn } from '@auth/guards/auth.guard';

const ROUTES: Routes = [
    {
        path: 'auth',
        loadChildren: () => {
            return import('@auth/modules/auth.module').then(m => {
                return m.AuthModule;
            });
        },
    },
    {
        path: '',
        loadChildren: () => {
            return import('@core/modules/core.module').then(m => {
                return m.CoreModule;
            });
        },
        canActivate: [authGuardFn],
    },
    {
        path: '**',
        redirectTo: 'auth',
    },
];

@NgModule({
    imports: [RouterModule.forRoot(ROUTES)],
    exports: [RouterModule],
})
export class RoutingModule {}
