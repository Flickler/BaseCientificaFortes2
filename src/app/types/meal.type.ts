import { FortesTeamWorker } from './team.type';

export type FortesMeal = 'coffee' | 'lunch' | 'dinner';

export interface FortesGetMealResponse {
  id: string;
  team: FortesTeamWorker;
}

export interface FortesMealRequest {
  mealDate: string;
}

export interface FortesMealCoffee {
  id: string;
  coffee: boolean;
}

export interface FortesMealLunch {
  id: string;
  lunch: boolean;
}

export interface FortesMealDinner {
  id: string;
  dinner: boolean;
}

export interface FortesGetMealCoffee extends FortesGetMealResponse {
  coffee: boolean;
}

export interface FortesGetMealLunch extends FortesGetMealResponse {
  lunch: boolean;
}

export interface FortesGetMealDinner extends FortesGetMealResponse {
  dinner: boolean;
}

export interface FortesPutMealCoffee extends FortesMealRequest {
  coffees: FortesMealCoffee[];
}

export interface FortesPutMealLunch extends FortesMealRequest {
  lunches: FortesMealLunch[];
}

export interface FortesPutMealDinner extends FortesMealRequest {
  dinners: FortesMealDinner[];
}
