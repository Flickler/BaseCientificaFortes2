import { inject, Injectable } from '@angular/core';

import { EmployeesApi } from './employees-api.service';
import { EmployeesState } from './employees-state.service';

@Injectable({
  providedIn: 'root',
})
export class EmployeesFacade {
  private api = inject(EmployeesApi);
  private state = inject(EmployeesState);

  employees = this.state.employees;

  // getEmployees() {}
}
