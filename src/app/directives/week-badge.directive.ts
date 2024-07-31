import {
  Directive,
  HostBinding,
  HostListener,
  inject,
  input,
  numberAttribute,
} from '@angular/core';

import { AgendFacade } from '@Services/agend-facade.service';

@Directive({
  selector: '[fortesWeekBadge]',
  standalone: true,
})
export class WeekBadgeDirective {
  @HostBinding('class') get className() {
    return this.agendFacade.targetWeek() === this.week()
      ? 'agend_week_action active'
      : 'agend_week_action';
  }

  @HostListener('click') onClick() {
    this.agendFacade.setWeekDay(this.week());
  }

  private agendFacade = inject(AgendFacade);

  week = input.required({
    alias: 'fortesWeekBadge',
    transform: numberAttribute,
  });
}
