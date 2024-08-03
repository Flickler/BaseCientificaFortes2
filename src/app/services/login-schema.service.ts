import { inject, Injectable } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class LoginSchema {
  private fb = inject(NonNullableFormBuilder);
  private _form = this.fb.group({
    email: this.fb.control('', [Validators.required, Validators.email]),
    password: this.fb.control('', [
      Validators.required,
      Validators.maxLength(16),
      Validators.minLength(8),
    ]),
  });

  get form() {
    return this._form;
  }
}
