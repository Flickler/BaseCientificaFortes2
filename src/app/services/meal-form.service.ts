import { inject, Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class MealForm {
  private _fb = inject(FormBuilder);
  private _form = this._fb.group({
    filter: this._fb.control(''),
    employees: this._fb.array([
      this._fb.control(true),
      this._fb.control(true),
      this._fb.control(true),
      this._fb.control(true),
      this._fb.control(true),
      this._fb.control(true),
    ]),
  });

  get form() {
    return this._form;
  }

  get filter() {
    return this.form.controls.filter;
  }

  get employees() {
    return this.form.controls.employees;
  }

  getForm() {
    return this.form;
  }

  submit() {
    //
  }
}
