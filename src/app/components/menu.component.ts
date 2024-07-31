import { Component, inject } from '@angular/core';

import { MenuDirective } from '@Directives/menu.directive';
import { IconComponent } from '@Components/icon.component';
import { MenuFacade } from '@Services/menu-facade.service';

@Component({
  selector: 'fortes-menu',
  standalone: true,
  imports: [IconComponent],
  hostDirectives: [MenuDirective],
  styleUrl: 'menu.component.scss',
  templateUrl: 'menu.component.html',
})
export class MenuComponent {
  protected menuFacade = inject(MenuFacade);
}
