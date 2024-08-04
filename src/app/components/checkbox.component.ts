import { Component, forwardRef, input, model } from '@angular/core';
import {
  ControlValueAccessor,
  FormsModule,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

import { IconComponent } from './icon.component';

@Component({
  selector: 'fortes-checkbox',
  standalone: true,
  imports: [FormsModule, IconComponent],
  styleUrl: 'checkbox.component.scss',
  templateUrl: 'checkbox.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxComponent),
      multi: true,
    },
  ],
})
export class CheckboxComponent implements ControlValueAccessor {
  id = input.required<string>();
  value = model(false);
  isDisable = model(false);

  onChange?: (value: boolean) => void;
  onTouched?: () => void;

  writeValue(value: boolean) {
    this.value.set(value);
    if (this.onChange) this.onChange(value);
    if (this.onTouched) this.onTouched();
  }

  registerOnChange(fn: (value: boolean) => void) {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void) {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.isDisable.set(isDisabled);
  }
}
