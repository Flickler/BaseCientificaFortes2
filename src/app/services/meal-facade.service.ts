import { inject, Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { MealApi } from './meal-api.service';
import { MealState } from './meal-state.service';
import { catchError, of, take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Mealfacade {
  private activatedRoute = inject(ActivatedRoute);
  private api = inject(MealApi);
  private state = inject(MealState);

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

  setQueryParams(id: string, date: string) {
    this.state.setId(id);
    this.state.setDate(date);
    this.getCoffee();
    this.getLunch();
    this.getDinner();
  }

  clearParams() {
    this.state.setId('');
    this.state.setDate('');
  }

  getCoffee() {
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
        if (res) this.state.setCoffees(res);
        this.state.setLoading(false);
      });
  }

  getLunch() {
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

  getDinner() {
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
}
