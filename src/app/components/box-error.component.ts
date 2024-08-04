import { Component } from '@angular/core';
import { IconComponent } from './icon.component';
import { BoxDirective } from '@Directives/box.directive';

@Component({
  selector: 'fortes-box-error',
  standalone: true,
  imports: [IconComponent],
  hostDirectives: [{ directive: BoxDirective, inputs: ['height'] }],
  styleUrl: 'box-error.component.scss',
  template: `
    <fortes-icon name="error" color="uiError" size="32" />
    <p>
      <ng-content />
    </p>
  `,
})
export class BoxErrorComponent {}
