import { Injectable, signal } from '@angular/core';

import {
  FortesMeal,
  FortesGetMealCoffee,
  FortesGetMealLunch,
  FortesGetMealDinner,
} from '@Types/meal.type';

@Injectable({
  providedIn: 'root',
})
export class MealState {
  private _id = signal('');
  private _date = signal('');
  private _mealTarget = signal<FortesMeal>('coffee');
  private _coffees = signal<FortesGetMealCoffee[]>([]);
  private _lunches = signal<FortesGetMealLunch[]>([]);
  private _dinners = signal<FortesGetMealDinner[]>([]);
  private _loading = signal(false);
  private _error = signal(false);

  id = this._id.asReadonly();
  date = this._date.asReadonly();
  mealTarget = this._mealTarget.asReadonly();
  coffees = this._coffees.asReadonly();
  lunches = this._lunches.asReadonly();
  dinners = this._dinners.asReadonly();
  loading = this._loading.asReadonly();
  error = this._error.asReadonly();

  setId(id: string) {
    this._id.set(id);
  }

  setDate(date: string) {
    this._date.set(date);
  }

  setMealTarget(target: FortesMeal) {
    this._mealTarget.set(target);
  }

  setCoffees(coffees: FortesGetMealCoffee[]) {
    this._coffees.set(coffees);
  }

  setLunchs(lunchs: FortesGetMealLunch[]) {
    this._lunches.set(lunchs);
  }

  setDinners(dinners: FortesGetMealDinner[]) {
    this._dinners.set(dinners);
  }

  setLoading(value: boolean) {
    this._loading.set(value);
  }

  setError(value: boolean) {
    this._error.set(value);
  }
}
