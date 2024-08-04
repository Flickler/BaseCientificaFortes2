import { computed, inject, Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { catchError, of, take } from 'rxjs';

import { MealApi } from '@Services/meal-api.service';
import { MealState } from '@Services/meal-state.service';
import { MealSchema } from '@Services/meal-schema.service';
import { FortesMeal } from '@Types/meal.type';

@Injectable({
  providedIn: 'root',
})
export class Mealfacade {
  private activatedRoute = inject(ActivatedRoute);
  private api = inject(MealApi);
  private state = inject(MealState);
  private schema = inject(MealSchema);

  constructor() {
    this.activatedRoute.queryParams
      .pipe(takeUntilDestroyed())
      .subscribe((queryParams) => {
        const id = queryParams['id'];
        const date = queryParams['date'];
        if (id && date) this.setQueryParams(id, date);
        else this.clearParams();
      });
  }

  meals = computed(() => {
    if (this.state.mealTarget() === 'coffee') return this.state.coffees();
    if (this.state.mealTarget() === 'lunch') return this.state.lunches();
    else return this.state.dinners();
  });
  quantity = computed(() => this.meals().length);

  loading = this.state.loading;
  error = this.state.error;
  form = this.schema.form;
  employees = this.schema.employees;

  private setQueryParams(id: string, date: string) {
    this.state.setId(id);
    this.state.setDate(date);
    this.getCoffee();
    this.getLunch();
    this.getDinner();
  }

  private clearParams() {
    this.state.setId('');
    this.state.setDate('');
  }

  private getCoffee() {
    this.state.setError(false);
    this.state.setLoading(true);

    return this.api
      .getCoffee(this.state.id(), this.state.date())
      .pipe(
        take(1),
        catchError(() => {
          this.state.setError(true);
          return of(null);
        })
      )
      .subscribe((res) => {
        if (res) {
          this.state.setCoffees(res);
          this.setEmployees('coffee');
        }
        this.state.setLoading(false);
      });
  }

  private getLunch() {
    this.state.setError(false);
    this.state.setLoading(true);

    return this.api
      .getLunch(this.state.id(), this.state.date())
      .pipe(
        take(1),
        catchError(() => {
          this.state.setError(true);
          return of(null);
        })
      )
      .subscribe((res) => {
        if (res) this.state.setLunchs(res);
        this.state.setLoading(false);
      });
  }

  private getDinner() {
    this.state.setError(false);
    this.state.setLoading(true);

    return this.api
      .getDinner(this.state.id(), this.state.date())
      .pipe(
        take(1),
        catchError(() => {
          this.state.setError(true);
          return of(null);
        })
      )
      .subscribe((res) => {
        if (res) this.state.setDinners(res);
        this.state.setLoading(false);
      });
  }

  setMealTarget(target: FortesMeal) {
    this.state.setMealTarget(target);
    this.schema.clearEmployees();
  }

  setEmployees(target: FortesMeal) {
    if (target === 'coffee')
      this.schema.setEmployees(
        this.state.coffees().map((c) => {
          return {
            id: c.id,
            status: c.coffee,
            name: c.team.worker.name,
          };
        })
      );
    if (target === 'lunch')
      this.schema.setEmployees(
        this.state.lunches().map((c) => {
          return {
            id: c.id,
            status: c.lunch,
            name: c.team.worker.name,
          };
        })
      );
    if (target === 'dinner')
      this.schema.setEmployees(
        this.state.dinners().map((c) => {
          return {
            id: c.id,
            status: c.dinner,
            name: c.team.worker.name,
          };
        })
      );
  }

  submit(target: FortesMeal) {
    const formValue = this.employees.value;
    if (target === 'coffee')
      this.api.putCoffee(
        this.state.coffees().map((worker, index) => {
          return {
            id: worker.id,
            coffee: formValue[index] ?? true,
          };
        }),
        this.state.date()
      );
    if (target === 'lunch')
      this.api.putCoffee(
        this.state.lunches().map((worker, index) => {
          return {
            id: worker.id,
            coffee: formValue[index] ?? true,
          };
        }),
        this.state.date()
      );
    if (target === 'dinner')
      this.api.putCoffee(
        this.state.dinners().map((worker, index) => {
          return {
            id: worker.id,
            coffee: formValue[index] ?? true,
          };
        }),
        this.state.date()
      );
  }
}
