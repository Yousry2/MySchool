import { Component,Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldBase } from '../../core/dto/fields/field-base';


@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
 
})
export class FormFieldComponent {
    @Input() fieldBase: FieldBase<any>;
    @Input() form: FormGroup;
    get isValid() { return this.form.controls[this.fieldBase.key].valid; }
}
