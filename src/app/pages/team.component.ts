import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { IconComponent } from '@Components/icon.component';

@Component({
  selector: 'fortes-team',
  standalone: true,
  imports: [RouterLink, IconComponent],
  styleUrl: 'team.component.scss',
  templateUrl: 'team.component.html',
})
export default class TeamComponent {}
