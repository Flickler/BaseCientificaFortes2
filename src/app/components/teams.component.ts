import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'fortes-teams',
  standalone: true,
  imports: [RouterLink],
  styleUrl: 'teams.component.scss',
  template: `
    <h2>Equipes</h2>
    <div class="teams_container">
      <a routerLink="team">Equipe setor 1</a>
      <a routerLink="team">Equipe setor 2</a>
      <a routerLink="team">Equipe setor 3</a>
    </div>
  `,
})
export class TeamsComponent {}
