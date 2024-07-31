import { Directive, HostBinding, inject } from '@angular/core';

import { MaskFacade } from '@Services/mask-facade.service';

@Directive({
  standalone: true,
})
export class MaskDirective {
  @HostBinding('class.active') get isActive() {
    return this.maskFacade.active();
  }
  private maskFacade = inject(MaskFacade);
}
