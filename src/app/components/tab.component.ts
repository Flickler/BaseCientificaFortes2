import { Component, inject } from '@angular/core';

import { TabDirective } from '@Directives/tab.directive';
import { IconComponent } from './icon.component';

@Component({
  selector: 'fortes-tab',
  standalone: true,
  imports: [TabDirective, IconComponent],
  hostDirectives: [{ directive: TabDirective, inputs: ['icon', 'label'] }],
  styleUrl: 'tab.component.scss',
  template: `
    <fortes-icon
      [name]="tabDirective.icon()"
      [color]="tabDirective.active() ? 'white' : 'naviBlue'"
      size="20"
    />
    <span>{{ tabDirective.label() }}</span>
  `,
})
export class TabComponent {
  protected tabDirective = inject(TabDirective);
}
