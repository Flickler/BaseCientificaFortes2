import { inject, Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { FortesEmployee } from '@Types/employee.type';

@Injectable({
  providedIn: 'root',
})
export class TeamTableFacade {
  private fb = inject(FormBuilder);
  private form = this.fb.group({
    employees: this.fb.array([]),
  });

  getForm() {
    return this.form;
  }

  addEmployees(employees: FortesEmployee) {
    this.form.controls.employees.push(
      this.fb.control({ name: employees.name, status: employees.status })
    );
  }

  submit() {
    //
  }
}
