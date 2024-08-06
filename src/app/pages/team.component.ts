import { Component, inject, OnDestroy } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { Mealfacade } from '@Services/meal-facade.service';
import { IconComponent } from '@Components/icon.component';
import { TabComponent } from '@Components/tab.component';
import { TeamTableComponent } from '@Components/team-table.component';
import { DateISOPipe } from '@Pipes/date-iso.pipe';

@Component({
  selector: 'fortes-team',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    IconComponent,
    TabComponent,
    TeamTableComponent,
    DateISOPipe,
  ],
  styleUrl: 'team.component.scss',
  templateUrl: 'team.component.html',
})
export default class TeamComponent implements OnDestroy {
  protected mealFacade = inject(Mealfacade);

  ngOnDestroy() {
    this.mealFacade.clearEmployees();
  }
}
