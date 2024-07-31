import { Component, inject } from '@angular/core';

import { TeamTableFacade } from '@Services/team-table-facade.service';
import { IconComponent } from './icon.component';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'fortes-team-table',
  standalone: true,
  imports: [ReactiveFormsModule, IconComponent],
  styleUrl: 'team-table.component.scss',
  templateUrl: 'team-table.component.html',
})
export class TeamTableComponent {
  private teamTableFacade = inject(TeamTableFacade);
  protected form = this.teamTableFacade.getForm();
}
