import { Injectable }   from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { FieldBase } from '../dto/fields/field-base';

@Injectable()
export class FieldControlService {
  constructor() { }

  toFormGroup(fieldBases: FieldBase<any>[] ) {
      let group: any = {};
      fieldBases.forEach(fieldBase => {
      group[fieldBase.key] = fieldBase.required ? new FormControl(fieldBase.value || '', Validators.required)
                                              : new FormControl(fieldBase.value || '');
     // group[fieldBase.key].disabled = group[fieldBase.dependant].value = '' ? false : true;
    });
    return new FormGroup(group);
  }
}