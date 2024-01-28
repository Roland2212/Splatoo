import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';

const MATERIAL_MODULES = [MatInputModule, MatButtonModule, MatCardModule, MatIconModule, MatRippleModule];

@NgModule({
    imports: [...MATERIAL_MODULES],
    exports: [...MATERIAL_MODULES],
})
export class SharedMaterialModule {}
