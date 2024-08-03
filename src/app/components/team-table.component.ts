import { Component, inject } from '@angular/core';

import { IconComponent } from './icon.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CheckboxComponent } from './checkbox.component';
import { MealForm } from '@Services/meal-form.service';

@Component({
  selector: 'fortes-team-table',
  standalone: true,
  imports: [ReactiveFormsModule, IconComponent, CheckboxComponent],
  styleUrl: 'team-table.component.scss',
  templateUrl: 'team-table.component.html',
})
export class TeamTableComponent {
  protected formService = inject(MealForm);
}
