import { Component, HostBinding, input } from '@angular/core';

import { ToastType } from '@Types/toast.type';
import { IconComponent } from './icon.component';

@Component({
  selector: 'fortes-toast',
  standalone: true,
  imports: [IconComponent],
  templateUrl: 'toast.component.html',
  styleUrl: 'toast.component.scss',
})
export class ToastComponent {
  type = input.required<ToastType>();
  @HostBinding('class') get className() {
    return this.type();
  }
}
