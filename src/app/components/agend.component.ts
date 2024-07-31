import { Component, inject } from '@angular/core';

import { AgendFacade } from '@Services/agend-facade.service';
import { WeekBadgeDirective } from '@Directives/week-badge.directive';
import { IconComponent } from './icon.component';

@Component({
  selector: 'fortes-agend',
  standalone: true,
  imports: [IconComponent, WeekBadgeDirective],
  styleUrl: 'agend.component.scss',
  templateUrl: 'agend.component.html',
})
export class AgendComponent {
  protected agendFacade = inject(AgendFacade);
}
