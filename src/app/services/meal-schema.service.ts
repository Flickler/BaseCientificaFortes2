import { inject, Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { FortesCheckbox } from '@Types/forms.type';

@Injectable({
  providedIn: 'root',
})
export class MealSchema {
  private _fb = inject(FormBuilder);
  private _form = this._fb.group({
    filter: this._fb.control(''),
    employees: this._fb.array<boolean>([]),
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

  setEmployees(employees: FortesCheckbox[]) {
    employees.forEach((e) => this.employees.push(this._fb.control(e.status)));
  }

  clearEmployees() {
    this.employees.clear();
  }

  getForm() {
    return this.form;
  }
}
