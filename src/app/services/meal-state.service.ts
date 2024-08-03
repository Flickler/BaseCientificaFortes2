import { Injectable, signal } from '@angular/core';

import {
  FortesMealCoffee,
  FortesMealDinner,
  FortesMealLunch,
} from '@Types/meal.type';

@Injectable({
  providedIn: 'root',
})
export class MealState {
  private _id = signal('');
  private _date = signal('');
  private _coffees = signal<FortesMealCoffee[]>([]);
  private _lunchs = signal<FortesMealLunch[]>([]);
  private _dinners = signal<FortesMealDinner[]>([]);
  private _loading = signal(false);
  private _error = signal(false);

  id = this._id.asReadonly();
  date = this._date.asReadonly();
  coffees = this._coffees.asReadonly();
  lunchs = this._lunchs.asReadonly();
  dinners = this._dinners.asReadonly();

  setId(id: string) {
    this._id.set(id);
  }

  setDate(date: string) {
    this._date.set(date);
  }

  setCoffees(coffees: FortesMealCoffee[]) {
    this._coffees.set(coffees);
  }

  setLunchs(lunchs: FortesMealLunch[]) {
    this._lunchs.set(lunchs);
  }

  setDinners(dinners: FortesMealDinner[]) {
    this._dinners.set(dinners);
  }

  setLoading(value: boolean) {
    this._loading.set(value);
  }

  setError(value: boolean) {
    this._error.set(value);
  }
}
