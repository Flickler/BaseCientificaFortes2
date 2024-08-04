import { Component, inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { Mealfacade } from '@Services/meal-facade.service';
import { CheckboxComponent } from '@Components/checkbox.component';
import { IconComponent } from '@Components/icon.component';
import { BoxLoadingComponent } from '@Components/box-loading.component';
import { BoxErrorComponent } from '@Components/box-error.component';

@Component({
  selector: 'fortes-team-table',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    IconComponent,
    CheckboxComponent,
    BoxLoadingComponent,
    BoxErrorComponent,
  ],
  styleUrl: 'team-table.component.scss',
  templateUrl: 'team-table.component.html',
})
export class TeamTableComponent {
  protected mealFacade = inject(Mealfacade);
}
