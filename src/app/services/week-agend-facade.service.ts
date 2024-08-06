import { computed, Injectable, signal } from '@angular/core';

import { WeekAgendComponent } from '@Components/week-agend.component';
import {
  getCurrentDate,
  getThursday,
  nextWeek,
  previousWeek,
} from '@Utils/date';

@Injectable({
  providedIn: WeekAgendComponent,
})
export class WeekAgendFacade {
  private _weekCalendar = signal({
    start: getThursday(true),
    end: getThursday(),
  });

  weekCalendar = this._weekCalendar.asReadonly();
  start = computed(() => getCurrentDate(this._weekCalendar().start));
  end = computed(() => getCurrentDate(this._weekCalendar().end));

  previousWeek() {
    this._weekCalendar.set({
      start: previousWeek(this._weekCalendar().start),
      end: previousWeek(this._weekCalendar().end),
    });
  }

  nextWeek() {
    this._weekCalendar.set({
      start: nextWeek(this._weekCalendar().start),
      end: nextWeek(this._weekCalendar().end),
    });
  }
}
