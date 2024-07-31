import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { IconComponent } from '@Components/icon.component';
import { TabComponent } from '@Components/tab.component';
import { TeamTableComponent } from '@Components/team-table.component';

@Component({
  selector: 'fortes-team',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    IconComponent,
    TabComponent,
    TeamTableComponent,
  ],
  styleUrl: 'team.component.scss',
  templateUrl: 'team.component.html',
})
export default class TeamComponent {}
