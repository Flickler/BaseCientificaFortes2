import { inject, Pipe, PipeTransform } from '@angular/core';
import { Mealfacade } from '@Services/meal-facade.service';

import { FortesMeal } from '@Types/meal.type';

@Pipe({
  name: 'fortesEmployeeMeal',
  standalone: true,
})
export class EmployeeMealPipe implements PipeTransform {
  transform(mealTarget: FortesMeal) {
    const mealFacade = inject(Mealfacade);
    if (mealTarget === 'coffee')
      return mealFacade.coffees().map((v, i) => {
        return {
          id: v.id,
          name: v.team.worker.name,
          value: v.coffee,
          index: i,
        };
      });
    if (mealTarget === 'lunch')
      return mealFacade.lunches().map((v, i) => {
        return {
          id: v.id,
          name: v.team.worker.name,
          value: v.lunch,
          index: i,
        };
      });
    else
      return mealFacade.dinners().map((v, i) => {
        return {
          id: v.id,
          name: v.team.worker.name,
          value: v.dinner,
          index: i,
        };
      });
  }
}
