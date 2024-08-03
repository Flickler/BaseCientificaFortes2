import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

import { environment } from '@Environments/environment';
import {
  FortesMealCoffee,
  FortesMealDinner,
  FortesMealLunch,
} from '@Types/meal.type';

@Injectable({
  providedIn: 'root',
})
export class MealApi {
  private http = inject(HttpClient);
  private readonly path = environment.apiUrl + 'meal/';

  getCoffee(id: string, date: string) {
    return this.http.get<FortesMealCoffee[]>(this.path + 'coffee', {
      params: {
        managerId: id,
        date: date,
      },
    });
  }

  getLunch(id: string, date: string) {
    return this.http.get<FortesMealLunch[]>(this.path + 'lunch', {
      params: {
        managerId: id,
        date: date,
      },
    });
  }

  getDinner(id: string, date: string) {
    return this.http.get<FortesMealDinner[]>(this.path + 'dinner', {
      params: {
        managerId: id,
        date: date,
      },
    });
  }
}
