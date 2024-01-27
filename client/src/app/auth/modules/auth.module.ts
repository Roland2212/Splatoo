import { NgModule } from '@angular/core';
import { AuthRoutingModule } from './routing.module';
import { AuthViewComponent } from '@auth/views/auth/auth.component';
import { SharedModule } from '@shared/modules/shared.module';
import { SignInComponent } from '@auth/components/sign-in/sign-in.component';
import { SignUpComponent } from '@auth/components/sign-up/sign-up.component';

@NgModule({
    declarations: [
        // Components
        SignInComponent,
        SignUpComponent,
        // View
        AuthViewComponent,
    ],
    imports: [AuthRoutingModule, SharedModule],
})
export class AuthModule {}
