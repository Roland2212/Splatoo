import { NgModule } from '@angular/core';
import { AuthRoutingModule } from './routing.module';
import { AuthViewComponent } from '@auth/views/auth/auth.component';

@NgModule({
    declarations: [AuthViewComponent],
    imports: [AuthRoutingModule],
})
export class AuthModule {}
