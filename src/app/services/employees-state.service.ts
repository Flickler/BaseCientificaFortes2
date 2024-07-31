import { Injectable, signal } from '@angular/core';
import { FortesEmployee } from '@Types/employee.type';

@Injectable({
  providedIn: 'root',
})
export class EmployeesState {
  private _employees = signal<FortesEmployee[]>([]);

  employees = this._employees.asReadonly();
}
