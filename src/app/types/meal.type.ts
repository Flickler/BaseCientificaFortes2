export interface FortesMeal {
  id: string;
  name: string;
}

export interface FortesMealCoffee extends FortesMeal {
  coffee: boolean;
}

export interface FortesMealLunch extends FortesMeal {
  lunch: boolean;
}

export interface FortesMealDinner extends FortesMeal {
  dinner: boolean;
}
