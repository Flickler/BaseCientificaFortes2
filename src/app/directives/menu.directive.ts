import { Directive, HostBinding, HostListener, inject } from '@angular/core';

import { MenuFacade } from '@Services/menu-facade.service';

@Directive({
  standalone: true,
})
export class MenuDirective {
  @HostBinding('tabindex') index = 0;
  @HostBinding('class.active') get isActive() {
    return this.menuFacade.active();
  }
  @HostListener('focusout') close() {
    setTimeout(() => this.menuFacade.close(), 100);
  }
  private menuFacade = inject(MenuFacade);
}
