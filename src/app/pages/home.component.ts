import { Component, inject } from '@angular/core';
import { AgendComponent } from '@Components/agend.component';

import { UserFacade } from '@Services/user-facade.service';
import { MenuComponent } from '@Components/menu.component';
import { TeamsComponent } from '@Components/teams.component';

@Component({
  selector: 'fortes-home',
  standalone: true,
  imports: [MenuComponent, AgendComponent, TeamsComponent],
  styleUrl: 'home.component.scss',
  templateUrl: 'home.component.html',
})
export default class HomeComponent {
  protected userFacade = inject(UserFacade);
}
