import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { SharedMaterialModule } from './material.module';
import { SharedInputComponent } from '@shared/components/form/input/input.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        // Components
        SharedInputComponent,
    ],
    imports: [
        // Modules
        ReactiveFormsModule,
        TranslateModule,
        SharedMaterialModule,
    ],
    exports: [
        // Modules
        ReactiveFormsModule,
        TranslateModule,
        SharedMaterialModule,
        // Components
        SharedInputComponent,
    ],
    providers: [],
})
export class SharedModule {}
