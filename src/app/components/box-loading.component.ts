import { Component } from '@angular/core';
import { BoxDirective } from '@Directives/box.directive';

@Component({
  selector: 'fortes-box-loading',
  standalone: true,
  hostDirectives: [{ directive: BoxDirective, inputs: ['height'] }],
  styleUrl: 'box-loading.component.scss',
  template: ``,
})
export class BoxLoadingComponent {}
