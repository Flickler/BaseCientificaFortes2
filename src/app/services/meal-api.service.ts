import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

import { environment } from '@Environments/environment';
import {
  FortesGetMealCoffee,
  FortesGetMealDinner,
  FortesGetMealLunch,
  FortesMealCoffee,
  FortesMealDinner,
  FortesMealLunch,
  FortesPutMealCoffee,
  FortesPutMealDinner,
  FortesPutMealLunch,
} from '@Types/meal.type';

@Injectable({
  providedIn: 'root',
})
export class MealApi {
  private http = inject(HttpClient);
  private readonly path = environment.apiUrl + 'meal/';

  getCoffee(id: string, date: string) {
    return this.http.get<FortesGetMealCoffee[]>(this.path + 'coffee', {
      params: {
        teamManagementId: id,
        date: date,
      },
    });
  }

  getLunch(id: string, date: string) {
    return this.http.get<FortesGetMealLunch[]>(this.path + 'lunch', {
      params: {
        teamManagementId: id,
        date: date,
      },
    });
  }

  getDinner(id: string, date: string) {
    return this.http.get<FortesGetMealDinner[]>(this.path + 'dinner', {
      params: {
        teamManagementId: id,
        date: date,
      },
    });
  }

  putCoffee(meals: FortesMealCoffee[], date: string) {
    return this.http.put<FortesPutMealCoffee>(this.path + 'update-coffee', {
      coffees: meals,
      mealDate: date,
    });
  }

  putLunch(meals: FortesMealLunch[], date: string) {
    return this.http.put<FortesPutMealLunch>(this.path + 'update-lunch', {
      lunches: meals,
      mealDate: date,
    });
  }

  putDinner(meals: FortesMealDinner[], date: string) {
    return this.http.put<FortesPutMealDinner>(this.path + 'update-dinner', {
      dinners: meals,
      mealDate: date,
    });
  }
}
