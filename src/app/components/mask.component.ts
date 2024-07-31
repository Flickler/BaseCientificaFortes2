import { Component } from '@angular/core';

import { MaskDirective } from '@Directives/mask.directive';

@Component({
  selector: 'fortes-mask',
  standalone: true,
  hostDirectives: [MaskDirective],
  styleUrl: 'mask.component.scss',
  template: '',
})
export class MaskComponent {}
