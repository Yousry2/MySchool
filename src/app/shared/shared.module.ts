import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {CustomMaterialModule} from './CustomMaterial/custom.material.module';
import {FormFieldComponent} from './form-field/form-field.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        CustomMaterialModule
    ],
    providers: [
       
    ],
    declarations: [
        FormFieldComponent
        
    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        CustomMaterialModule,
        FormFieldComponent
    ]
})

export class SharedModule {
}