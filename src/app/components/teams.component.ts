import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AgendFacade } from '@Services/agend-facade.service';

import { TeamFacade } from '@Services/team-facade.service';

@Component({
  selector: 'fortes-teams',
  standalone: true,
  imports: [RouterLink],
  styleUrl: 'teams.component.scss',
  template: `
    <h2>Equipes</h2>
    <div class="teams_container">
      @for(team of teamFacade.teams(); track $index) {
      <a
        routerLink="team"
        [queryParams]="{ id: team.id, date: agendFacade.targetDateISO() }"
      >
        {{ team.sector }}
      </a>
      }
    </div>
  `,
})
export class TeamsComponent {
  protected teamFacade = inject(TeamFacade);
  protected agendFacade = inject(AgendFacade);
}
