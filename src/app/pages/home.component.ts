import { Component } from '@angular/core';
import { AgendComponent } from '@Components/agend.component';

import { MenuComponent } from '@Components/menu.component';
import { TeamsComponent } from '@Components/teams.component';

@Component({
  selector: 'fortes-home',
  standalone: true,
  imports: [MenuComponent, AgendComponent, TeamsComponent],
  styleUrl: 'home.component.scss',
  templateUrl: 'home.component.html',
})
export default class HomeComponent {}
